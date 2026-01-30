# Poke Backend – NestJS + Prisma + JWT

Backend API for user management and Pokémon listing, built as a technical test with focus on **clean architecture, security, and real-world practices**.

This project was developed under time constraints, prioritizing correctness, clarity, and maintainability over over-engineering.

---

## Tech Stack

- **NestJS** – Node.js framework
- **TypeScript**
- **Prisma ORM**
- **MySQL** (Railway)
- **JWT Authentication**
- **Role-based Access Control**
- **Axios** (external API consumption)

---

## Authentication & Security

- JWT-based authentication
- Password hashing with `bcrypt`
- Protected routes using NestJS Guards
- Role-based authorization (`ADMIN` / `USER`)
- Session expiration handled via JWT
- Secure access to sensitive endpoints

---

## User Module (CRUD)

### Features
- Create users (register)
- List users (ADMIN only)
- Update user data
- Update password (securely hashed)
- Delete users (ADMIN only)

### Role Management
- `USER` role assigned by default
- `ADMIN` role **cannot be assigned from frontend**
- Admin user is created via controlled seed endpoint or database

---

## Pokémon Module

- Consumes the public **PokéAPI**
- Paginated results (`limit` / `offset`)
- Incremental loading support
- Graceful error handling for external API failures
- Protected via JWT

---

## Testing

Basic unit tests are included to validate core functionality:
- AuthService unit tests (mocked Prisma)
- Test structure prepared for future expansion

Testing focuses on critical paths rather than artificial coverage numbers.

---

## API Endpoints (Overview)

### Auth
POST /auth/register
POST /auth/login
GET /auth/me
POST /auth/seed-admin (test only)

### Users (ADMIN)
GET /users
PATCH /users/:id
DELETE /users/:id

### Pokémon
GET /pokemon?limit=20&offset=0

### Only agree for test
POST /auth/seed-admin
Credentials:
email: admin@test.com
password: Admin123*

## Local Setup

### Install dependencies
  bash
  npm install
  2️⃣ Environment variables
  Create a .env file:

  DATABASE_URL=
  JWT_SECRET=
  PORT=3001
  3️⃣ Prisma
  npx prisma generate
  npx prisma migrate dev
  4️⃣ Run locally
  npm run start:dev
  🚀 Deployment
  Backend deployed on Railway

  MySQL managed database

  Environment-based configuration

  Uses internal database URL in production

## Design Decisions
JWT kept lightweight (identity only)

User profile data fetched from database when needed

Roles enforced at backend level

Clear separation of concerns

No hidden magic or unsafe shortcuts

## Final Notes
This backend reflects real-world development:

Problems were identified and solved

Security concerns were addressed explicitly

Trade-offs were made consciously

If something exists here, it exists for a reason.