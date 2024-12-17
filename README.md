# Dockerized Node.js Web Server with CRUD Operations

This project is a simple Node.js web server that performs CRUD (Create, Read, Update, Delete) operations and stores data in a JSON array. It is containerized using Docker and includes a CI/CD pipeline using GitHub Actions.

## Features
- **Create**: Add new items to the list.
- **Read**: Get all items or get an item by its ID.
- **Update**: Update an existing item by its ID.
- **Delete**: Remove an item by its ID.
- **CI/CD**: Automate testing and deployment using GitHub Actions.

## Tech Stack
- **Node.js**: Backend framework for building the API.
- **Express.js**: Web framework for Node.js.
- **Docker**: Containerization of the Node.js application.
- **Docker Compose**: Multi-container orchestration.
- **GitHub Actions**: CI/CD pipeline for automated builds and testing.

## Prerequisites
- **Node.js** (installed on your machine)
- **Docker** (for containerizing the application)
- **Docker Compose** (for running multi-container setups)
- **Postman** (for testing API requests) or **curl**

## Directory Structure
The project follows this structure:

```plaintext
docker_cicd/
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── .dockerignore       # Files to ignore in Docker builds
├── .gitignore          # Files to ignore in Git
├── app.js              # Main server file
├── package.json        # Project metadata and dependencies
├── .github/            # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml      # CI/CD pipeline configuration
└── README.md           # Documentation
```

## API Endpoints
Below are the available API endpoints:

| Method     | Endpoint         | Description                | Example Request         |
|------------|------------------|----------------------------|-------------------------|
| **POST**   | `/api/items`     | Create a new item          | `{"name": "Item 1"}` |
| **GET**    | `/api/items`     | Get all items              | -                       |
| **GET**    | `/api/items/:id` | Get a single item by ID    | `/api/items/1`          |
| **PUT**    | `/api/items/:id` | Update an item by ID       | `{"name": "Updated"}` |
| **DELETE** | `/api/items/:id` | Delete an item by ID       | `/api/items/1`          |

## Getting Started

### Installation

#### Without Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/JaiRajGunnu/docker_cicd
   cd docker_cicd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Access the API:
   - Default URL: `http://localhost:3000`

#### With Docker
1. Clone the repository:
   ```bash
   git clone https://github.com/JaiRajGunnu/docker_cicd
   cd docker_cicd
   ```

2. Build the Docker image:
   ```bash
   docker build -t docker_cicd .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 docker_cicd
   ```

4. Access the API:
   - Default URL: `http://localhost:3000`

#### With Docker Compose
1. Clone the repository:
   ```bash
   git clone https://github.com/JaiRajGunnu/docker_cicd
   cd docker_cicd
   ```

2. Run the application using Docker Compose:
   ```bash
   docker-compose up
   ```

3. Access the API:
   - Default URL: `http://localhost:3000`

## Accessing the Docker Container's IP Address
To send a request to your Docker container's IP address, follow these steps:

### 1. Find the Container's IP Address
You can find the container's IP address by running the following command:

```bash
docker inspect <container_name_or_id> | findstr "IPAddress"
```

For example, if your container is named `my_container`, run:

```bash
docker inspect my_container | findstr "IPAddress"
```

This will return the container's internal IP address, like this:

```json
"IPAddress": "172.17.0.2"
```

### 2. Send a Request to the Container's IP Address
Once you have the IP address, you can send a request to the container from your host machine (or from Postman) using the container's IP and the port you mapped. For example:

```http
http://172.17.0.2:3000
```

If you have a RESTful API running on port `3000` inside the container, you can send a request to that IP address.

### 3. Using Postman to Send a Request
In Postman, use the following URL format to send requests to your container:

```http
http://<container_ip>:3000
```

Replace `<container_ip>` with the IP address you got from the previous step.

### 4. Note About Port Mapping
Even though you're accessing the container via its internal IP, if you've mapped the port (like `3000:3000`), you can also access it via `localhost:3000` or `127.0.0.1:3000` from your host machine.

## CI/CD Pipeline
This project uses **GitHub Actions** for Continuous Integration and Deployment.

### Workflow File: `.github/workflows/ci.yml`
The workflow includes the following steps:
1. **Install dependencies**
2. **Run tests** (Add your test scripts to `package.json`)
3. **Build the Docker image**
4. **Push to Docker Hub** (optional)

### Trigger
The CI/CD pipeline is triggered on **push** or **pull requests** to the `main` branch.

## Testing the API
You can test the API using **Postman** or **curl**.

### Example Requests

#### Create an Item
```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"name": "New Item"}' http://localhost:3000/api/items
```

#### Get All Items
```bash
curl http://localhost:3000/api/items
```

#### Update an Item
```bash
curl -X PUT -H "Content-Type: application/json" \
-d '{"name": "Updated Item"}' http://localhost:3000/api/items/1
```

#### Delete an Item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## Future Enhancements
- Add database support (e.g., MongoDB, PostgreSQL).
- Implement input validation for API requests.
- Add unit tests using **Jest** or another testing framework.
- Deploy the application to a cloud provider (e.g., AWS, Heroku).



---


Thank you! 😊
