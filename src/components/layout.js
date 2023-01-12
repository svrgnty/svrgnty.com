import React from 'react';
//import PropTypes from 'prop-types';

import Container from './container';
import Header from './layout/header';
import Footer from './layout/footer';

import '../layouts/styles/svrgnty.scss';

const TemplateWrapper = ({ children }) => (
  <Container>

    <Header />

    {children}

    <Footer />

  </Container>
)
/*
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
*/
export default TemplateWrapper
