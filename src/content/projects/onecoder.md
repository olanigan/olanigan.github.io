---
title: OneCoder CLI
date: 2026-05-02
category: Developer Tooling
summary: Local-first sprint management and governance CLI for AI coding agents and humans, enforcing atomic traceability and preflight checks before agents can progress.
methods: [CLI tooling, agent governance, Python, uv]
github: https://github.com/olanigan/onecoder
impact: Every commit is linked to a Sprint-ID and Spec-ID, and preflight enforcement validates task breakdowns, LOC limits, and documentation before an agent (or human) can move forward — all metadata lives repo-local in .sprint/ and .issues/, no server required.
selected: true
---

OneCoder is a governance-first CLI for AI-assisted development. It grew out of the need to keep AI coding agents accountable: instead of trusting an agent's own report of what it did, OneCoder enforces **atomic traceability** (every commit references a Sprint-ID and Spec-ID) and **preflight enforcement** (task breakdowns, line-of-code limits, and documentation are validated before an agent can proceed).

## Highlights

- Ships as an installable CLI (`uv tool install onecoder`) with a small, memorable command surface: `onecoder guide`, `onecoder sprint init`, `onecoder sprint preflight`, `onecoder sprint commit`, `onecoder sprint close`.
- Fully local-first — sprint and issue metadata are stored inside the repository (`.sprint/`, `.issues/`), so there's no external service or database to run.
- Designed to be run identically by a human developer or an automated coding agent, so the same governance rules apply either way.
