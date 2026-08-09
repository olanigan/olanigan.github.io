---
title: TinyAya — Language AI for Underrepresented Languages
date: 2026-07-31
category: Language AI
summary: High-performance transliteration and speech models for Arabic diacritization and Nigerian languages (Yoruba, Hausa, Igbo, Pidgin), benchmarked with DSPy.
methods: [transliteration, LoRA fine-tuning, Gemma, ASR, DSPy evaluation, Yoruba G2P]
github: https://github.com/olanigan/transliterate
huggingface: https://hf.co/olanigan/gemma-3-4b-transliterate
impact: Brings production-quality language tooling to languages that mainstream model providers underserve, with reproducible datasets and DSPy-benchmarked evaluation rather than one-off demos.
selected: true
---

TinyAya is the umbrella for Ibrahim's work on language AI for underrepresented languages — most actively Arabic transliteration/diacritization and Yoruba speech recognition, with Hausa, Igbo, and Pidgin planned.

## Highlights

- Two LoRA adapters shipped in July 2026: [`gemma-3-4b-transliterate`](https://hf.co/olanigan/gemma-3-4b-transliterate) and [`gemma-2-2b-transliterate`](https://hf.co/olanigan/gemma-2-2b-transliterate), trained on the [`gemma-4-good-dataset`](https://hf.co/datasets/olanigan/gemma-4-good-dataset).
- A golden paired dataset, [`logical-transcripts`](https://hf.co/datasets/olanigan/logical-transcripts) (Aug 2026), built from a real recorded Islamic lecture to train Arabic-Latin-to-diacritized transliteration.
- Evaluation throughout uses DSPy metrics rather than spot-checks, so quality claims are reproducible.
