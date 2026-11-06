# packages/native-matrix

Native bridge to matrix-rust-sdk for React Native.

This package provides the end-to-end encryption, room management, and device key handling used by both Profile A (social) and Profile B (vault).

**Rule:** Never implement cryptography here. Only use matrix-rust-sdk and vodozemac.
