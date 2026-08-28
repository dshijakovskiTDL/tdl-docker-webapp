# Multi-Container Web Application

This project is a simple multi-container web application consisting of a React front-end, a Node.js back-end, and a PostgreSQL database. Below are the instructions to set up and run the application without using Docker.

## Project Structure

```
/project-root
  /frontend
    package.json
    /src
      App.js
      index.js
  /backend
    package.json
    index.js
    init.sql
```

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL (v13 or later)

## Setup

### Step 1: Set Up the Database

1. Install PostgreSQL if not already installed.
2. Start the PostgreSQL server.
3. Create a new database:

   ```sh
   createdb mydatabase
   ```

4. Run the initialization script to create the table and insert initial data:

   ```sh
   psql -d mydatabase -f backend/init.sql
   ```

### Step 2: Set Up and Run the Back-end

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the required dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following content:

   ```
   DATABASE_URL=postgres://postgres:password@localhost:5432/mydatabase
   ```

   Make sure to replace `password` with your actual PostgreSQL password.

4. Start the back-end server:

   ```sh
   npm start
   ```

   The back-end server should now be running at `http://localhost:5000`.

### Step 3: Set Up and Run the Front-end

1. Navigate to the `frontend` directory:

   ```sh
   cd frontend
   ```

2. Install the required dependencies:

   ```sh
   npm install
   ```

3. Start the front-end development server:

   ```sh
   npm start
   ```

   The front-end server should now be running at `http://localhost:3000`.

### Step 4: Verify the Setup

1. Open your web browser and navigate to the front-end application (e.g., `http://localhost:3000`).
2. You should see a list of data fetched from the back-end API.

## Project Details

### Front-end

- **Framework**: React
- **Directory**: `/frontend`
- **Key Files**:
  - `src/App.js`: Main component that fetches data from the back-end.
  - `src/index.js`: Entry point of the React application.

### Back-end

- **Framework**: Node.js with Express
- **Directory**: `/backend`
- **Key Files**:
  - `index.js`: Main server file that defines API endpoints.
  - `init.sql`: SQL script to initialize the PostgreSQL database.

### Database

- **Type**: PostgreSQL
- **Initialization**: Run the `init.sql` script to create the table and insert initial data.

## Troubleshooting

- Ensure PostgreSQL server is running and accessible.
- Verify that the `DATABASE_URL` in the `.env` file is correct.
- Check that no other application is using the ports required by the front-end and back-end.

## License

This project is licensed under the MIT License.