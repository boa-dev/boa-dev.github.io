import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import new_logo_black from "@site/static/img/new_logo_black.svg";
import new_logo_yellow from "@site/static/img/new_logo_yellow.svg";
import new_logo_blue from "@site/static/img/new_logo_blue.svg";
import Heading from "@theme/Heading";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Written in Rust",
    Svg: new_logo_black,
    description: (
      <>
        Boa brings Rust's memory safety guarantees to the world of JS engines.
      </>
    ),
  },
  {
    title: "Aims for ECMAScript Conformance",
    Svg: new_logo_yellow,
    description: (
      <>Boa passes more than 80% of ECMAScripts test262 test suite.</>
    ),
  },
  {
    title: "Free and Open Source",
    Svg: new_logo_blue,
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactNode {
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
