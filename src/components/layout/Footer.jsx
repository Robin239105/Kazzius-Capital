import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="hairline" />
      <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-heading text-lg md:text-xl text-muted-foreground tracking-wide italic leading-relaxed">
            Access by invitation only.<br />
            Kazzius Capital operates with absolute discretion.
          </p>
          
          <div className="mt-12 text-[10px] md:text-xs text-muted-foreground/60 leading-relaxed text-center max-w-4xl mx-auto space-y-4">
            <p>
              KAZZIUS CAPITAL GROUP LTD (Company No. 16596167) is a company registered in England and Wales, with its registered office at 20 Wenlock Road, London, England, N1 7GU.
            </p>
            <p>
              Foreign exchange and payment services are provided by Global Currency Exchange Network Ltd T/A GC Partners, which is authorised by the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 (FCA number: 504346). GC Partners is also registered as a Money Services Business and regulated by HM Revenue & Customs (HMRC) under the Money Laundering Regulations 2017 (Registration number: 12137189). Registered in England and Wales (Company number: 04675786). Registered office: 6th Floor, One New Change, London, England, EC4M 9AF.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-xs tracking-widest uppercase text-muted-foreground/50">
            <span>© {new Date().getFullYear()} Kazzius Capital</span>
            <span className="hidden md:inline">·</span>
            <span>All Rights Reserved</span>
            <span className="hidden md:inline">·</span>
            <div className="flex gap-4 md:gap-6">
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            </div>
            <span className="hidden md:inline">·</span>
            <span>Confidential</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
