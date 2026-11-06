# Tiv Source

**Open-source platform for community messaging, verified reporting, and local-language AI.**

Tiv Source is the foundation.  
**ateutiv** is the first product built on it.

---

## What is Tiv Source?

Tiv Source is an Android-first platform that gives communities:

- Everyday encrypted social messaging
- Hidden, invite-only spaces for verified reporting
- Strong protection for the identity of reporters and verifiers
- A built-in conversational AI in the local language (Tiv for the first product)

It is designed from the ground up for low-cost Android phones, weak connections, and high-risk environments.

The core principles are:

1. One app for everyone — access is controlled by keys and approvals, not by separate builds
2. Private reporting spaces are an ordinary, documented feature
3. Provenance over detection — media captured in the app is signed at capture
4. Every report is reviewed by a human verifier before escalation
5. Reports describe observable events, never named private individuals
6. Voice and message data for AI stays on-device or on project-controlled servers
7. The code is open source

## ateutiv — the first product

**ateutiv** is the first real product built on the Tiv Source platform.  
It is tailored for Middle Belt communities in Nigeria, with full support for the Tiv language and the specific reporting needs of the region.

Other communities and organisations are encouraged to build their own products on top of Tiv Source for their own languages, regions, and use-cases.

## Repository Structure

```
tiv-source/
├── apps/
│   ├── mobile/                 # Shared React Native core
│   └── ateutiv/                # First product (branding, config, themes)
├── packages/
│   ├── native-matrix/          # Rust bridge to matrix-rust-sdk
│   ├── shared/                 # Shared types, report schema, roles
│   └── ui/                     # Shared UI components
├── services/
│   ├── report-service/         # Report validation, hashing, status
│   └── tiv-ai/                 # AI inference service
├── ml/                         # Data pipelines, training & evaluation
├── infra/                      # Docker Compose (Synapse, Postgres, etc.)
├── docs/
│   ├── specification/          # Full product & technical specification
│   ├── threat-model/
│   ├── decisions/              # Architecture Decision Records
│   └── contributing/
├── LICENSE
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
└── CLAUDE.md
```

## Technology Stack (high level)

| Area                    | Choice                                      |
|-------------------------|---------------------------------------------|
| Messaging               | Matrix + matrix-rust-sdk                    |
| Homeserver              | Synapse + PostgreSQL                        |
| Mobile                  | React Native (TypeScript)                   |
| Local storage           | SQLCipher + Android Keystore                |
| Media provenance        | ProofMode / C2PA style signed capture       |
| AI                      | Self-hosted inference + fine-tuned models   |

Full details are in the [Product and Technical Specification](docs/specification/).

## Getting Started

> The project is currently in **Phase 0 – Foundations**.  
> The dual-profile architecture, Matrix connection, and basic scaffolding are being built first.

### Prerequisites

- Node.js 20+
- pnpm 9+
- Android Studio / SDK (API 26+)
- Docker (for local Synapse)

Detailed setup instructions will be added as the foundation is completed.

## Contributing

We welcome contributions of all kinds:

- Code (mobile, services, infrastructure)
- Documentation and translations
- Tiv language data (speech, text pairs) for the AI
- Testing on low-end Android devices
- Security review
- Native-speaker evaluation of the AI assistant

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

The AI track is deliberately designed so that university groups (especially Benue State University) and community members can contribute data, fine-tuning, and evaluation without needing to touch the core application code.

## Security

This project handles sensitive reporting data.  
Please see [SECURITY.md](SECURITY.md) for how to report vulnerabilities.

**Never** open a public issue for a security problem.

## License

Apache License 2.0 — see [LICENSE](LICENSE).

## Roadmap (summary)

| Phase              | Focus                                      | Status      |
|--------------------|--------------------------------------------|-------------|
| 0 – Foundations    | Repo, dual profiles, Matrix, encryption    | In progress |
| 1 – Prototype      | Reporting, capture, verifier tools, offline| Planned     |
| 2 – Closed pilot   | Real users, roles, narrow AI               | Planned     |
| 3 – Hardening      | External audit, performance                | Planned     |
| 4 – Expansion      | Broader release + full Tiv AI              | Planned     |

---

Built with care for communities that need both everyday communication and protected channels for verified information.
git remote add origin https://github.com/nobleson/tiv-source