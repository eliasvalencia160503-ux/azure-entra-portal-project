# Azure Entra Portal

A portfolio project built with **Next.js**, **Microsoft Entra ID**, **NextAuth**, and **Microsoft Graph** to demonstrate **single sign-on (SSO)**, **role-based access control (RBAC)**, and Microsoft cloud API integration.

## Overview

This project simulates an internal company portal where users sign in with **Microsoft Entra ID** and are granted access based on assigned app roles.

It was designed as a portfolio project to strengthen my understanding of cloud identity and connect my **desktop support / Active Directory background** to modern identity and access management concepts in Azure.

## Features

- Microsoft Entra ID sign-in
- Authentication with NextAuth.js
- Role-based access control using Entra app roles
- Protected routes for:
  - Dashboard
  - Support
  - Admin
- Microsoft Graph integration using `User.Read`
- Signed-in user profile display
- Clean UI for demo/portfolio presentation

## Tech Stack

- **Frontend:** Next.js (React, JavaScript)
- **Authentication:** NextAuth.js
- **Identity Provider:** Microsoft Entra ID
- **Authorization:** App roles (Employee, Support, Admin)
- **API Integration:** Microsoft Graph
- **Environment:** Local development demo complete, Azure hosting in progress

## Architecture Summary

This project works in three layers:

### 1. Authentication
Users sign in with Microsoft Entra ID through NextAuth.

### 2. Authorization
App roles are assigned in Entra ID and used to control access to protected routes.

### 3. API Access
The app uses Microsoft Graph to retrieve signed-in user profile information.
## Roles Used

- **Employee** → basic portal access
- **Support** → support page access
- **Admin** → admin page access and support access

## Protected Routes

- `/dashboard` → any authenticated user
- `/support` → Support or Admin
- `/admin` → Admin only
- `/unauthorized` → shown when a user lacks access

## Microsoft Graph Integration
The app uses the delegated Microsoft Graph permission:

- `User.Read`

The `/me` endpoint is used to display profile information such as:

- Display Name
- Email
- Job Title
- Department
- Office Location

## What I Learned

This project helped me better understand:
- the difference between authentication and authorization
- how Microsoft Entra ID works in web applications
- App Registration vs Enterprise Application
- redirect URIs and application configuration
- role-based access control using app roles
- ID tokens vs access tokens
- Microsoft Graph delegated permissions
- the difference between development and production runtime behavior

## Demo

A local demo video of the project is included in my LinkedIn post / project showcase.

## Screenshots
Add screenshots here if available:

- Home page
- Dashboard
- Support page
- Admin page

## Setup Instructions

### 1. Clone the repo
bash
git clone <your-repo-url>
cd azure-entra-portal

### 2. Install dependencies
bash
npm install
### 3. Create `.env.local`
Create a `.env.local` file in the project root with:
env
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_TENANT_ID=your-tenant-id
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000/
### 4. Configure Microsoft Entra ID
- Create an App Registration
- Add redirect URI:
  - `http://localhost:3000/api/auth/callback/azure-ad`
- Create app roles:
  - Employee
  - Support
  - Admin
- Assign roles through the Enterprise Application
- Confirm Microsoft Graph delegated permission:
  - `User.Read`

### 5. Run locally
bash
npm run dev
Then open:
bash
http://localhost:3000/
