# V21 Order Preservation

V21 deliberately does not rewrite the project media arrays. The complete `projects` section in `src/lib/site-data.ts` is byte-for-byte identical to V20.

- Project array SHA-256: `f5a7bce3aa647125690c61bbd073a39288bef34c147993be1cd68097ff0581a5`
- Total ordered entries: 483
- Images: 472
- Videos: 11
- Source audit inherited unchanged from: `ORDER_AUDIT_V20.csv`
- Original authoritative client ZIP SHA-256: `328f066010c30def480d0b14dc695cd21c427a77002abf9ae79007392049ccb3`

Visual numbers shown on project media are simple UI positions (`1, 2, 3...`) only. They do not alter the underlying client-defined sequence ordering.
