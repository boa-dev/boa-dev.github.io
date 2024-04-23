import React from "react";
import { ConformanceState, SpecEdition } from "../types";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type ResultsNavProps = {
  state: ConformanceState;
  sliceNavToIndex: (number) => void;
  setEcmaScriptFlag: (string) => void;
};

export default function ResultNavigation(props: ResultsNavProps): JSX.Element {
  return (
    <div className={styles.resultsNav}>
      <EcmaScriptVersionDropdown
        setEcmaScriptFlag={props.setEcmaScriptFlag}
        esVersionValue={props.state.ecmaScriptVersion}
      />
      <NavBreadCrumbs
        navPath={props.state.testPath}
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
  esVersionValue: string;
  setEcmaScriptFlag: (string) => void;
};

function EcmaScriptVersionDropdown(props: DropDownProps): JSX.Element {
  const [dropdownValue, setDropdownValue] = React.useState(
    props.esVersionValue ? props.esVersionValue : "",
  );

  // Update the flag when props.esVersionValue is changed
  React.useEffect(() => {
    setDropdownValue(props.esVersionValue);
  }, [props.esVersionValue]);

  const handleVersionSelection = (e) => {
    // Update the display value and set the flag.
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
