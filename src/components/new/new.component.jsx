import React from "react";

import "./new.style.sass";

export function New(props) {
  const { title, logo, description, date } = props;
  return (
    <div className="new">
      <div className="new__header">
        <div className="new__logo">{logo}</div>
        <div className="new__title">{title}</div>
      </div>
      <div className="new__description">{description}</div>
      <div className="new__footer">
        <div className="new__date">{date}</div>
      </div>
    </div>
  );
}
