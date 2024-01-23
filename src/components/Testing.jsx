import React from "react";

export const Testing = ({ content, uid }) => {
  return (
    <div>
      <p>{content && content.name}</p>
      <p>{content && content.reaction}</p>
    </div>
  );
};
