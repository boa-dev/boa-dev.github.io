import React from "react";
import { SpecEdition } from "../types";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type ResultsNavProps = {
  navPath: string[];
  sliceNavToIndex: (number) => void;
  setEcmaScriptFlag: (string) => void;
};

export default function ResultNavigation(props: ResultsNavProps): JSX.Element {
  return (
    <div className={styles.resultsNav}>
      <EcmaScriptVersionDropdown setEcmaScriptFlag={props.setEcmaScriptFlag} />
      <NavBreadCrumbs
        navPath={props.navPath}
        sliceNavToIndex={props.sliceNavToIndex}
      />
    </div>
  );
}

type BreadCrumbProps = {
  navPath: string[];
  sliceNavToIndex: (number) => void;
};

function NavBreadCrumbs(props: BreadCrumbProps) {
  return (
    <nav aria-label="breadcrumbs" style={{ padding: "0.25em" }}>
      <ul className="breadcrumbs">
        {props.navPath.map((pathItem, idx, arr) => {
          return (
            <NavItem
              key={pathItem}
              itemName={pathItem}
              index={idx}
              sliceNavToIndex={props.sliceNavToIndex}
              breadcrumbValue={
                idx + 1 === arr.length
                  ? "breadcrumbs__item breadcrumbs__item--active"
                  : "breadcrumbs__item"
              }
            />
          );
        })}
      </ul>
    </nav>
  );
}

type NavItemProps = {
  itemName: string;
  index: number;
  breadcrumbValue: string;
  sliceNavToIndex: (number) => void;
};

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <li className={props.breadcrumbValue}>
      <Link
        className={styles.navLink}
        onClick={() => props.sliceNavToIndex(props.index + 1)}
      >
        {props.itemName}
      </Link>
    </li>
  );
}

// Below implements the ECMAScript Version Dropdown component

type DropDownProps = {
  setEcmaScriptFlag: (string) => void;
};

function EcmaScriptVersionDropdown(props: DropDownProps): JSX.Element {
  const [dropdownValue, setDropdownValue] = React.useState("");

  const handleVersionSelection = (e) => {
    setDropdownValue(e.target.value);
    props.setEcmaScriptFlag(e.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <select value={dropdownValue} onChange={handleVersionSelection}>
        <option value={""}>All</option>
        {Object.keys(SpecEdition)
          .filter((v) => isNaN(Number(v)))
          .map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
      </select>
    </div>
  );
}
