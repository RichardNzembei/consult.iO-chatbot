# Farmer Consult Bot 🌾🤖  

The **Farmer Consult Bot** is an AI-powered chatbot designed to assist farmers with their queries, providing valuable information and guidance. The chatbot leverages Nuxt.js for a robust and responsive user interface, Docker for containerization, and Dialogflow for natural language understanding.

## 🚀 Features

- **Farm Advisory**: Provides tailored advice to farmers on crop care, pest control, and farming best practices.
- **Interactive Chat**: User-friendly conversational interface powered by Dialogflow.
- **Responsive Design**: Built using Nuxt UI for an optimized and seamless experience across devices.
- **Scalable Architecture**: Dockerized for easy deployment and scaling.
- **Multilingual Support**: Configurable for different languages to support a global audience.

## 🛠️ Built With

- **[Nuxt.js](https://nuxt.com/)**: Framework for building Vue.js applications with enhanced performance and features.
- **[Nuxt UI](https://nuxt.dev/ui)**: Components and utilities for crafting responsive, modern user interfaces.
- **[Dialogflow](https://dialogflow.cloud.google.com/)**: A natural language understanding platform for creating chatbots and conversational applications.
- **[Docker](https://www.docker.com/)**: Ensures portability and consistency across environments by containerizing the application.

## 🖥️ Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Docker](https://www.docker.com/) (for containerization)
- [Git](https://git-scm.com/)

## 📦 Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/RichardNzembei/consult.iO-chatbot.git
   cd consult.iO-chatbot

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Access the chatbot at:
   http://localhost:3000



## 🐳 Running with Docker
1. Build the Docker image:
   ```bash
   docker build -t farmer-consult-bot .

2. Run the Docker container:
   ```bash
    run -d -p 3000:3000 farmer-consult-bot

3. Visit the application in your browser at:
   http://localhost:3000

## 🧩 Dialogflow Integration
This chatbot uses Dialogflow for natural language understanding:

Set up a Dialogflow agent and configure intents based on farmer queries.
Generate a service account key for the Dialogflow project.
Add the key to your project by creating a .env file with the following:
 ```javascript
    DIALOGFLOW_PROJECT_ID=your-project-id
    GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account-key.json
   ```
Ensure the service account key is mounted in your Docker container if you're using Docker.

## 🌐 Deployment
The chatbot is designed to be deployed on services like Vercel for the frontend and Google Cloud Run or Render for backend APIs.

## 📖 Usage
Users can ask farming-related questions, such as:

"How do I deal with pests on my crops?"
"What is the best fertilizer for maize?"
"How do I start organic farming?"
The bot responds with tailored advice or redirects the user to relevant resources.

## 🤝 Contributions
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit them:
bash
Copy code
git commit -m "Add your message here"
Push to your branch:
bash
Copy code
git push origin feature/your-feature-name
Create a pull request.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 💡 Acknowledgments
Dialogflow for the conversational AI capabilities.
Nuxt.js and Nuxt UI for the elegant frontend experience.
Docker for simplifying deployment and scaling.
csharp
Copy code

You can copy this content into a `README.md` file and save it at the root of your project repository.