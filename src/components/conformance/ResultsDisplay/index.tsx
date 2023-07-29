import React from 'react';
import SuiteDisplay from '../SuiteDisplay';
import { ResultInfo, VersionItem, SuiteResult } from '@site/src/pages/conformance/types';
import { mapToResultInfo } from '@site/src/pages/conformance/utils';

import styles from "./styles.module.css";

type ResultsProps = {
    activeVersion: VersionItem
}

export default function ResultsDisplay(props: ResultsProps): JSX.Element {
    const [activeResults, setActiveResults] = React.useState<ResultInfo | null>(null);
    const [testPath, setTestPath] = React.useState<string[]>([props.activeVersion.tagName])
    const [currentSuite, setCurrentSuite] = React.useState<SuiteResult | null>(null)

    React.useEffect(()=>{
        fetchResults(props.activeVersion)
            .then((data)=> {
                const resultInfo = mapToResultInfo(data);
                setActiveResults(resultInfo);
                setCurrentSuite(resultInfo.results);
            })
    }, [])

    React.useEffect(()=>{
        fetchResults(props.activeVersion)
            .then((data)=> {
                const resultInfo = mapToResultInfo(data);
                setActiveResults(resultInfo);
                setCurrentSuite(resultInfo.results)
            });

        setTestPath([props.activeVersion.tagName])
    }, [props.activeVersion])

    React.useEffect(()=>{
        if (activeResults) {
            let newSuiteTarget: SuiteResult | null = null;
            for(const target of testPath) {
                if (target == props.activeVersion.tagName) {
                    newSuiteTarget = activeResults.results
                }

                // Suites must exist here for the path value to be valid.
                for(const suite of newSuiteTarget.suites) {
                    if (suite.name === target) {
                        newSuiteTarget = suite
                    }
                }
            }

            setCurrentSuite(newSuiteTarget);
        }
    }, [testPath])

    const fetchResults = async(version) => {
        const response = await fetch(version.fetchUrl);
        return await response.json();
    }

    const navigateToSuite = (newSuiteName: string) => {
        setTestPath(testPath => [...testPath, newSuiteName])
    }

    const sliceNavToIndex = (nonInclusiveIndex: number) => {
        setTestPath(testPath => [...testPath.slice(0, nonInclusiveIndex)])
    }

    return (
        <div className={styles.resultsDisplay}>
            <ResultNavigation navPath={testPath} sliceNavToIndex={sliceNavToIndex}/>
            {activeResults && currentSuite ? <SuiteDisplay currentSuite={currentSuite} navigateToSuite={navigateToSuite} /> : null}
        </div>
    )
}

type ResultsNavProps = {
    navPath: string[],
    sliceNavToIndex: (number) => void,
}

function ResultNavigation(props: ResultsNavProps): JSX.Element {

    return (
        <div className={styles.resultsNav}>
            {/* TODO: Add ECMAScript version dropdown here. */}
            <nav aria-label="breadcrumbs" >
                <ul className="breadcrumbs">
                    {props.navPath.map((pathItem, idx, arr)=>{
                        return <NavItem key={pathItem} itemName={pathItem} index={idx} sliceNavToIndex={props.sliceNavToIndex} breadcrumbValue={idx + 1 === arr.length ? "breadcrumbs__item breadcrumbs__item--active" : "breadcrumbs__item"} />
                    })}
                </ul>
            </nav>
        </div>
    )
}

type NavItemProps = {
    itemName: string,
    index: number,
    breadcrumbValue: string,
    sliceNavToIndex: (number) => void,
}

function NavItem(props: NavItemProps): JSX.Element {
    return (
        <li className={props.breadcrumbValue}>
            <a className={styles.navLink} onClick={()=>props.sliceNavToIndex(props.index + 1)}>{props.itemName}</a>
        </li>
    )
}
