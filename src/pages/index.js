import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${translate({id: 'homepage.title', message: 'Skeptical Tantra & Sexuality'})}`}
      description={`${translate({id: 'homepage.tagline', message: 'Explore your sexuality with the help of Science and Skeptical Tantra'})}`}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title"><Translate id="homepage.title">Skeptical Tantra & Sexuality</Translate></h1>
          <p className="hero__subtitle"><Translate id="homepage.tagline">Explore your sexuality with the help of Science and Skeptical Tantra</Translate></p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/ethical/code-of-conduct')}>
              <Translate id="homepage.button">Ethical rules / Code of Conduct</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
              <div className="container">
                <div className="row">
                  <b><Translate id="homepage.disclaimer">Disclaimer:</Translate>&nbsp;</b><Translate id="homepage.warning">The english content is not yet written, only French version has been written. The content of this Website is not medical advices or exercices you must follow, you have the full responsibility of your experimentations. Moreover, the content of this Website can change at anytime, please check the number version of documentation. Version 0.1.1</Translate>
                </div>
              </div>
        </section>
        {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}
