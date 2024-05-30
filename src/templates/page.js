import React from 'react';
import { graphql } from 'gatsby';
import Card from "../components/card";
import Layout from "../components/layout";
import Hero from '../components/layout/hero';
import Breadcrumbs from '../components/layout/breadcrumbs';
import Button from '../components/button';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);

export const Head = ({data}) => {
  const {resourcesJson: pages} = data;
  return <>
    <title>{pages.title+" | Everything Bitcoin | Svrgnty.com"}</title>
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="og:title" content={pages.title+" | Everything Bitcoin | Svrgnty.com"} />
    <meta name="twitter:title" content={pages.title+" | Everything Bitcoin | Svrgnty.com"} />
    <meta name="description" content={pages.lead} />
    <meta name="og:description" content={pages.lead} />
    <meta name="twitter:description" content={pages.lead} />
    <meta name="og:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
    <meta name="twitter:image" content={`https://svrgnty.com/images/twitter-website.jpg`} />
    <meta name="og:url" content={"https://svrgnty.com"+pages.page} />
    <link rel="canonical" href={"https://svrgnty.com"+pages.page} />
    <meta name="twitter:creator" content="@svrgnty" />
    <meta name="theme-color" content="#003366" />
    <link rel="apple-touch-icon" href={'/images/apple-touch-icon.png'} />
  </>
}

export default function Template({data}) {
  const {resourcesJson: pages} = data;
  const {allResourcesJson: categories} = data;

  var desc, body, updated = '';

  if (pages.description !== null) {
    desc = <p className="description">{pages.description}</p>;
  }

  if (pages.body !== null) {
    body = <div className="body">{parse(pages.body)}</div>;
  }

//  if (pages.lastUpdate !== null) {
//    updated = <p className="updated"> Last Updated: {pages.lastUpdate}</p>;
//  }

  return (
    <Layout>
    <div>
      <Hero title={pages.title} />
      <Breadcrumbs title={pages.title} />
      <div className="main">
        <div className="contain">
          <div className="page-content">
          <p className="lead">{pages.lead}</p>
          {desc}
          {body}
            <ul className={"wrapper "+pages.cardType}>
              {pages.links.map((node, key) => (
                <li key={key}>
                  <Card
                  card={node}
                  class={pages.cardType}
                  />
                </li>
              ))}
            </ul>
          {updated}
          </div>
        </div>
      </div>
      <div className="main complimentary">
        <div className="contain">
          <div className="page-content">
            <p className="lead">Continue exploring the Bitcoin resources.</p>
            <ul className="wrapper">
              {categories.edges.map((node, i) => (
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
  )
};

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    resourcesJson (page: {eq :$path}) {
      page
      title
      lead
      description
      body
      cardType
      lastUpdate
      ...Card_details
    }
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