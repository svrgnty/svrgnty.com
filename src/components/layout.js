import React from 'react';
//import PropTypes from 'prop-types';
import Container from './container';
import Header from './layout/header';
import Footer from './layout/footer';
import { config } from '@fortawesome/fontawesome-svg-core'

import '../layouts/styles/svrgnty.scss';
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

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
