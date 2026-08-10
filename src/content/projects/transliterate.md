---
title: transliterate (io-transliterate)
date: 2026-08-09
category: Language AI
summary: Locally fine-tuned Gemma models that correct informally-romanized Arabic and Islamic terms in English lecture transcripts into consistent academic transliteration.
methods: [LoRA fine-tuning, Gemma, DSPy evaluation, dataset curation]
github: https://github.com/olanigan/transliterate
huggingface: https://hf.co/olanigan/gemma-3-4b-transliterate
impact: Replaces a two-stage cloud LLM pipeline (Gemini 1.5 Flash/Pro) with small, locally-runnable fine-tuned models, and gives the task a reproducible DSPy-based evaluation instead of spot-checking.
selected: true
---

`transliterate` consolidates work on academic Arabic transliteration — correcting informally-romanized Arabic and Islamic terminology in English-language lecture transcripts into a consistent scholarly style (macrons, ʿayn/hamza symbols, italicization rules, and more).

## Highlights

- Two Gemma LoRA adapters, being renamed to `io-transliterate-gemma-3-4b` and `io-transliterate-gemma-2-2b`, with full-weight `-merged` releases planned for each.
- A documented dataset lineage from early raw transcript pairs through to `logical-transcripts`, the current golden dataset built from a fully reviewed real lecture.
- A DSPy-based evaluation harness scoring both style-guide rule compliance and similarity to gold transliterations.
- Supersedes an earlier prototype, [`ar-transliterate`](https://github.com/olanigan/ar-transliterate), which drove the same style guide through a two-stage Gemini 1.5 Flash/Pro cloud pipeline.
