/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';

import * as GoogleAnalytics from '../../../utils/GoogleAnalytics';

import type { Children } from '../../../types/react';

type Props = {
  path: string,
  label: string,
  className?: ?string,
  children?: Children,
  category: $Values<typeof GoogleAnalytics.CategoryEnum>,
};

export default function InternalLink({
  path,
  className,
  children,
  label,
  category,
}: Props) {
  return (
    <Link
      to={path}
      className={className}
      onClick={() => track(path, label, category)}
    >
      {children}
    </Link>
  );
}

const track = async (
  path: string,
  label: string,
  category: $Values<typeof GoogleAnalytics.CategoryEnum>
) => {
  await GoogleAnalytics.trackEvent({
    category,
    action: GoogleAnalytics.ActionEnum.Event,
    label: `Internal Link: ${label}`,
  });
};
