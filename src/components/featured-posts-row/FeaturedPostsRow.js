/* @flow */
import React from 'react';
// import { Link } from 'react-router-dom';

import ContentMaxWidth from '../layout/content-max-width/ContentMaxWidth';
import HorizontallyCentered from '../layout/horizontally-centered/HorizontallyCentered';

// $FlowFixMe
import './FeaturedPostsRow.styles.scss';

type Props = {};

export default function FeaturedPostsRow(props: Props) {
  return (
    <HorizontallyCentered className="featured-posts-container">
      <ContentMaxWidth className="featured-posts-inner">
        <div className="featured-post">
          <div className="background"/>
          
        </div>
        <div className="featured-post">
          <div className="background"/>
          
        </div>
        <div className="featured-post">
          <div className="background"/>
          
        </div>
      </ContentMaxWidth>
    </HorizontallyCentered>
  );
}