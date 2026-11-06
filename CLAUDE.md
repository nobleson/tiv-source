# Project Rules for Claude Code / AI Assistants

These rules apply to any AI coding assistant working on Tiv Source.

## Core Principles

1. **Never write custom cryptography.**  
   Use only matrix-rust-sdk, vodozemac, and vetted platform APIs (Android Keystore, etc.).

2. **Never log message content, keys, or identifying data.**  
   This includes reports, proof bundles, vault content, and AI voice data.

3. **No analytics or third-party SDKs** that send identifiers or content off the device.

4. **Pin dependency versions.**  
   Add a dependency only after review. Prefer well-maintained, widely used libraries.

5. **Profile separation is sacred.**  
   Profile A (social) and Profile B (vault) must never share accounts, keys, databases, or storage.  
   The duress PIN path must never load, list, or leave traces of vault data.

6. **Security over convenience.**  
   When in doubt, choose the more restrictive option and document the decision.

## Coding Standards

- Prefer TypeScript with strict mode.
- Keep the React Native core (`apps/mobile`) generic. Product-specific branding and config belong in `apps/ateutiv` (or future product apps).
- Shared types, report schema, and Matrix event types live in `packages/shared`.
- All structured Matrix events use the `org.tivsource.*` namespace.
- Record significant architectural decisions as Architecture Decision Records in `/docs/decisions`.

## Testing Expectations

Before considering a task done:

- Run the full relevant test suite
- Include tests for profile separation and wipe behaviour where applicable
- Verify that vault data is not readable, listed, or loaded before unlock
- Verify that the duress PIN never exposes vault content in logs, caches, or notifications

## Documentation

- Use the current official documentation of Matrix, matrix-rust-sdk, ProofMode, React Native, and SQLCipher as the source of truth for APIs.
- Keep the Product and Technical Specification in `/docs/specification` as the authoritative product document.
- Update relevant docs when behaviour changes.

## AI / Tiv Language Work

- Voice and message data for AI features stays on the device or on project-controlled servers only.
- The assistant must never read vault content and must never give security advice.
- All speech data requires informed, per-speaker, revocable consent stored as a ConsentRecord.
- Prefer community-governed licensing for language data so it benefits the Tiv community.

## When Unsure

- Ask for clarification rather than guessing on security-sensitive decisions.
- Prefer small, reviewable changes over large rewrites.
- Document trade-offs in an ADR when making non-obvious architectural choices.
