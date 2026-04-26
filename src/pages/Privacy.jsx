import React from 'react';
import FadeIn from '../components/shared/FadeIn';

export default function Privacy() {
  return (
    <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-accent">
            Legal Information
          </span>
          <h1 className="mt-6 font-heading text-4xl md:text-5xl font-light leading-tight text-foreground">
            Privacy Policy
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 md:mt-24 space-y-12 text-sm md:text-base text-muted-foreground leading-relaxed">
          
          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">1. Introduction</h2>
            <p className="mb-4">
              KAZZIUS CAPITAL GROUP LTD (“Kazzius Capital,” “we,” “us,” “our”) is committed to protecting and respecting your privacy.
            </p>
            <p className="mb-4">
              This Privacy Policy explains what personal data we collect when you visit our website https://kazziuscapital.com/ (the “Website”), how we process that data, and your rights regarding that data.
            </p>
            <p className="mb-4">
              This policy applies to data collected directly by us. When you use services provided by our partners, their own privacy policies will apply.
            </p>
            <h3 className="font-heading text-foreground mt-6 mb-2">Data Controller Details:</h3>
            <ul className="list-none space-y-1 mt-4 border-l border-border pl-4">
              <li><strong>Company Name:</strong> KAZZIUS CAPITAL GROUP LTD</li>
              <li><strong>Company Number:</strong> 16596167</li>
              <li><strong>Registered Office:</strong> 20 Wenlock Road, London, England, N1 7GU</li>
              <li><strong>Contact Email:</strong> support@kazziuscapital.com</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">2. Our Relationship with Service Partners</h2>
            <p className="mb-4">
              Kazzius Capital is an introductory platform. We do not provide regulated payment services directly.
            </p>
            <p className="mb-4">
              When you register for a Private or Business Account, we collect your information to introduce you to our regulated service partners:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Global Currency Exchange Network Ltd T/A GC Partners</li>
              <li>Sciopay Ltd</li>
            </ul>
            <p>
              We will securely share your personal data with these partners so they can open your account and provide regulated foreign exchange and payment services. Once transferred, they act as the data controllers for the services they provide, and their privacy policies will apply.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">3. What Data We Collect</h2>
            <p className="mb-4">We may collect and process the following types of personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, residential address.</li>
              <li><strong>Business Information:</strong> Company name, business type, registration details (for Business Accounts).</li>
              <li><strong>Enquiry Data:</strong> Information submitted in contact forms, emails, or messages.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, pages visited, time spent on the Website (collected via cookies).</li>
              <li><strong>Registration Data:</strong> Details submitted for account creation, including information needed for AML and KYC checks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">4. How We Use Your Data</h2>
            
            <h3 className="font-heading text-foreground mt-6 mb-2">To Provide Our Services</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Purpose:</strong> Register you as a user and process your Private or Business Account application.</li>
              <li><strong>Legal Basis:</strong> Performance of a contract.</li>
            </ul>

            <h3 className="font-heading text-foreground mt-6 mb-2">To Share with Partners</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Purpose:</strong> Introduce you to GC Partners or Sciopay Ltd for regulated services.</li>
              <li><strong>Legal Basis:</strong> Performance of a contract.</li>
            </ul>

            <h3 className="font-heading text-foreground mt-6 mb-2">To Respond to Enquiries</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Purpose:</strong> Respond to questions submitted via contact form or email.</li>
              <li><strong>Legal Basis:</strong> Legitimate interests.</li>
            </ul>

            <h3 className="font-heading text-foreground mt-6 mb-2">To Improve Our Website</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Purpose:</strong> Analyse Website usage and improve functionality.</li>
              <li><strong>Legal Basis:</strong> Legitimate interests.</li>
            </ul>

            <h3 className="font-heading text-foreground mt-6 mb-2">To Comply with Legal Obligations</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Purpose:</strong> Meet legal, compliance, and regulatory requirements.</li>
              <li><strong>Legal Basis:</strong> Legal obligation.</li>
            </ul>

            <h3 className="font-heading text-foreground mt-6 mb-2">For Marketing</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Purpose:</strong> Send updates about our services (only with your consent).</li>
              <li><strong>Legal Basis:</strong> Consent (withdrawable at any time).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">5. Who We Share Your Data With</h2>
            <p className="mb-4">We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Regulated Service Partners:</strong> GC Partners and Sciopay Ltd.</li>
              <li><strong>Third-Party Service Providers:</strong> Website hosting, analytics providers (e.g., Google Analytics), IT support.</li>
              <li><strong>Regulators or Authorities:</strong> When required by law or to comply with investigations.</li>
            </ul>
            <p>
              All third parties must respect your data privacy and process data lawfully.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">6. Data Security</h2>
            <p>
              We use appropriate technical and organisational measures to protect your data from unauthorised access, loss, or misuse. Access is restricted to staff and third parties with a legitimate need to know.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes we collected it for and to meet legal, regulatory, tax, or reporting requirements.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">8. Your Data Protection Rights</h2>
            <p className="mb-4">Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Access your personal data.</li>
              <li>Rectify inaccurate or incomplete information.</li>
              <li>Request erasure of your personal data in certain circumstances.</li>
              <li>Restrict processing in certain situations.</li>
              <li>Data portability: Request transfer of your data to you or another organisation.</li>
              <li>Object to processing (including direct marketing).</li>
              <li>Withdraw consent at any time, where applicable.</li>
            </ul>
            <p>
              To exercise these rights, contact us at support@kazziuscapital.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">9. Cookies</h2>
            <p>
              Our Website uses cookies to enhance your experience and support Website functionality. For full details, see our Cookie Policy (linked in the Website footer).
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">10. Links to Other Websites</h2>
            <p>
              Our Website contains links to partner websites and other external sites. This Privacy Policy applies only to this Website. You should review the privacy policies of any external websites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updated versions will be posted on this page. You should review this page periodically to stay informed.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">12. How to Complain</h2>
            <p className="mb-4">If you have concerns about your personal data, contact us at support@kazziuscapital.com.</p>
            <p className="mb-4">You also have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO):</p>
            <ul className="list-none space-y-1 border-l border-border pl-4">
              <li><strong>Website:</strong> <a href="https://ico.org.uk/concerns" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">https://ico.org.uk/concerns</a></li>
              <li><strong>Helpline:</strong> 0303 123 1113</li>
            </ul>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
