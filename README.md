# Forge Jira Starter

A Forge app starter for Jira that demonstrates a full end-to-end Custom UI setup — from a React frontend invoking a Forge resolver, to authenticated Jira API calls running `asUser`.

The app renders as a Jira project page and displays the current project details and the logged-in user's profile, proving the full stack is wired up and working.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials.

## What this covers

- Custom UI (React) rendered in a Jira project page
- `invoke` call from the UI to a Forge resolver
- `asUser` Jira REST API calls from the resolver
- Reading project context (`projectKey`) from the Forge extension context
- Parallel API calls with `Promise.all`

## Structure

```
src/          Forge resolver (runs on Atlassian's edge)
static/ui/    Custom UI React app (rendered in an iframe)
manifest.yml  App configuration, module definitions, and permission scopes
```

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

Install dependencies in both directories:
```
npm install
cd static/ui && npm install
```

Build the UI:
```
cd static/ui && npm run build
```

Deploy to your development environment:
```
forge deploy
```

Install on an Atlassian site:
```
forge install
```

If you add new permission scopes, upgrade the existing installation:
```
forge install --upgrade
```

## Notes

- `forge deploy` pushes code changes to your development environment.
- `forge install` is only needed for new sites — existing installs pick up deploys automatically.
- Always run `npm run build` inside `static/ui` before `forge deploy` — Forge serves the compiled build output.
- The resolver reads `projectKey` from `req.context.extension.project.key`.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
