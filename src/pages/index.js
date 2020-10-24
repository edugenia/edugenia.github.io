import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Innovative Tools',
    imageUrl: 'img/innovation.svg',
    description: (
      <>
        At <b>Edugenia</b> we are committed to bring innovation and ease of use
        to both the creators and the consumers of educational software.
      </>
    ),
  },
  {
    title: 'Broader Reach',
    imageUrl: 'img/reach.svg',
    description: (
      <>
        Our products are multiplatform and run seamlessly on websites, mobile apps
        and desktop applications.
      </>
    ),
  },
  {
    title: 'Ready for Costumization',
    imageUrl: 'img/customization.svg',
    description: (
      <>
        Our solutions are designed to be flexible. We will help you package
        your content in the most effective and relevant way for your target audience.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const imgUrl = useBaseUrl('img/full_logo.png');
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
          <div className="text--center">
            <img src={imgUrl} alt={`Edugenia`} />
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
