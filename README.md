# Auction Web App Deployment Guide

This guide will walk you through the process of deploying the Auction Web App, which is built using the PERN (PostgreSQL, Express, React, Node.js) stack.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Database](#database)
3. [Backend Deployment](#backend-deployment)
4. [Frontend Deployment](#frontend-deployment)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Database
Database SQL that is used in this project is given in this repository. You can either manually add the tables in PostgreSQL inside Railway, or you can use Railway CLI to import the database into Railway. 

## Backend Deployment

### 1. Clone the Repository

```bash
git clone <repository-url>
cd server
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create a .env file in the server directory with the following variables:
```env
DB_HOST=your-database-host
DB_PORT=your-database-port
DB_NAME=your-database-name
DB_USER=your-database-username
DB_PASSWORD=your-database-password
SECRET=your-secret-key-for-jwt
```
### 4. Run Migrations
```bash
npm run migrate
```

### 5. Start the Backend Server
```bash
npm start
#or
npm run dev
```
## Frontend Deployment

### 1. Navigate to the Client Directory
```bash
cd ../client
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Setup Firebase

To integrate Firebase with this project, follow these steps:

1. Create a Firebase project:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click "Add project" and follow the setup wizard.

2. Configure Firebase for your web app:
   - In the Firebase project settings, navigate to your web app settings.
   - Obtain the Firebase configuration object.

3. Install Firebase SDK:
   - If you already did ```npm install``` you can skip the installation. If not, in your project's frontend directory, install the Firebase SDK:
     ```bash
     npm install firebase
     # or
     yarn add firebase
     ```

4. Initialize Firebase in your web app:
   - Initialization is already done as you only need to provide the environment variables.

### 3. Configure Environment Variables
Create a .env file in the client directory with the following variables:
```env
REACT_APP_BASE_URL = your-backend-api-url
REACT_APP_API_KEY = firebase-api-key
REACT_APP_AUTH_DOMAIN = firebase-auth-domain
REACT_APP_PROJECT_ID = firebase-project-id
REACT_APP_STORAGE_BUCKET = firebase-storage-bucket
REACT_APP_MESSAGING_SENDER_ID = firebase-messaging-sender-id
REACT_APP_APP_ID = firebase-app-id
REACT_APP_MEASUREMENT_ID = firebase-measurement-id
```
### 4. Start the React App
```bash
npm start
```
