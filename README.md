# Auth0 Mini Project: Authentication & Authorization Workflow
## Overview
During the holidays, I explored **Auth0** by building a complete authentication and authorization workflow using an active tenant.  
The goal was to understand **user and role management, API integration, and workflow automation** in a practical setting.

### Auth0 Applications Configuration

The tenant includes multiple application types configured for hands-on testing:
- Regular Web Applications for user authentication (OIDC)
- Machine-to-Machine applications for API access
- Used with Postman to validate OAuth2 flows and permissions
  
## Project Scope
- User authentication via Auth0 (login/logout)
- Role-based access control
- Multi-step rules/actions (e.g., MFA, role assignment)
- API testing with Postman
- Tenant configuration export using `a0deploy` CLI

## Architecture Diagram
<img width="891" height="589" alt="image" src="https://github.com/user-attachments/assets/976004da-9dbc-4b79-b4e9-ad060f93d5e7" />


## Auth0 Tenant Applications setup screenshotSteps

<img width="1399" height="910" alt="image" src="https://github.com/user-attachments/assets/567b58d1-0aab-4854-b053-039939c4660e" />


## Workflow Steps
1. Created users, roles, and permissions in the Auth0 tenant
2. Configured MFA and social logins
3. Built rules and actions to automate role assignments
4. Tested authentication and API calls using Postman
5. Exported tenant configuration for version control

## Key Learnings
- OAuth2 / OIDC flow in practice
- Role-based access control
- Rules and actions for automated workflows
- Secure API testing with Postman
- Exporting and managing tenant configuration with `a0deploy`

## Next Steps
- Explore integration with M365 apps and Copilot
- Automate workflow deployments in CI/CD pipelines
- Build consulting-ready demos for clients

## Notes
- All secrets are excluded
- This repo demonstrates practical skills and can serve as a reference for consulting projects or internal applications

