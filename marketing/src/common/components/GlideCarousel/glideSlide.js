import PropTypes from 'prop-types';
import React from 'react';
import { GlideSlideWrapper } from './glide.style';

// Glide Slide wrapper component
const GlideSlide = ({ children }) => {
  return (
    <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
  );
};

GlideSlide.propTypes = {
  /** Children. */
  children: PropTypes.element,
};

export default GlideSlide;
