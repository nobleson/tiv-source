# apps/mobile

Shared React Native (TypeScript) core for **Tiv Source**.

This is the main application package. Product-specific branding and configuration live in `apps/ateutiv`.

## Architecture

```
src/
├── profiles/
│   ├── social/          # Profile A – everyday messaging + Tiv AI
│   └── vault/           # Profile B – hidden reporting & verification
├── components/          # Shared UI components
├── navigation/          # Navigation (will support profile switching)
├── services/            # Matrix, storage, capture, etc.
├── hooks/
├── types/
└── utils/
```

### Dual-profile rules (from the specification)

- Two completely separate Matrix accounts, device keys, and encrypted databases
- Profile B (Vault) is not loaded, listed, or decrypted until the user unlocks it
- A duress PIN opens only Profile A and must leave no vault traces
- Quick wipe securely deletes all vault data, keys, caches and pending items
- Notifications are content-free (no sender, room name, or message content)

## Current Status

**Phase 0 – Foundations**

- Basic React Native + TypeScript project scaffolded
- Folder structure for dual profiles created
- Next: implement profile separation, Matrix connection, and unlock flows

## Getting Started (on your machine)

```bash
# From the monorepo root
cd apps/mobile

# Install dependencies
npm install
# or
pnpm install

# Start Metro
npm start

# In another terminal – run on Android
npm run android
```

You will need:

- Node.js 20+
- Android Studio with SDK (API 26+)
- An Android emulator or device

## Notes

- This package is the **shared core**. The first product (`ateutiv`) will add branding, default rooms, language packs and product-specific configuration on top of it.
- matrix-rust-sdk integration will live in `packages/native-matrix` and be consumed here.
