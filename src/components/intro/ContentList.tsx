"use client";

import { sections } from "@/data/data";
import Content from "./Content";

const ContentList = () => {
  return (
    <article>
      {sections.map((section, index) => (
        <Content
          key={index}
          title={section.title} // section 객체에서 title을 참조
          description={section.description} // section 객체에서 description을 참조
        />
      ))}
    </article>
  );
};

export default ContentList;
