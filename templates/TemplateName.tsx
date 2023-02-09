import React from "react";

import "./style.scss";

interface ITemplateName {
  name: string;
}

export const TemplateName = (props: ITemplateName) => {
  return (
    <div className="template-name">
      <h1>{ props.name }</h1>
    </div>
  );
};
