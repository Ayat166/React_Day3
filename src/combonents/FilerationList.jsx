import React from "react";

export default function FilerationList(props) {
  return (
    <div className="container">
      <ul className="nav nav-tabs nav-justified">
        <li className="nav-item">
          <a
            className={`nav-link ${
              props.filtermthod === "all" ? "active" : ""
            }`}
            onClick={() => props.setFilteredOption("all")}
          >
            All
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              props.filtermthod === "inProgress" ? "active" : ""
            }`}
            onClick={() => props.setFilteredOption("inProgress")}
          >
            In Progress
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              props.filtermthod === "Done" ? "active" : ""
            }`}
            onClick={() => props.setFilteredOption("Done")}
          >
            Done
          </a>
        </li>
      </ul>
    </div>
  );
}
