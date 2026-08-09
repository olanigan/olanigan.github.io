---
title: Homestead
date: 2026-08-08
category: Local AI Infra
summary: The unified local-AI platform — a universal model agent harness that discovers, tracks, and serves local LLMs across inference engines from a single CLI.
methods: [Ollama, llama.cpp, MLX, Apple Core AI, SQLite, CLI tooling]
github: https://github.com/olanigan/homestead
impact: Removes the friction of juggling multiple local inference engines by giving every local model a single discovery, registry, and serving surface — with an SSE-powered dashboard for live auditing.
selected: true
---

Homestead unifies Ollama, llama.cpp, MLX, and Apple Core AI under one CLI and model registry, so a developer doesn't need to remember which engine serves which model or where it lives on disk.

## Highlights

- Zero-config scanner discovers models across common local storage locations automatically.
- Central SQLite registry tracks every discovered model in one place.
- Cross-engine serving picks sensible defaults automatically, with an SSE-powered audit dashboard for monitoring model operations live.
- Most active repo in this catalog — recent work includes a provider API, a GGUF metadata walker, a Raspberry Pi extension, and CI that serves and tests LFM2-350M on CPU runners.
