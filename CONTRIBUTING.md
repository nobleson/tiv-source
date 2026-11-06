# Contributing to Tiv Source

Thank you for your interest in contributing.  
Tiv Source is built so that many people and communities can help — both on the core platform and on products built from it (starting with **ateutiv**).

## Ways to Contribute

- **Code**: mobile app, services, infrastructure, shared packages
- **Documentation**: improve the specification, write guides, translate docs
- **Tiv AI / Language data**: speech recordings, text pairs, evaluation, native-speaker review
- **Testing**: especially on low-end Android devices and weak networks
- **Security**: review, responsible disclosure, threat modelling
- **Design & UX**: especially for low-literacy and voice-first use

## Getting Started

1. Read the [Product and Technical Specification](docs/specification/) (or the summary in the README).
2. Join the discussion (link will be added when the community channels are ready).
3. Look at open issues labelled `good first issue` or `help wanted`.
4. For AI contributions, see the dedicated section below.

## Development Setup

Detailed setup instructions will be published once Phase 0 (Foundations) is complete.  
In the meantime the high-level stack is:

- React Native + TypeScript for the mobile app
- matrix-rust-sdk (via a native bridge)
- Synapse + PostgreSQL for the homeserver
- SQLCipher for local encrypted storage
- pnpm workspaces for the monorepo

## Pull Request Process

1. Fork the repository and create a branch from `main`.
2. Make your changes. Keep commits focused and well-described.
3. Add or update tests where appropriate.
4. Ensure the code follows the project conventions (see `CLAUDE.md` and any package-level rules).
5. Open a pull request against `main` and fill in the template.
6. Respond to review feedback.

All contributions are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Special Path: Tiv AI & Language Contributions

The AI assistant is a major part of the project and is deliberately structured so that:

- Community members and universities can contribute data and evaluation
- The core application code stays cleanly separated

### What we need most right now

- High-quality Tiv speech recordings (with consent)
- Tiv ↔ English text pairs
- Native-speaker review of model outputs
- Help defining evaluation sets for ASR, translation, TTS and the assistant

### How data contributions work

1. All speech data requires informed, per-speaker, revocable consent.
2. Speakers are identified only by a random ID — never by name, phone number or location.
3. A clear consent record is stored with every contribution.
4. Licensing will be community-governed so the data benefits the Tiv community.

Detailed instructions and the recording tool will live under `/ml` and `/services/tiv-ai`.  
We are preparing this path so that engagement with Benue State University and other partners can start cleanly.

If you want to help with the AI track, open an issue with the label `tiv-ai` or contact the maintainers.

## Security Contributions

Please do **not** open public issues for security vulnerabilities.  
See [SECURITY.md](SECURITY.md) for the responsible disclosure process.

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

## Questions?

Open a discussion or an issue. We are happy to help new contributors find a good first task.
