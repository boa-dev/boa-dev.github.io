import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function LatestPosts({ recentPosts }) {
  console.log(recentPosts);
  return (
    <div className={clsx("container", styles.wrap)}>
      <h2>Latest posts</h2>
      <section className={clsx(styles.latestPostsWrap)}>
        {recentPosts.map(({ content: BlogPostContent }) => (
          // key={BlogPostContent.metadata.permalink}
          // frontMatter={BlogPostContent.frontMatter}
          // assets={BlogPostContent.assets}
          // metadata={BlogPostContent.metadata}
          // truncated={BlogPostContent.metadata.truncated}
          <a
            className={clsx("card", styles.card)}
            key={BlogPostContent.metadata.permalink}
            href={BlogPostContent.metadata.permalink}
          >
            <div className="card__header">
              <h3>{BlogPostContent.metadata.title}</h3>
            </div>
            <div className="card__body">
              <p>
                {new Date(BlogPostContent.metadata.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
          </a>
          //   <BlogPostContent />
        ))}
      </section>
    </div>
  );
}
