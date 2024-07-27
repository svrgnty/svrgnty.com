import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/layout/hero';
import Button from '../components/button';
import Layout from "../components/layout";
import Breadcrumbs from '../components/layout/breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

export const Head = () => (
  <>
    <title>Everything Bitcoin | Svrgnty.com</title>
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="og:title" content="Everything Bitcoin | Svrgnty.com" />
    <meta name="twitter:title" content="Everything Bitcoin | Svrgnty.com" />
    <meta name="description" content="Bitcoin for financial sovereignty" />
    <meta name="og:description" content="Bitcoin for financial sovereignty" />
    <meta name="twitter:description" content="Bitcoin for financial sovereignty" />
    <meta name="og:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
    <meta name="twitter:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
    <meta name="og:url" content="https://svrgnty.com" />
    <meta name="twitter:creator" content="@svrgnty" />
    <meta name="theme-color" content="#003366" />
    <link rel="canonical" href="https://svrgnty.com" />
    <link rel="apple-touch-icon" href={'/images/apple-touch-icon.png'} />
  </>
)

const IndexPage = ({data}) => (
  <Layout>
  <div>
    <Hero title="Bitcoin Resources" />
    <div className="main">
      <div className="contain">
      <p className="lead">A curated list of the best Bitcoin resources.</p>
      <p className="description">Bitcoin is the first of its kind, a peer-to-peer decentralized digital currency with no trusted third parties. While it is still in its infancy, it has the potential to become as widespread as computers and the Internet. Excited yet? Here are some valuable resources to help you understand Bitcoin better.</p>
        <ul className="wrapper">
          {data.allResourcesJson.edges.map((node) => (
            <li key={node.node.id}>
              <Button url={node.node.page} className="home-button">
                <FontAwesomeIcon icon={[node.node.iconPrefix, node.node.icon]} size="3x" className="fa-fw" />
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
  </Layout>
);

export const indexQuery = graphql`
query IndexQuery {
  allResourcesJson(sort: { position: ASC })  {
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

export default IndexPage;
