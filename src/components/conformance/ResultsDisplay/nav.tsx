import React from "react";
import { ConformanceState, FilterOption, SpecEdition } from "../types";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import { availableSortingOptions } from "../utils";

type ResultsNavProps = {
  state: ConformanceState;
  sliceNavToIndex: (number) => void;
  setEcmaScriptFlag: (string) => void;
  setSortOption: (string) => void;
  setFilterOption: (string) => void;
};

export default function ResultNavigation(
  props: ResultsNavProps,
): React.ReactNode {
  return (
    <div className={styles.resultsNav}>
      <div className={styles.navSection}>
        <EcmaScriptVersionDropdown
          setEcmaScriptFlag={props.setEcmaScriptFlag}
          esVersionValue={props.state.ecmaScriptVersion}
        />
        <SortingDropdown
          sortValue={props.state.sortOption}
          setSortOption={props.setSortOption}
        />
        <FilterDropdown
          filterOption={props.state.filterOption}
          setFilterOption={props.setFilterOption}
        />
      </div>
      <div className={styles.navSection}>
        <NavBreadCrumbs
          navPath={props.state.testPath}
          sliceNavToIndex={props.sliceNavToIndex}
        />
      </div>
    </div>
  );
}

type BreadCrumbProps = {
  navPath: string[];
  sliceNavToIndex: (number) => void;
};

function NavBreadCrumbs(props: BreadCrumbProps) {
  return (
    <nav aria-label="breadcrumbs" style={{ padding: "0.5em" }}>
      <ul className="breadcrumbs">
        {props.navPath.map((pathItem, idx, arr) => {
          return (
            <BreadCrumbItem
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

type BreadCrumbItemProps = {
  itemName: string;
  index: number;
  breadcrumbValue: string;
  sliceNavToIndex: (number) => void;
};

function BreadCrumbItem(props: BreadCrumbItemProps): React.ReactNode {
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

function EcmaScriptVersionDropdown(props: DropDownProps): React.ReactNode {
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
      <Heading as="h4" style={{ padding: "0.125rem 0.5rem", height: "5" }}>
        ES Version:
      </Heading>
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

type SortProps = {
  sortValue: string;
  setSortOption: (string) => void;
};

function SortingDropdown(props: SortProps): React.ReactNode {
  const [sortValue, setSortValue] = React.useState<string>(
    props.sortValue ? props.sortValue : "alpha",
  );

  React.useEffect(() => {
    setSortValue(props.sortValue);
  }, [props.sortValue]);

  const handleSortSelection = (e) => {
    setSortValue(e.target.value);
    const option = availableSortingOptions.filter(
      (v) => v.id === e.target.value,
    );
    props.setSortOption(option[0].id);
  };

  return (
    <div className={styles.dropdownContainer}>
      <Heading as="h4" style={{ padding: "0.125rem 0.5rem", height: "5" }}>
        Sort:
      </Heading>
      <select value={sortValue} onChange={handleSortSelection}>
        {availableSortingOptions.map((key) => {
          return (
            <option key={key.id} value={key.id}>
              {key.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

type FilterProps = {
  filterOption: FilterOption;
  setFilterOption: (string) => void;
};

function FilterDropdown(props: FilterProps): React.ReactNode {
  const [filterValue, setFilterValue] = React.useState<string>(
    props.filterOption ?? FilterOption.None,
  );

  React.useEffect(() => {
    setFilterValue(props.filterOption);
  }, [props.filterOption]);

  const handlefilterSelection = (e) => {
    setFilterValue(e.target.value);
    props.setFilterOption(e.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <Heading as="h4" style={{ padding: "0.125rem 0.5rem", height: "5" }}>
        Filter:
      </Heading>
      <select value={filterValue} onChange={handlefilterSelection}>
        {Object.values(FilterOption).map((key) => {
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
