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
    <title>404 | Svrgnty.com</title>
    <meta name="theme-color" content="#003366" />
  </>
)

const NotFoundPage = ({data}) => (
  <Layout>
  <div>
    <Hero title="404: NOT FOUND" />
    <Breadcrumbs title="404: Not Found" />
    <div className="main">
      <div className="contain">
      <p className="lead">You just hit a page that doesn&#39;t exist... the sadness <span role="img" aria-label="saddened">😞</span>.</p>
      <p className="lead">No worries, browse the categories below to continue learning about Bitcoin <span role="img" aria-label="strength">💪</span><span role="img" aria-label="happy">😁</span>.</p>
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
  </Layout>
);

export const notFoundQuery = graphql`
query notFoundQuery{
  allResourcesJson(sort: { position: ASC }) {
    edges {
      node {
        id
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

export default NotFoundPage
