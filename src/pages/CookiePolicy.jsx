import React from 'react';
import FadeIn from '../components/shared/FadeIn';

export default function CookiePolicy() {
  return (
    <section className="pt-32 md:pt-44 pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-xs tracking-widest uppercase text-accent">
            Legal Information
          </span>
          <h1 className="mt-6 font-heading text-4xl md:text-5xl font-light leading-tight text-foreground">
            Cookie Policy
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 md:mt-24 space-y-12 text-sm md:text-base text-muted-foreground leading-relaxed">
          
          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">1. What is a Cookie?</h2>
            <p className="mb-4">
              This Cookie Policy explains what cookies are, how we use them on our website https://kazziuscapital.com/ (the “Website”), and your choices regarding their use.
            </p>
            <p>
              Cookies are small text files placed on your computer or mobile device by a website when you visit it. They are widely used to make websites function properly or more efficiently, and to provide information to website owners.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ensure the Website functions correctly.</li>
              <li>Understand how visitors use our Website to help us improve its performance and user experience.</li>
              <li>Remember your preferences and settings (where applicable) for a more personalised experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6 mt-6">
              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">Strictly Necessary Cookies</h3>
                <p>Essential for navigating the Website and using its core features, such as accessing secure areas. These cookies do not require your consent.</p>
              </div>

              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">Performance and Analytics Cookies</h3>
                <p>Collect anonymous, aggregated information about how visitors use the Website (e.g., Google Analytics). This helps us improve functionality and performance.</p>
              </div>

              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">Functionality Cookies</h3>
                <p>Allow the Website to remember your choices (such as language or region) and provide enhanced, personalised features.</p>
              </div>

              <div className="bg-muted/10 p-6 rounded-sm border border-border/50">
                <h3 className="font-heading text-foreground mb-2">Targeting or Advertising Cookies</h3>
                <p>These cookies deliver advertisements relevant to your interests, limit how often you see ads, and measure ad campaign effectiveness. They are usually placed by advertising networks with the Website operator’s consent.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">4. Third-Party Cookies</h2>
            <p>
              Some third parties (such as providers of analytics services like Google Analytics) may also place cookies on your device. We do not control these cookies, which are typically analytical or performance-related.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">5. Your Choices: How to Manage Cookies</h2>
            <p className="mb-4">When you first visit our Website, you will see a cookie banner requesting your consent for non-essential cookies.</p>
            <p className="mb-4">You can also manage or block cookies at any time through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Block all cookies.</li>
              <li>Block only third-party cookies.</li>
              <li>Block cookies from specific websites.</li>
              <li>Delete all cookies when closing the browser.</li>
            </ul>
            <p className="mb-4 italic">Please note that blocking or deleting essential cookies may cause parts of the Website to stop functioning correctly.</p>
            
            <p className="mb-4">More information on managing cookies in major browsers:</p>
            <ul className="list-none space-y-2 mb-4 border-l border-border pl-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Microsoft Edge</li>
              <li>Apple Safari</li>
            </ul>
            <p>
              Additional guidance is available at <a href="http://www.allaboutcookies.org" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time due to changes in technology, legislation, or our data practices. Updates will be posted on this page with a revised “Last Updated” date.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-heading text-foreground mb-4">7. Contact Us</h2>
            <p className="mb-4">If you have any questions about our use of cookies, you can contact us:</p>
            <ul className="list-none space-y-1 border-l border-border pl-4">
              <li><strong>Company:</strong> KAZZIUS CAPITAL GROUP LTD</li>
              <li><strong>Email:</strong> support@kazziuscapital.com</li>
              <li><strong>Address:</strong> 20 Wenlock Road, N1 7GU, London, United Kingdom</li>
            </ul>
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
