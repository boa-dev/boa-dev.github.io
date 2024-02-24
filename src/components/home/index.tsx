import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

import LatestPosts from "../latestPosts/latestPosts";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/playground"
          >
            Visit Boa Playground
          </Link>
        </div>
        <div>
          <Link
            className={"button button--secondary " + styles.buttonMargin}
            href="https://docs.rs/Boa/latest/boa"
          >
            Release Documentation
          </Link>
          <Link
            className={"button button--secondary " + styles.buttonMargin}
            href="https://boajs.dev/boa/doc/boa_engine/index.html"
          >
            Dev Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home({ recentPosts }): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <main>
        <LatestPosts recentPosts={recentPosts} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
