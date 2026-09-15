# RelayCRM — Product Requirements Document

**Tagline:** Relationships that move business.

## Product Summary
RelayCRM is a lightweight CRM for managing companies, contacts, notes, activities, and follow-ups.

## Goal
Provide the essential workflows of a CRM without enterprise complexity.

## Required Screens
- Sign in
- Dashboard
- Company list
- Company detail
- Contact list
- Contact detail
- Activities
- Reports
- Mobile company view

## Company Fields
Name, industry, website, phone, location, stage, owner.

## Contact Fields
First name, last name, job title, email, phone, company, owner.

## Activity Types
Call, email, meeting, follow-up, task.

## Company Stages
Prospect, qualified, proposal, negotiation, customer, inactive.

## Company Detail
Tabs: Details, Contacts, Notes, Activity.

## Contact Detail
Display company, contact information, notes, activity timeline, next action.

## Dashboard
Show active companies, upcoming follow-ups, overdue activities, recent activity, pipeline by stage.

## Search
Search by company, contact, email, notes.

## Data Model
- `users`
- `companies`
- `contacts`
- `notes`
- `activities`
- `tags`
- `company_tags`

## Reporting
Pipeline by stage, activities by type, follow-up completion rate, new companies by period.

## Email
Optional Resend usage for follow-up reminders and assignment notifications.

## Testing
### Vitest
Stage transitions, search helpers, follow-up calculations, validation.

### Playwright
Company CRUD, contact CRUD, add note, add follow-up, search/filter.

## Technology Baseline
Astro, SolidJS, TypeScript, Vite, Node.js, Tailwind CSS, Neon Postgres, Neon Auth, direct SQL, Zod, Cloudflare R2 where needed, Resend, Vitest, Playwright, ESLint, Prettier, Sentry, GitHub Actions, Netlify, Cloudflare DNS.

## MVP Acceptance Criteria
- Company CRUD works.
- Contact CRUD works.
- Notes and activities work.
- Next follow-up is visible.
- Search and filters work.
- Dashboard values are correct.
