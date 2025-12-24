# Auth0 Mini Project: Authentication & Authorization Workflow
## Overview
This repository showcases a hands-on **Auth0 CIAM mini project** completed using an active Auth0 tenant.  
The focus of this project was to design and validate **authentication and authorization workflows**, manage tenant configuration as code, and test integrations using **Postman**, without building a production application.

The project simulates real-world CIAM scenarios including **multi-organization setup**, **machine-to-machine (M2M) applications**, **custom login flows**, and **configuration backup/version control**.

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

## Architecture
The solution is based on a CIAM architecture that includes:
- Multiple Auth0 Organizations (Org A & Org B)
- Machine-to-Machine (M2M) applications
- Postman used as the API client for testing OAuth flows
- Auth0 Forms for login and user journey customization
- Tenant configuration exported and stored in GitHub for backup and version control

## Architecture Diagram
<img width="891" height="589" alt="image" src="https://github.com/user-attachments/assets/976004da-9dbc-4b79-b4e9-ad060f93d5e7" />


## Auth0 Tenant Applications Setup Screenshot

<img width="1399" height="910" alt="image" src="https://github.com/user-attachments/assets/567b58d1-0aab-4854-b053-039939c4660e" />


## Workflow Steps
1. Created users, roles, and permissions in the Auth0 tenant  
2. Configured MFA and social login providers  
3. Designed and customized login and user journeys using **Auth0 Forms**  
4. Built **Rules and Actions** to automate role assignment and conditional logic  
5. Created **Machine-to-Machine (M2M)** applications using the Client Credentials flow  
6. Tested authentication, token issuance, and protected API access using **Postman**  
7. Exported Auth0 tenant configuration using **Auth0 Deploy CLI (`a0deploy`)**  
8. Stored exported configuration in GitHub for **backup, auditing, and version control**

## Key Learnings
- Practical implementation of **OAuth 2.0 and OpenID Connect (OIDC)** flows  
- Role-based access control using Auth0 Organizations and application permissions  
- Designing authentication journeys using **Auth0 Forms**  
- Automating authentication behavior with **Rules and Actions**  
- Secure API testing using Postman and M2M authentication  
- Managing Auth0 tenant configuration as code using **`a0deploy`**  
- Version-controlling identity configuration for repeatable and auditable deployments

## Configuration Backup & Version Control

- Tenant configuration exported in YAML format

- Stored in GitHub for:

    - Change tracking

    - Rollback capability

    - Environment portability (dev/test/prod concepts)

- No secrets or sensitive credentials are included in this repository

## Tooling Used

- Auth0 CIAM

- Auth0 Deploy CLI (a0deploy)

- Postman

- GitHub

- YAML configuration


## Notes: OAuth 2.0 & OpenID Connect (Technical)

### OAuth 2.0 (Authorization Framework)

OAuth 2.0 is used for **authorization**. It defines how a client obtains access to protected resources.

#### Key concepts used in this project

##### Client Credentials Grant
- Used by **Machine-to-Machine (M2M)** applications  
- No user context involved  
- Client authenticates using:
  - `client_id`
  - `client_secret`

##### Access Token
- Issued by Auth0  
- Used to access protected APIs  
- Sent in API requests as: Authorization: Bearer <access_token>


##### Scopes
- Define what actions a client is allowed to perform  
- Enforced by API permissions  

#### In this project
- Postman acted as the OAuth client  
- Auth0 issued access tokens  
- Tokens were validated against API scopes and permissions  

---

### OpenID Connect (OIDC)

OpenID Connect is an **identity layer built on top of OAuth 2.0** and is used for **authentication**.

#### Key concepts

##### ID Token
- JWT containing authenticated user identity information  

##### User Authentication
- Username/password authentication  
- Social identity providers  
- Multi-Factor Authentication (MFA)  

##### OIDC Flows
- Typically uses **Authorization Code Flow**  
- While no frontend application was built, OIDC settings were configured at the tenant and application level  

#### In this project
- OIDC configuration was applied to Auth0 applications  
- Login experiences were customised using **Auth0 Forms**  
- Identity lifecycle events (login, MFA enforcement, role assignment) were controlled using **Rules and Actions**

---

## Configuration Management & Backup

- Tenant configuration was exported using **Auth0 Deploy CLI (`a0deploy`)**
- Exported configuration includes:
- Actions
- Connections
- Organizations
- Forms
- Flows
- Tenant settings
- Sensitive secrets are excluded
- Configuration is stored in GitHub for:
- Version control
- Auditability
- Future CI/CD integration

## Notes
- No client secrets or sensitive credentials are stored in this repository
- The project is intended for learning, demonstration, and consulting reference purposes
- While no production application was built, all authentication and authorization flows were fully tested using Postman.

## **Disclaimer**

This project is for educational and demonstration purposes only and does not represent a production deployment.
