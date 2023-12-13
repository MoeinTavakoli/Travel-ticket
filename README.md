# Travel Ticket Reservation System

## Overview

This project is an Airplane and train Reservation System developed using Node.js, Express, and PostgreSQL.

It allows users to reserve airplane,train seats for travel.

The application is dockerized, and you can easily set it up using Docker Compose.

## Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. Clone the repository and change into the project directory:

```bash
git clone https://github.com/MoeinTavakoli/Travel-ticket.git
cd Travel-ticket
```

2. Copy the **.env.example** to **.env** in the root of the project with the following environment variables:

`cp .env.example .env`

Edit .env and Modify the values according to your preferences.

`nano .env`

```
# PostgreSQL Database Configuration
DATABASE_HOST=your_database_host  # Specify the host address (e.g., domain or IP) where your PostgreSQL database is running.
DATABASE_USER=your_database_user  # User with access to the PostgreSQL database.
DATABASE_NAME=your_database_name  # The name of your PostgreSQL database.
DATABASE_PASSWORD=your_database_password  # Password for the PostgreSQL user.
DATABASE_PORT=your_postgres_port  # Port on which PostgreSQL is running (default is usually 5432).

# Node.js Server Configuration
SERVER_PORT=your_server_port  # Port on which the Node.js server will listen for incoming requests.

# JSON Web Token (JWT) Configuration
JWT_SECRET=your_jwt_secret  # Secret key used to generate and verify JSON Web Tokens for authentication.
```

3. Run the application using Docker Compose:

```bash
docker-compose up
```
This will build and start the Node.js application along with the PostgreSQL database.

4. Access the application in your browser at http://localhost:3000.