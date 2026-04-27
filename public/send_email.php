<?xml version="1.0" encoding="UTF-8"?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit();
}

// Get raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    // Fallback to standard POST array if not JSON
    $data = $_POST;
}

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$type = htmlspecialchars(trim($data['type'] ?? 'Not Specified'));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit();
}

$to = "privateoffice@kazziuscapital.com";
$subject = "New Private Inquiry: $name";

// HTML Email Template
$htmlContent = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Inquiry</title>
    <style>
        body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #050505;
            color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #0a0a0a;
            border: 1px solid #1a1a1a;
            border-top: 4px solid #7B35C1;
            padding: 40px;
        }
        .header {
            text-align: center;
            padding-bottom: 30px;
            border-bottom: 1px solid #1a1a1a;
            margin-bottom: 30px;
        }
        .header h1 {
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 2px;
            margin: 0;
            text-transform: uppercase;
            color: #ffffff;
        }
        .header p {
            font-size: 10px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #7B35C1;
            margin-top: 10px;
            margin-bottom: 0;
        }
        .details-box {
            background-color: #111111;
            padding: 25px;
            border-radius: 4px;
            margin-bottom: 30px;
        }
        .detail-row {
            margin-bottom: 15px;
        }
        .detail-row:last-child {
            margin-bottom: 0;
        }
        .label {
            display: block;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #666666;
            margin-bottom: 5px;
        }
        .value {
            font-size: 16px;
            color: #ffffff;
            line-height: 1.5;
        }
        .message-box {
            border-left: 2px solid #7B35C1;
            padding-left: 20px;
            margin-top: 10px;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 11px;
            color: #444444;
            border-top: 1px solid #1a1a1a;
            padding-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Kazzius Capital</h1>
            <p>Private Inquiry Received</p>
        </div>
        
        <div class="details-box">
            <div class="detail-row">
                <span class="label">Principal / Representative</span>
                <div class="value"><strong>' . $name . '</strong></div>
            </div>
            <div class="detail-row">
                <span class="label">Return Contact</span>
                <div class="value"><a href="mailto:' . $email . '" style="color: #7B35C1; text-decoration: none;">' . $email . '</a></div>
            </div>
            <div class="detail-row">
                <span class="label">Nature of Inquiry</span>
                <div class="value">' . $type . '</div>
            </div>
        </div>

        <div class="detail-row">
            <span class="label">Confidential Message</span>
            <div class="message-box value">
                ' . nl2br($message) . '
            </div>
        </div>

        <div class="footer">
            This communication was securely transmitted via the Kazzius Capital portal.<br>
            Strictly Confidential &bull; Intended for Private Office Only
        </div>
    </div>
</body>
</html>
';

// ==========================================
// RESEND API CONFIGURATION
// ==========================================
// 1. Get your API key from https://resend.com/api-keys
$resend_api_key = "re_YOUR_RESEND_API_KEY_HERE"; 

// 2. Set the FROM address. 
// If you haven't verified kazziuscapital.com in Resend, use "onboarding@resend.dev"
// If you have verified it, use something like "noreply@kazziuscapital.com"
$from_email = "onboarding@resend.dev";
// ==========================================

$post_data = json_encode([
    'from' => 'Kazzius Portal <' . $from_email . '>',
    'to' => [$to],
    'reply_to' => $email,
    'subject' => $subject,
    'html' => $htmlContent
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $resend_api_key,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 || $http_code === 201) {
    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Inquiry sent successfully.", "resend" => json_decode($response)]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send inquiry.", "error_details" => json_decode($response)]);
}
?>
