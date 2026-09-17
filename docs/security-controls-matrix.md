# Security Controls Matrix

**Owner:** Information Security Officer  
**Review cadence:** At least annually and after material changes

| Control area | Minimum control | Evidence |
|---|---|---|
| Identity | Unique accounts, MFA, role-based access, quarterly access review | Access roster and review approvals |
| Privileged access | Separate admin accounts, least privilege, session logging | Privileged-access report |
| Encryption | TLS in transit and strong encryption at rest; managed key rotation | Configuration evidence |
| Data minimization | Collect only data required for eligibility and disbursement | Data inventory and field map |
| Logging | Immutable audit events for access, decisions, credits, reversals, and exports | Sample logs and retention proof |
| Vulnerability management | Scanning, patch SLAs, remediation tracking, penetration testing | Scan reports and tickets |
| Secure development | Code review, dependency scanning, secrets detection, change approvals | CI records |
| Backups | Encrypted backups, restore tests, recovery objectives | Restore-test report |
| Incident response | Detection, containment, notification, evidence preservation, lessons learned | Incident tickets and exercise results |
| Vendors | Due diligence, contractual safeguards, periodic reassessment | Vendor file and contract |
| Training | Security, privacy, phishing, and role-specific training | Completion records |
| Physical security | Restricted facilities and secure disposal for paper records | Inspection and disposal logs |

## Required safeguards
- Do not store government credentials, tax data, or identity documents in browser local storage.
- Use approved agency channels and documented authentication methods.
- Require dual authorization for award overrides, manual credits, refunds, and reversals.
- Block duplicate disbursements with idempotency keys and reconciliation checks.
- Retain evidence according to the applicable agency and legal retention schedule.
