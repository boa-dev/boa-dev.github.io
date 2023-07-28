import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contributions Welcome',
    Svg: require('@site/static/img/new_logo_black.svg').default,
    description: (
      <>
        We encourage anyone who's interested to contribute!
      </>
    ),
  },
  {
    title: 'Feature 2',
    Svg: require('@site/static/img/new_logo_blue.svg').default,
    description: (
      <>
        Some second feature that may be nice.
      </>
    ),
  },
  {
    title: 'Written in Rust',
    Svg: require('@site/static/img/new_logo_yellow.svg').default,
    description: (
      <>
        We like rust, and so should you *crab noises*
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
