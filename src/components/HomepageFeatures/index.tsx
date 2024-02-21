import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Written in Rust",
    Svg: require("@site/static/img/new_logo_black.svg").default,
    description: (
      <>Boa hopes to bring Rust safety garuantees to the world of JS engines.</>
    ),
  },
  {
    title: "Aims for ECMAScript Conformance",
    Svg: require("@site/static/img/new_logo_yellow.svg").default,
    description: (
      <>Boa currently passes more than 75% of ECMAScripts test262 test suite.</>
    ),
  },
  {
    title: "Open Source",
    Svg: require("@site/static/img/new_logo_blue.svg").default,
    description: (
      <>
        Boa is an open source project and hosted on GitHub. Contributions are
        always welcome!
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md padding-vert--xl">
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
