import { useEffect } from 'react';

const SITE_NAME = 'Kazzius Capital';
const DEFAULT_DESCRIPTION = 'Institutional-grade cross-border payments, FX risk management, and bespoke liquidity solutions for global businesses, MSBs, and VASPs.';

/**
 * Sets document title and meta description per page for SEO.
 * @param {{ title?: string, description?: string }} options
 */
export function useSEO({ title, description } = {}) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Institutional Cross-Border Payments & FX Solutions`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // Update canonical for the current page
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://kazziuscapital.com${window.location.pathname}`);
    }
  }, [title, description]);
}
