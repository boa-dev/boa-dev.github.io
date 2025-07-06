import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import Heading from "@theme/Heading";
import LatestPosts from "../latestPosts/latestPosts";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/playground"
          >
            Visit Boa Playground
          </Link>
          <Link
            className={"button button--secondary button--lg"}
            href="https://docs.rs/boa_engine/latest/boa_engine/"
          >
            View Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home({ recentPosts }): React.ReactNode {
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
