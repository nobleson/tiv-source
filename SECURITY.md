# Security Policy

Tiv Source handles sensitive community reporting data and is designed for high-risk environments.  
Security is a core requirement, not an afterthought.

## Supported Versions

Security updates will be provided for the latest release of the core platform and for the current version of **ateutiv**.

| Version          | Supported          |
|------------------|--------------------|
| main (development) | Yes (best effort) |
| Latest release   | Yes                |
| Older releases   | Limited            |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Please report security issues privately.  

Until a dedicated security contact is published, you can:

1. Open a private security advisory on GitHub (preferred once the repository is public), or
2. Contact the maintainers directly through the channels listed in the repository (to be added).

Please include:

- A clear description of the issue
- Steps to reproduce
- Potential impact
- Any suggested fixes (optional)

We will acknowledge receipt as quickly as possible and keep you informed of progress.

## Security Principles (from the specification)

- No cryptography is written in-house. We use matrix-rust-sdk, vodozemac and vetted platform APIs.
- Local databases are encrypted with SQLCipher. Keys are protected by the Android Keystore.
- The vault database key is derived from the vault passphrase with Argon2id and is never stored in the clear.
- All chats and rooms use end-to-end encryption. Unencrypted rooms cannot be created.
- Roles, vouching records and report links live in encrypted room state.
- Push notifications carry no content, sender or room name.
- No analytics, advertising or crash-reporting SDKs that send identifiers or content to third parties.
- Captured media is signed on the device. Proof bundles are encrypted to verifier keys only.
- An independent security audit is required before any deployment beyond a closed pilot.

## Responsible Disclosure

We ask that you:

- Give us reasonable time to investigate and fix the issue before public disclosure
- Avoid accessing or modifying data that does not belong to you
- Avoid actions that could harm users or the availability of the service

We are committed to working with researchers in good faith and will credit you (if you wish) once the issue is resolved.
