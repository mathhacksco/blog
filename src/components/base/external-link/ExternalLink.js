/* @flow */
import React from 'react';

import * as GoogleAnalytics from '../../../utils/GoogleAnalytics';

import type { Children } from '../../../types/react';

type Props = {
  href: string,
  label: string,
  className?: ?string,
  children?: Children,
  // page:
};

export default function ExternalLink({
  href,
  className,
  children,
  label,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => track(e, href, label)}
    >
      {children}
    </a>
  );
}

const track = async (e: Event, href: string, label: string) => {
  e.preventDefault();
  await GoogleAnalytics.trackEvent({
    category: GoogleAnalytics.CategoryEnum.HomePage,
    action: GoogleAnalytics.ActionEnum.Event,
    label: `External Link: ${label}`,
  });
  window.open(href, '_blank');
};
