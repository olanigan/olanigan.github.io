---
title: SpeechTranscriber (macOS App)
date: 2026-06-12
category: macOS App
summary: A native macOS app for real-time, on-device speech-to-text using a bundled Whisper Tiny model — no Python dependency, no cloud calls.
methods: [Swift, SwiftUI, SwiftWhisper, AVFoundation, Combine]
github: https://github.com/olanigan/SpeechTranscriber
impact: Delivers instant, fully local transcription from a floating widget activated by a global hotkey, with none of the Python/runtime overhead typical of Whisper-based tools.
selected: true
---

SpeechTranscriber is a pure-Swift macOS app for real-time, on-device speech-to-text, built around a native SwiftWhisper wrapper instead of a Python-based Whisper runtime.

## Highlights

- Global hotkey (⌘⇧S) opens a floating widget for instant transcription.
- Bundles a 74MB Whisper Tiny model, processing audio at 16kHz PCM entirely on-device.
- Built with SwiftUI, AVFoundation, and Combine in an MVVM architecture — no server, no Python, no network calls.
- The only non-Homestead repo in this catalog with a GitHub star.
