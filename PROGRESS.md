# Learning in motion — development notes

Snapshot: **24 October 2026**

This public journal follows a home learning project from its teaching framework to a working local learning app. It is a manually curated summary of development notes. Personal profiles, learning records, and private source documents are not published here.

## The journey

| Date | Milestone | State |
| --- | --- | --- |
| 11 October 2026 | Established a teaching framework, reusable activity templates, and learning maps for mathematics and Hebrew. Play, hands-on exploration, and project-based learning guide the approach. | Created |
| 17 October 2026 | Added a short learner-feedback workflow and developed the vision for a personal learning app. | Documented |
| 18 October 2026 | Created the first clickable subtraction prototype, connecting groups of ten and single units. | Historical prototype |
| 23 October 2026 | Created a more colorful Bead Workshop prototype with animation, mini-games, hints, and personal feedback. | Historical prototype |
| 23 October 2026 | Built Numbers Club 1.0.0 with persistent local saving, separate symbol profiles, and a complete activity flow. Improved navigation, save retries, and recovery during maintenance. | Implemented and checked locally |
| 24 October 2026 | Prepared a guide for a short, accompanied first session with optional learner feedback. | Guide prepared; session pending |

## What works today

The local app offers a Hebrew subtraction activity with three warm-up questions, a bead story illustrating **42 − 17 = 25**, and an optional **54 − 28 = 26** challenge. Content is reviewed in advance.

Learners choose a fixed symbol profile. Each profile has its own activity state and history. Saving and resuming preserve the current place, answers, and feedback drafts in a file on the local computer. The interface reports accuracy, hints, and active time separately, with optional learner feedback after performance feedback.

The app does not currently use live AI, online accounts, or cloud synchronization. Symbol profiles distinguish local records; they are not passwords. The two earlier design prototypes preserve their historical behavior: their temporary state resets when the page is refreshed or closed.

The interaction on this public website is a small illustration of the mathematical idea. It is separate from the local app and records no learning results. The app preview uses synthetic software-test data.

## Documented software checks

| Suite | Recorded passing checks or scenarios |
| --- | ---: |
| Service and persistence | 25 |
| Complete app journey | 16 |
| Pause and navigation | 19 |
| Save queue and retries | 9 |
| Recovery | 3 |
| **Total across five suites** | **72** |

These counts come from multiple documented development and maintenance runs, not one combined final run or a live test feed. The 25 service checks passed before maintenance; the server was unchanged in that maintenance round. Recovery checks were rerun and are counted once in the total. The final app-flow run passed all 16 scenarios after the maintenance changes.

All checks used synthetic, isolated data. Documented checks include saving, resuming after refresh or restart, profile separation, numerical input, timing behavior, and narrow-screen layouts. Simulated page departure and return do not establish real browser back-forward-cache recovery. These checks are not a comprehensive accessibility audit or evidence of learning effectiveness.

## What comes next

The next planned step is a short, accompanied learner session: observe whether instructions and controls are clear, note support needs, invite optional feedback, and choose one improvement to try next. Learner words, adult observations, and interpretation should remain distinct.

No real learner-session outcomes or controlled beta results have been reported in the project as of this snapshot. Broader content, controlled beta evaluation, and AI-supported personalization remain future work. Weighted scoring and age-based norms have not been established. Progress here describes development of the project, not measured progress by learners.

## How this record is maintained

Milestones and capabilities are manually reconciled against project development notes. Dates describe documented work, not automatically detected events. Updates should preserve the distinction between an idea, an implemented feature, a software check, and an observed learning outcome. The public page and this record should be updated together when verified project progress changes.
