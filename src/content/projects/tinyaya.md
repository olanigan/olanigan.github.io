---
title: TinyAya — Language AI for Nigerian Languages
date: 2024-01-29
category: Language AI
summary: Speech recognition and diacritization tooling for Yoruba, part of a broader initiative to build language AI for underrepresented Nigerian languages (Yoruba, Hausa, Igbo, Pidgin).
methods: [ASR, wav2vec2-bert, fine-tuning, diacritization, TTS]
github: https://github.com/olanigan/yoruba_asr
huggingface: https://hf.co/olanigan/w2v-bert-yoruba-CV16
impact: Targets languages mainstream speech and language model providers underserve, starting with a working Yoruba ASR model rather than a research proposal.
selected: true
---

TinyAya is Ibrahim's initiative for language AI covering underrepresented Nigerian languages — Yoruba, Hausa, Igbo, and Pidgin — starting with Yoruba speech and diacritization tooling.

## Highlights

- [`w2v-bert-yoruba-CV16`](https://hf.co/olanigan/w2v-bert-yoruba-CV16): a Yoruba automatic-speech-recognition model, fine-tuned from Meta's `facebook/w2v-bert-2.0` (a 605M-parameter wav2vec2-bert model) on Common Voice 16.0 Yoruba data.
- A Yoruba diacritizer and a Yoruba text-to-speech demo (built on Facebook's MMS-TTS), both shipped as interactive Hugging Face Spaces.
- Hausa, Igbo, and Pidgin coverage is the stated next step for the initiative.
