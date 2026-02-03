---
title: Boa Roadmap
description: Roadmap and planned features for the Boa project.
---

# Roadmap 2026

## Garbage Collector Redesign and Integration

- Difficulty: Hard
- Duration: 350 hours
- Required Skills: Rust, memory management, data structures
- Preferred Skills: Garbage collection algorithms, language runtimes

### Description

Boa currently uses a prototype garbage collector, with experimental work happening in the separate [Oscars repository](https://github.com/boa-dev/oscars). While functional, the GC architecture needs significant redesign to better support performance, maintainability, and future language features.

This project focuses on evaluating, refining, and integrating a production-ready garbage collector into Boa.

### Expected Outcomes

- Analyze the current GC design and limitations
- Improve or redesign the GC architecture (e.g. tracing strategy, allocation model, rooting)
- Integrate the improved GC into Boa’s runtime
- Add stress tests and benchmarks for GC behavior
- Produce documentation explaining the design and trade-offs

### Possible Extensions

- Incremental or generational GC strategies
- GC-aware optimizations in the VM
- Tooling to visualize heap and GC activity

### Project Discussion:
[Matrix Boa/GC](https://matrix.to/#/!ESLxDMqdSvKbprdiyg:matrix.org?via=matrix.org&via=rrogal.ski&via=t2bot.io)
[Matrix Boa/General](https://matrix.to/#/!ZBLAwGpYvzsLqZAZZg:matrix.org?via=matrix.org&via=t2bot.io&via=mozilla.org)

## Public API Audit and 1.0 Stabilization

- Difficulty: Medium
- Duration: 175–200 hours
- Required Skills: Rust, API design
- Preferred Skills: SemVer, library maintenance, documentation

### Description

Boa is approaching its 1.0 release. A key requirement for this milestone is ensuring that our public APIs are well-defined, intentional, and stable, as breaking changes become significantly more costly after 1.0.
This project focuses on auditing Boa’s public API surface, identifying areas that may cause long-term maintenance or compatibility issues, and helping prepare the engine for a stable 1.0 release.

### Expected Outcomes

- Identify and document all public-facing APIs (types, traits, functions, feature flags)
- Review APIs for stability, consistency, and long-term viability
- Propose improvements or refactors to reduce future breaking changes
- Help resolve or unblock remaining items needed for the 1.0 milestone
- Improve documentation around public APIs and versioning guarantees

### Possible Extensions

- Introduce tooling or CI checks to detect accidental public API changes
- Improve feature gating or visibility (pub vs pub(crate)) across the codebase
- Assist in defining Boa’s post-1.0 stability and deprecation policy

## JavaScript Engine Performance Improvements

- Difficulty: Medium–Hard
- Duration: 175–350 hours
- Required Skills: Rust, profiling, algorithms
- Preferred Skills: Compiler or VM internals, benchmarking

## Open Issue:
https://github.com/boa-dev/boa/issues/4524

### Description

Performance is a core goal of Boa. While already competitive in many areas, there are clear opportunities to improve execution speed, memory usage, and startup time.

This project focuses on identifying performance bottlenecks and implementing targeted optimizations across the VM, bytecode execution, and runtime systems.

### Expected Outcomes

- Much improved results on boajs.dev/benchmarks
- Identify high-impact performance bottlenecks
- Implement measurable optimizations (e.g. faster bytecode dispatch, improved data structures)
- Add or improve benchmarks to prevent regressions
- Document performance changes and results

### Possible Extensions

- Reduced allocation pressure and memory churn
- Improve documentation and tooling for profiling and benchmarking

### Project Discussion
- [Matrix Boa/Performance](https://matrix.to/#/!odQJQiuPFJtUBzgoXY:matrix.org?via=matrix.org&via=gitter.im&via=rrogal.ski)
- [Matrix Boa/General](https://matrix.to/#/!ZBLAwGpYvzsLqZAZZg:matrix.org?via=matrix.org&via=t2bot.io&via=mozilla.org)

## ECMAScript Conformance and Spec Compliance

- Difficulty: Medium
- Duration: 175 hours
- Required Skills: Rust, reading specifications
- Preferred Skills: JavaScript engine internals

### Description

Boa already performs well on ECMAScript conformance tests, but maintaining and improving compliance is an ongoing effort as the specification evolves.

This project focuses on closing remaining gaps, improving correctness in edge cases, and strengthening test coverage.

### Expected Outcomes

- Identify areas where Boa diverges from the ECMAScript specification
- Implement missing or partially compliant features
- Improve or expand test coverage
- Reduce known test failures and inconsistencies
- Document tricky or non-obvious spec decisions

### Possible Extensions

- Focus on a specific ECMAScript feature set (e.g. async, modules, Intl groundwork)
- Improve error reporting and diagnostics for spec failures

## Developer Tooling and Engine Observability

- Difficulty: Medium
- Duration: 175 hours
- Required Skills: Rust, tooling, debugging
- Preferred Skills: Runtime diagnostics, profiling tools

### Description

As Boa grows, better tooling is needed to understand and debug engine behavior. This project focuses on improving observability for developers working on the engine.

### Expected Outcomes

- Improve logging and diagnostics in the VM and runtime
- Add optional tracing or debug modes
- Improve internal metrics (allocation counts, GC timing, bytecode execution stats)
- Document tooling for contributors and users

### Possible Extensions

- Debug-friendly execution modes
- Performance and memory visualization tooling
- Integration with existing Rust profiling tools
