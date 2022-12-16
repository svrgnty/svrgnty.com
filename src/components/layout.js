import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { dom, config } from '@fortawesome/fontawesome-svg-core';

import Container from './container';
import Header from './layout/Header';
import Footer from './layout/Footer';

import touchImage from '../../static/images/apple-touch-icon.png';

import '../layouts/styles/crypto.scss';

config.autoAddCss = false;

const TemplateWrapper = ({ children }) => (
  <Container>

    <Helmet
      title="Bitcoin resources - svrgnty"
      meta={[
        { name: 'description', content: 'A curated list of the best Bitcoin resources' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content:'summary_large_image' },
        { name: 'og:title', content: 'svrgnty.com' },
        { name: 'twitter:title', content: 'svrgnty' },
        { name: 'og:description', content: 'A curated list of the best Bitcoin resources' },
        { name: 'twitter:description', content: 'A curated list of the best #Bitcoin resources' },
        { name: 'og:image', content: 'https://svrgnty.com/images/twitter-website.jpg' },
        { name: 'twitter:image', content: 'https://svrgnty.com/images/twitter-website.jpg' },
        { name: 'og:url', content: 'https://svrgnty.com' },
        { name: 'twitter:creator', content: '@cryptoverted' },
        { name: 'theme-color', content: '#003366' },
      ]}
      link={[
        { rel: 'canonical', href: 'https://svrgnty.com' },
        { rel: 'icon', href: touchImage },
        { rel: 'apple-touch-icon', href: touchImage },
      ]}
      >
        <style type="text/css">{dom.css()}</style>
    </Helmet>

    <Header />

    {children}

    <Footer />

  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper