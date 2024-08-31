import React from 'react';
import SatConverter from '../../components/satconverter';
import { graphql } from 'gatsby';
import Layout from "../../components/layout";
import Hero from '../../components/layout/hero';
import Button from '../../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);


export const Head = () => (
    <>
      <title>Satoshis Converter | svrgnty.com</title>
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="og:title" content="Satoshis Converter | svrgnty.com" />
      <meta name="twitter:title" content="Satoshis Converter | svrgnty.com" />
      <meta name="description" content="Convert satoshis (SATS) to Bitcoin and FIAT (USD, EUR, CHF)." />
      <meta name="og:description" content="Convert satoshis (SATS) to Bitcoin and FIAT (USD, EUR, CHF)." />
      <meta name="twitter:description" content="Convert satoshis (SATS) to Bitcoin and FIAT (USD, EUR, CHF)." />
      <meta name="og:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
      <meta name="twitter:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
      <meta name="og:url" content="https://svrgnty.com/tools/satoshis-converter/" />
      <meta name="twitter:creator" content="@svrgnty" />
      <meta name="theme-color" content="#003366" />
      <link rel="canonical" href="https://svrgnty.com/tools/satoshis-converter/" />
      <link rel="apple-touch-icon" href={'/images/apple-touch-icon.png'} />
    </>
  )

  const SatoshiConverter = ({data}) => (
    <Layout>
    <div>
      <Hero title="Satoshis Converter" />
      <div className="main">
        <div className="contain">
        <p className="lead">Calculate satoshis to BTC and FIAT currencies.</p>
        <p className="description">Convert satoshis (SATS) to Bitcoin and FIAT (USD, EUR, CHF).</p>
        <SatConverter />
        <p><FontAwesomeIcon icon="circle-info" /> Satoshis (SATS) are the smallest unit of Bitcoin, named after its creator, Satoshi Nakamoto. One Bitcoin is divisible into 100 million satoshis, meaning that 1 satoshi equals 0.00000001 BTC.</p>
        </div>
        </div>
        <div className="main complimentary">
        <div className="contain">
          <div className="page-content">
            <p className="lead">Explore the Bitcoin resources.</p>
            <ul className="wrapper">
              {data.allResourcesJson.edges.map((node, i) => (
                <li key={node.node.id}>
                  <Button url={node.node.page} className="home-button-compact">
                    <FontAwesomeIcon icon={[node.node.iconPrefix, node.node.icon]} size="2x" className="fa-fw" />
                    <div>
                      <h2>{node.node.title}</h2>
                      <p>{node.node.lead}</p>
                    </div>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
  
  export const pageQuery = graphql`
  query PageQuery {
    allResourcesJson(sort: { position: ASC }) {
      edges {
        node {
          id
          position
          page
          title
          lead
          icon
          iconPrefix
        }
      }
    }
  }
`

export default SatoshiConverter;