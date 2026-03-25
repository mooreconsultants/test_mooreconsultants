# Claude Code Instructions

## Workflow: Syncing with Live Site

The live site lives in the **3pdigital** GitHub organisation (`3pdigital/mooreconsultants`).

**Before making any changes to this test repo:**
1. Pull the latest changes from the live site repo and merge them in first
2. **Never push changes from this test repo to the live site repo**

```bash
# Add the live site as a remote (one-time setup)
git remote add upstream git@github.com:3pdigital/mooreconsultants.git

# Before starting work, sync latest changes from live site
git fetch upstream
git merge upstream/main
```
