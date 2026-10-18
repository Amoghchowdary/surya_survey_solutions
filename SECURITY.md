# Security baseline — V6

The production package keeps the dependency corrections introduced after the V4 audit warning:

- `@tanstack/react-start`: `1.168.60`
- `@tanstack/react-router`: `1.170.41`
- `@tanstack/router-plugin`: `1.168.42`
- `vite`: `8.1.6`

The GitHub Pages workflow runs:

```bash
npm audit --audit-level=critical
```

before production build and deployment.

For every new local release, run:

```powershell
.\scripts\INSTALL_AND_VERIFY_V6.ps1
```

Do not continue to build/deploy if `npm install` or the critical audit fails.
