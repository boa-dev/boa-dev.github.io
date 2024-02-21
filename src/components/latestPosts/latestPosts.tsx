import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

export default function LatestPosts({ recentPosts }) {
  return (
    <div className={clsx("container", styles.wrap)}>
      <h2>Latest posts and feature explainers</h2>
      <ul>
        {recentPosts.map(({ content: BlogPostContent }) => (
          // key={BlogPostContent.metadata.permalink}
          // frontMatter={BlogPostContent.frontMatter}
          // assets={BlogPostContent.assets}
          // metadata={BlogPostContent.metadata}
          // truncated={BlogPostContent.metadata.truncated}
          <li>
            <a href={BlogPostContent.metadata.permalink}>
              <h3>{BlogPostContent.metadata.title}</h3>
            </a>
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
          </li>
          //   <BlogPostContent />
        ))}
      </ul>
    </div>
  );
}
