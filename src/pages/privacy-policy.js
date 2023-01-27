import React from 'react';
import Hero from '../components/layout/hero';
import Layout from "../components/layout";
import Breadcrumbs from '../components/layout/breadcrumbs';

export const Head = () => (
  <>
    <title>Privacy Policy | Svrgnty.com</title>
    <meta name="theme-color" content="#003366" />
    <link rel="canonical" href="https://svrgnty.com/privacy-policy" />
    <link rel="apple-touch-icon" href={'/images/apple-touch-icon.png'} />
  </>
)

const Privacy = ({data}) => (
  <Layout>
  <div>
    <Hero title="Privacy Policy" />
    <Breadcrumbs title="Privacy Policy" />
    <div className="main">
      <div className="contain">
        <p>Last updated: January 1, 2021</p>
        <h2>Data Collected</h2>
        <p>Analytics: GoatCounter is used for analytics, a privacy-aware web statistics service. Below is the information GoatCounter collects. More info on GoatCounter <a href="https://www.goatcounter.com/help/privacy">privacy policy</a>.</p>
        <ul className="list">
          <li>URL of the visited page.</li>
          <li>Referer header.</li>
          <li>User-Agent header.</li>
          <li>Screen size.</li>
          <li>Country name based on IP address.</li>
        </ul>
        <p>No personal information (such as IP address) is collected. Visitors are not tracked by using e.g. persistent cookies; it is virtually impossible to tie any of the collected information to a person.</p>   
      </div>
    </div>
  </div>
  </Layout>
);

export default Privacy
