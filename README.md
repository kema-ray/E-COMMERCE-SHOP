# Pike Store E-commerce Application

## Overview
Pike Store is a modern, responsive e-commerce web application built with Vue 3, Pinia for state management, and Tailwind CSS for styling.

## Features
- OAuth 2.0 Authentication
- Responsive mobile-first design
- User logout functionality
- Promo banner display

## Key Components
- Authentication store
- Responsive navigation
- Product listing
- User profile dropdown
- Mobile menu toggle

## Tech Stack
- Vue 3
- Pinia (State Management)
- Vue Router
- Tailwind CSS
- OAuth Authentication

## Prerequisites
- Node.js (v16+)
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/kema-ray/E-COMMERCE-SHOP.git
cd E-COMMERCE-SHOP
```

### 2. Install Dependencies
```bash
npm install
```

## Environment Configuration

### .env File Setup
Create a `.env` file in the project root with the following variables:

```
VITE_CLIENT_ID=[YOUR_CLIENT_ID]
VITE_CLIENT_SECRET=[YOUR_CLIENT_SECRET]
VITE_REDIRECT_URI=http://localhost:5173/auth/redirect
VITE_AUTH_URL=[YOUR_AUTHORIZATION_ENDPOINT]
VITE_TOKEN_URL=[YOUR_TOKEN_ENDPOINT]
VITE_USER_INFO_URL=[YOUR_USER_INFO_ENDPOINT]
```

### 4. Run Development Server
```bash
npm run dev
```

## Project Structure
```
src/
├── assets/
├── components/
├── services/
├── store/
├── views/
├── router/
└── App.vue
└── main.js
```

## Authentication Flow
1. OAuth login initiated via `initiateOAuthFlow()`
2. Callback handled in authentication callback component
3. User info and access token stored in Pinia store and localStorage

## State Management
Uses Pinia store (`authStore`) to manage:
- User authentication state
- User profile information
- Access token management

## Responsive Design
- Mobile-friendly navigation
- Adaptive layout with Tailwind CSS
- Responsive grid for product display
