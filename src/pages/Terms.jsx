import React from 'react';
import FadeIn from '../components/shared/FadeIn';

export default function Terms() {
  return (
    <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-accent">
            Legal Information
          </span>
          <h1 className="mt-6 font-heading text-4xl md:text-5xl font-light leading-tight text-foreground">
            Terms & Conditions
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 md:mt-24 space-y-12 text-sm md:text-base text-muted-foreground leading-relaxed">
          
          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Kazzius Capital. These Terms and Conditions (“Terms”) govern your use of the website https://kazziuscapital.com/ (the “Website”) and the services offered through it.
            </p>
            <p className="mb-4">
              By accessing or using our Website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you must not use our Website.
            </p>
            <p className="mb-4">
              These Terms form an agreement between you (the “User,” “you”) and KAZZIUS CAPITAL GROUP LTD (“Kazzius Capital,” “we,” “us,” “our”).
            </p>
            <ul className="list-none space-y-1 mt-4 border-l border-border pl-4">
              <li><strong>Company Name:</strong> KAZZIUS CAPITAL GROUP LTD</li>
              <li><strong>Company Number:</strong> 16596167</li>
              <li><strong>Registered Office:</strong> 20 Wenlock Road, London, England, N1 7GU</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">2. Our Role and Relationship with Partners</h2>
            <p className="italic text-accent mb-4">This is a critical section. Please read it carefully.</p>
            <p className="mb-4">
              KAZZIUS CAPITAL GROUP LTD operates the Website as a platform to introduce you to and facilitate your access to foreign exchange and payment services.
            </p>
            <p className="mb-4 text-foreground">
              <strong>KAZZIUS CAPITAL GROUP LTD does not directly provide any regulated payment or foreign exchange services.</strong>
            </p>
            <p className="mb-4">
              The foreign exchange and payment services advertised on this Website (including but not limited to International Payments, Mass Payments, Hedging, Forward Contracts, and Named Collection Accounts) are provided by our regulated partners:
            </p>
            
            <div className="space-y-6 mt-6">
              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">1. Global Currency Exchange Network Ltd T/A GC Partners</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Authorised by the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 (FCA number: 504346).</li>
                  <li>Registered as a Money Services Business and regulated by HM Revenue & Customs (HMRC) under the Money Laundering Regulations 2017 (Registration number: 12137189).</li>
                  <li>Registered in England and Wales (Company number: 04675786).</li>
                </ul>
              </div>

              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">2. Sciopay Ltd</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Authorised by the Financial Conduct Authority (FCA) as an Authorised Payment Institution (Firm Reference Number: 927951).</li>
                  <li>Incorporated in England and Wales (Company No. 12352935).</li>
                </ul>
              </div>
            </div>
            
            <p className="mt-6">
              When you register for and use any financial services, you will enter into a separate client agreement directly with either GC Partners or Sciopay Ltd. Their terms and conditions will govern all aspects of the financial services, including transactions, funds, and dispute resolution.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">3. Protection of Funds</h2>
            <p className="mb-4">As stated by our regulated partners:</p>
            <p className="bg-muted/10 p-4 border-l-2 border-accent italic">
              All relevant client funds are held in separate, segregated accounts with tier-one banks. This ensures client funds are ring-fenced from company operational funds and protected in the unlikely event of a company liquidation.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">4. User Eligibility and Registration</h2>
            <p className="mb-4">To use our Website and register for an account, you must:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Be at least 18 years old.</li>
              <li>Have the legal capacity to enter into a binding contract.</li>
              <li>Provide accurate, current, and complete information during registration.</li>
            </ul>
            <p>
              You are responsible for maintaining the confidentiality of your login credentials and for all actions taken under your account. You must notify us immediately of any unauthorised use.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">5. Use of the Website</h2>
            <p className="mb-4">You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of others.</p>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use the Website for any fraudulent or illegal purpose.</li>
              <li>Use crawlers, bots, or automated tools to scrape or copy Website content.</li>
              <li>Attempt to gain unauthorised access to our systems or user accounts.</li>
              <li>Transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              All content on the Website, including text, images, graphics, logos, and software, is the property of KAZZIUS CAPITAL GROUP LTD or its licensors and is protected under UK and international copyright law.
            </p>
            <p>
              You are granted a limited, non-exclusive licence to access and use the Website for personal or business purposes in connection with the Services. You may not copy, modify, distribute, sell, or lease any portion of our Website or software.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">7. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="font-heading text-foreground mt-6 mb-2">1. No Financial Advice</h3>
            <p className="mb-4">Content on this Website is for general information only. It does not constitute financial or investment advice.</p>

            <h3 className="font-heading text-foreground mt-6 mb-2">2. Website Availability</h3>
            <p className="mb-4">The Website is provided “as is” and “as available.” We do not guarantee uninterrupted access or error-free operation.</p>

            <h3 className="font-heading text-foreground mt-6 mb-2">3. Limitation of Liability</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>KAZZIUS CAPITAL GROUP LTD is responsible only for operating this Website. We are not a party to your agreements with GC Partners or Sciopay Ltd.</li>
              <li>We are not liable for losses or damages arising from services provided by our partners, including exchange rate fluctuations, transaction issues, or fund security.</li>
              <li>To the fullest extent permitted by law, we exclude all liability for direct, indirect, or consequential loss arising from your use of our Website.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">8. Third-Party Links</h2>
            <p>
              The Website contains links to third-party websites, including those of our partners (GC Partners and Sciopay Ltd). These links are provided for convenience only. We have no control over third-party content and accept no responsibility for any loss or damage arising from your use of such sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">9. Amendments to These Terms</h2>
            <p>
              We may amend these Terms at any time. Changes will be posted on this page with an updated “Last Updated” date. Continued use of the Website constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of England and Wales. You agree that the courts of England and Wales have exclusive jurisdiction regarding disputes arising from these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have questions regarding these Terms, contact us:</p>
            <ul className="list-none space-y-1 border-l border-border pl-4">
              <li><strong>Email:</strong> support@kazziuscapital.com</li>
              <li><strong>Address:</strong> 20 Wenlock Road, N1 7GU, London, United Kingdom</li>
            </ul>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
