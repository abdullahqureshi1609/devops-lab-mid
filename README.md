# Cloud DevOps Pipeline: Task Manager App ☁️🚀

This repository demonstrates a complete Cloud Computing Deployment Pipeline, taking a full-stack containerized application from local development to cloud hosting using modern DevOps tools. 

This project was developed as part of the **CSC418: DevOps for Cloud Computing** course at COMSATS University Islamabad, Lahore Campus.

## 📋 Project Links
* **Live Azure Deployment:** [Insert your Azure Public IP Link here, e.g., http://20.114.x.x]
* **Docker Hub Image:** [Insert your Docker Hub Image Link here]
* **GitHub Repository:** [Insert your GitHub Repo Link here]

## 🛠️ Technology Stack
* **Application:** Node.js (Backend/Frontend), Database Integration
* **Containerization:** Docker, Docker Compose
* **Container Registry:** Docker Hub
* **Cloud Orchestration:** Azure Kubernetes Service (AKS)
* **Version Control:** Git & GitHub

## 🚀 DevOps Pipeline Architecture

### Phase 1: Local Development & Dockerization
The application was built and tested locally. A `Dockerfile` was created to package the application with its environment and dependencies. It was successfully run and tested using Docker Desktop.

### Phase 2: Container Registry Integration
The local Docker image was tagged and pushed to a public Docker Hub repository, making it available for remote cloud deployment.

### Phase 3: Cloud Deployment (Azure Kubernetes Service)
An AKS cluster was provisioned in the Azure Portal (Dev/Test configuration to optimize resource usage). A Kubernetes declarative YAML manifest (`Deployment` and `LoadBalancer Service`) was written and applied to pull the image from Docker Hub and expose the application securely to the internet via a Public IP address.


Developed by Abdullah Qureshi for Lab Midterm FA23.

