import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/layout/hero';
import Button from '../components/button';
import Layout from "../components/layout";
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faCircle, fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faCircle, fab, fas);

const IndexPage = ({data}) => (
  <Layout>
  <div>
    <Hero title="Bitcoin Resources" />
    <Breadcrumbs title="💎" />
    <div className="main">
      <div className="contain">
      <p className="lead">A curated list of the best Bitcoin resources.</p>
      <p className="description">You're curious about Bitcoin and want to learn more about it. I understand, Bitcoin is the first of its kind, a decentralized digital currency that only exists electronically. It is still in its infancy, but one day it will be as ubiquitous as computers, and the Internet. Excited yet? Here is a collection of resources to learn more and understand it better.</p>
        <ul className="wrapper">
          {data.allResourcesJson.edges.map((node, i) => (
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
