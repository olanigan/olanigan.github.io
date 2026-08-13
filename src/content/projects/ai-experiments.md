---
title: AI Experiments
date: 2026-08-12
category: Applied AI/ML Research
summary: A curated, reproducible portfolio of validated AI/ML experiments, organized by domain — starting with a 7-way rules-based PDF parsing benchmark.
methods: [Benchmarking, PDF parsing, pypdf, PyMuPDF, pdfplumber, camelot, tabula, Jupyter/Colab]
github: https://github.com/olanigan/ai-experiments
impact: Replaces one-off "which library is fastest" folklore with warmed, statistically-tied benchmark numbers committed to the repo and reproducible via `make benchmark` or a Colab notebook — future domains (Computer Vision, agentic orchestration) land in the same self-contained, README-plus-results format.
selected: true
---

AI Experiments is a home for portfolio-grade AI/ML experiments, organized by domain, where every entry ships with its own README, benchmark results, and reproducible run instructions rather than a one-off gist or notebook.

The first entry, **Rules-Based PDF Parsing**, compares seven libraries (`pypdf`, `PyMuPDF`, `pdfplumber`, `camelot`, `tabula`, `liteparse`) on speed and table-detection accuracy across text, table, and merged-cell PDFs. Numbers are taken as the mean of three timed runs after a discarded warmup call, and the previous "23.6ms pypdf" folklore was explicitly retested and corrected — `pypdf`, `liteparse`, and `PyMuPDF` turn out to be statistically tied for fastest, all around 1ms.

Future experiment series (Computer Vision, agentic orchestration) will land in the same structure: validated, dated, and reproducible on a stated platform (currently macOS arm64 / Python 3.12, Colab-ready).
