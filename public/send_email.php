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
            background: linear-gradient(135deg, #f4f4f8 0%, #e8e8f0 100%);
            color: #1a1a1a;
            margin: 0;
            padding: 40px 20px;
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            padding: 0 0 40px 0;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.03);
            overflow: hidden;
        }
        .top-accent {
            height: 6px;
            background: linear-gradient(90deg, #4a1f73 0%, #7B35C1 50%, #9b51e0 100%);
            width: 100%;
        }
        .content-wrapper {
            padding: 0 45px;
        }
        .header {
            text-align: center;
            padding: 45px 0 35px;
            border-bottom: 1px solid #f0f0f0;
            margin-bottom: 40px;
        }
        .header img {
            height: 70px;
            margin-bottom: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        .header p {
            font-size: 11px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #7B35C1;
            font-weight: 600;
            margin: 0;
        }
        .details-box {
            background-color: #fafafa;
            padding: 30px 35px;
            border-radius: 10px;
            border: 1px solid #f0f0f0;
            margin-bottom: 35px;
            position: relative;
        }
        .details-box::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background-color: #eaeaea;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        .detail-row {
            margin-bottom: 24px;
        }
        .detail-row:last-child {
            margin-bottom: 0;
        }
        .label {
            display: block;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
            margin-bottom: 8px;
            font-weight: 600;
        }
        .value {
            font-size: 17px;
            color: #222222;
            line-height: 1.5;
        }
        .message-wrapper {
            margin-top: 15px;
        }
        .message-box {
            border-left: 3px solid #7B35C1;
            padding: 25px 30px;
            color: #444444;
            background: linear-gradient(to right, #f9f5fd 0%, #ffffff 100%);
            border-radius: 0 10px 10px 0;
            font-size: 16px;
            line-height: 1.7;
            font-style: italic;
            position: relative;
        }
        .footer {
            margin-top: 50px;
            text-align: center;
            font-size: 11px;
            color: #999999;
            border-top: 1px solid #f0f0f0;
            padding-top: 30px;
            line-height: 1.6;
        }
        .contact-badge {
            display: inline-block;
            padding: 6px 14px;
            background-color: #f4ebfc;
            color: #7B35C1;
            border-radius: 20px;
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-accent"></div>
        <div class="content-wrapper">
            <div class="header">
                <img src="https://kazziuscapital.com/logo.png" alt="Kazzius Capital">
                <p>Private Inquiry Received</p>
            </div>
            
            <div class="details-box">
                <div class="detail-row">
                    <span class="label">Principal / Representative</span>
                    <div class="value"><strong>' . $name . '</strong></div>
                </div>
                <div class="detail-row">
                    <span class="label">Return Contact</span>
                    <div class="value"><a href="mailto:' . $email . '" class="contact-badge">' . $email . '</a></div>
                </div>
                <div class="detail-row">
                    <span class="label">Nature of Inquiry</span>
                    <div class="value">' . $type . '</div>
                </div>
            </div>

            <div class="detail-row message-wrapper">
                <span class="label">Confidential Message</span>
                <div class="message-box value">
                    "' . nl2br($message) . '"
                </div>
            </div>

            <div class="footer">
                This communication was securely transmitted via the Kazzius Capital portal.<br>
                Strictly Confidential &bull; Intended for Private Office Only
            </div>
        </div>
    </div>
</body>
</html>
';

// ==========================================
// RESEND API CONFIGURATION
// ==========================================
// 1. Securely load API key
if (file_exists(__DIR__ . '/config.php')) {
    require_once __DIR__ . '/config.php';
}

$resend_api_key = defined('RESEND_API_KEY') ? RESEND_API_KEY : getenv('RESEND_API_KEY');

if (empty($resend_api_key) || $resend_api_key === 're_YOUR_RESEND_API_KEY_HERE') {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Server configuration error: API key missing."]);
    exit();
}

// 2. Set the FROM address. 
// Since you own kazziuscapital.com, you can send from this address
// Note: Make sure kazziuscapital.com is verified in your Resend dashboard!
$from_email = "privateoffice@kazziuscapital.com";
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
