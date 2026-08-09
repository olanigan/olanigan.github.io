---
title: Small Giants
date: 2026-02-23
category: Applied AI/ML
summary: A curated collection proving that small language and retrieval models (350M-3B parameters) can power production-grade AI applications entirely locally.
methods: [SLMs, multimodal extraction, RAG, LangChain, Qdrant, Ollama, RAGAS]
github: https://github.com/olanigan/small-giants
impact: Demonstrates that capable, production-grade AI doesn't require massive models — three working demos show real tasks (document extraction, coding assistance, retrieval) running on models small enough to run locally.
selected: true
---

Small Giants is a research-led initiative built around a simple thesis: small language and retrieval models, in the 350M-3B parameter range, are enough to power real production workloads when the application is designed around their strengths.

## Highlights

- **Invoice Parser** — multimodal document extraction using Liquid AI's LFM2-VL.
- **Granite Coder** — a token-efficient coding agent built on IBM Granite, using recursive language-model calls instead of one giant context window.
- **Local RAG pipeline** — semantic retrieval with LangChain and Qdrant over Ollama-served models, with automated evaluation via RAGAS.
