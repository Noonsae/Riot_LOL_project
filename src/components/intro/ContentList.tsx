"use client";

import { introContents } from "@/types/introContents";

import Content from "./Content";

import { sections } from "@/data/data";

const ContentList = () => {

  return (
    <article>
      {sections.map((section: introContents, index) => (
        <Content
          key={index}
          {...section}
        />
      ))}
    </article>
  );
};

export default ContentList;
