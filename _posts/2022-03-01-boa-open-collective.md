---
layout: post
title: "Boa JS engine enables financial contributions"
author: Boa Developers
---

In the past months, due to the big and steady progress on Boa, we have received multiple requests to contribute with Boa
financially. From now on, anyone can contribute with either a recurring donation, or a one-time contribution in our
[OpenCollective page](https://opencollective.com/boa).

# What does this mean for Boa?

Being able to receive financial contributions won't directly show a change in Boa development, but depending on how much
funding we get, we are already planning next steps. Having more motivated contributors would be the first step. We all
want to spend more of our free time in boa, and receiving a financial compensation for it is definitely makin the team
members eager to continue contributing.

But that is not our only idea. We would like to create a reproducible benchmarking platform. Currently, we just use GitHub
actions for benchmarking. While this is useful to get some general ideas on how do changes affect to the performance of the
engine, but they have a high variability (up to 10%). This means that we can definitely see changes if they are big, but it's
impossible to see differences if changes are minimal (1-2%, for example). Having the infrastructure to do proper performance
testing would require using dedicated CPUs, for example, which could be financed using the Boa Open Collective.

On the development side, there are some very big projects that require deep involvement from the team. Having
[async/await support](https://github.com/boa-dev/boa/projects/3), or implementing the
[module system](https://github.com/boa-dev/boa/issues/64) is one of our priorities, and blocks much of our conformance.
Implementing a [proper API](https://github.com/boa-dev/boa/discussions/1531) for Rust crates that want to embed Boa as they
like, or a [C API](https://github.com/boa-dev/boa/issues/332) so that other software, not written in Rust, can use Boa,
are also a priority, and implementing all the new built-in objects to achieve 100% conformance with the ECMAScript
specification is also a must. All this takes time, and we will need to finance developers working on these big issues.

# Can I contribute differently?

If financial contribution is not your strenght, you can contribute by asking to be assigned to one of our
[open issues](https://github.com/boa-dev/boa/issues?q=is%3Aopen+is%3Aissue+no%3Aassignee), and asking for mentoring if you
don't know your way around the engine. Our [contribution guide](https://github.com/boa-dev/boa/blob/main/CONTRIBUTING.md)
should help you here. If you are more used to working with JavaScript or frontend web development, we also
welcome help to improve our web presence, either in [our website](https://github.com/boa-dev/boa-dev.github.io), or in
our [testing representation](https://github.com/boa-dev/boa/issues/820) page or benchmarks page. You can also contribute to
our Criterion benchmark comparison GitHub [action](https://github.com/boa-dev/criterion-compare-action).

We are also looking to improve the documentation of the engine, both for developers of the engine itself and for users of the
engine. Feel free to contact us in [Discord](https://discord.gg/tUFFk9Y).
