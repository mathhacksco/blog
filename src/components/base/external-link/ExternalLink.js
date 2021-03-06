/* @flow */
import React from 'react';

import * as GoogleAnalytics from '../../../utils/GoogleAnalytics';

import type { Children } from '../../../types/react';

type Props = {
  href: string,
  label: string,
  className?: ?string,
  children?: Children,
  category: $Values<typeof GoogleAnalytics.CategoryEnum>,
};

export default function ExternalLink({
  href,
  className,
  children,
  label,
  category,
}: Props) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => track(e, href, label, category)}
    >
      {children}
    </a>
  );
}

const track = async (
  e: Event,
  href: string,
  label: string,
  category: $Values<typeof GoogleAnalytics.CategoryEnum>
) => {
  e.preventDefault();
  await GoogleAnalytics.trackEvent({
    category,
    action: GoogleAnalytics.ActionEnum.Event,
    label: `External Link: ${label}`,
  });
  window.open(href, '_blank');
};
