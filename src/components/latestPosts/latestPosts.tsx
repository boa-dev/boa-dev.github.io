import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

export default function LatestPosts({ recentPosts }) {
  console.log(recentPosts);
  return (
    <div className={clsx("container", styles.wrap)}>
      <Heading as="h2">Latest posts</Heading>
      <section className={clsx(styles.latestPostsWrap)}>
        {recentPosts.map(({ content: BlogPostContent }) => (
          // key={BlogPostContent.metadata.permalink}
          // frontMatter={BlogPostContent.frontMatter}
          // assets={BlogPostContent.assets}
          // metadata={BlogPostContent.metadata}
          // truncated={BlogPostContent.metadata.truncated}
          <Link
            className={clsx("card", styles.card)}
            key={BlogPostContent.metadata.permalink}
            to={BlogPostContent.metadata.permalink}
          >
            <div className="card__header">
              <Heading as="h3">{BlogPostContent.metadata.title}</Heading>
            </div>
            <div className="card__body">
              <p>
                {new Date(BlogPostContent.metadata.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
              </p>
            </div>
          </Link>
          //   <BlogPostContent />
        ))}
      </section>
    </div>
  );
}
