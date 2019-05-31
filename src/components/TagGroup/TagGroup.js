import React from "react";

import myStyles from "./TagGroup.module.css";
import Tag from "./Tag/Tag";

const TagGroup = ({ tags }) => {
  const allTags = tags.map(tag => {
    return (
      <span key={tag} className={myStyles.TagBox}>
        <Tag text={tag} />
      </span>
    );
  });

  return <div className={myStyles.TagGroup}>{allTags}</div>;
};

export default TagGroup;
