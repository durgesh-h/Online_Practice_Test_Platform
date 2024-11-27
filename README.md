# 🔸Quizify: Online Practice Test Platform🔸

- "Quizify" intelligently adapts the difficulty of the questions based on the user's previous answers, ensuring a personalized and engaging experience. 
- After the quiz is completed, the application provides detailed feedback with suggestions for improvement. It calculates the user's score, compares it against the total number of questions, and offers tailored suggestions based on their performance, helping users identify areas that need more focus for better learning outcomes.
<p align="center">
 <img src="https://github.com/user-attachments/assets/8de3e79c-b0a0-4183-a090-b208490856dc" width="500" height="150">
</p>
<p align="center">
 <img src="https://github.com/user-attachments/assets/84293f86-3973-442b-b69c-fde8351cdf4d" >
</p>


# 🔺About the Project
This project is a dynamic, interactive, and adaptive quiz application designed to test and enhance users' knowledge across various topics. It leverages a structured backend and a responsive frontend to deliver a seamless quiz experience with real-time evaluation, adaptive question delivery, and detailed results analysis.
# 🔺 Live Demo
- https://quizify-edu.vercel.app <br>

# 🔺Features and Functionalities
## Roles in the System

### 1.Dynamic Question Fetching

- Questions are fetched dynamically from the backend.
- Users never see the same question twice in a single session.
- Adaptive learning: Questions are filtered based on previously answered questions.

### 2.Server-Side Answer Validation

- Ensures the integrity of the quiz by validating answers server-side.
- Prevents manipulation of answers in client-side code.
  
### 3.Topics and Difficulty Levels

- Questions are categorized into topics such as Arithmetic, Algebra, Geometry, Trigonometry, Statistics, and Probability.
- Each question has an associated difficulty level, promoting balanced learning.

### 4.User Progress Evaluation

- Tracks user performance and calculates a real-time score.
- Provides personalized feedback and suggestions for improvement based on the user’s performance.

### 5.Responsive Design

- Frontend is fully responsive and optimized for all devices (desktop, tablet, mobile).
### 6.Error Handling
- Handles scenarios such as:
  - No more questions available.
  - Missing or incorrect data in requests.
  - Connection issues between frontend and backend.

# 🔺Endpoints
### 1. GET /quiz/questions
 - Fetches all questions without revealing the correct answers.
### 2. POST /quiz/adaptive-question
 - Returns the next adaptive question, excluding previously answered questions.
### 3. POST /quiz/validate-answer
 - Validates the user's answer for a specific question.
### 4. POST /quiz/evaluate-results
 - Evaluates the final result and provides personalized improvement suggesti

# 🔺Skills Demonstrated
 - Building a scalable and modular backend using Node.js and Express.js.
 - Designing a responsive and user-friendly frontend with React.js.
 - Managing client-server communication with RESTful APIs and Axios.
 - Implementing adaptive learning techniques to enhance user engagement.
 - Handling real-time validations and providing detailed feedback.

# 🔺What technologies were used? 
 ## Frontend:
  - React: For building a dynamic and efficient user interface.
  - React DOM: To render React components in the DOM.
  - React Router DOM: For managing client-side routing seamlessly.
  - Styling:
    - Tailwind CSS: Utility-first CSS framework for modern and responsive styling.
    - Framer Motion: For smooth and attractive animations.
 ## Backend:
  - Node.js: For handling server-side logic and APIs.
  - Express.js: For creating RESTful APIs.
  - Database: MongoDB
## Utilities:
  - Axios: For making HTTP requests to the backend.
  - dotenv: For managing environment variables securely.
  - env: A lightweight module to parse .env files.

This is a [Vite.js](https://vitejs.dev) project bootstrapped with [`$create vite@latest`](https://vitejs.dev/guide/) which is a React.js tool for building Web Applications.

# 🔺Getting Started

First, Fork this repo:
Head over to the backend directory to run the server.
```bash
cd backend
```
Then, Install NPM:
```bash
npm install
```
Then, start the server:
```bash
nodemon index.js
```

On [http://localhost:5000](http://localhost:5000) your server will be started.

Now, open new terminal
Then, head to the frontend directory for the Frontend.
```bash
cd frontend
```

Then, Install NPM:
```bash
npm install
```
Then, start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.


You can start editing the page by modifying `src/main.jsx`. The page auto-updates as you edit the file.
</br>
### To Login into the Application use the above Rolewise Test Email-Password.

## 📸 ScreenShots
![image](https://github.com/user-attachments/assets/ebd047f6-c4b0-4fb0-b005-82cc5ca1a4d0)
![image](https://github.com/user-attachments/assets/42098756-9899-430a-b08e-8f4e4ee501fc)
![image](https://github.com/user-attachments/assets/5973bee6-f17e-4bd5-be0c-fc17674f6ba8)
![image](https://github.com/user-attachments/assets/bf872557-836a-4740-b24d-f29e87dc897d)
![image](https://github.com/user-attachments/assets/56e778e1-df33-4dec-a61f-305c3c02524c)
<p align="center">
 <img src="https://github.com/user-attachments/assets/dd5d56b6-ce60-4f16-ad85-b8b1ee92e9a0" width="500" height="auto">
</p>
<p align="center">
 <img src="https://github.com/user-attachments/assets/f5f888fb-f78a-4524-9722-e1b53803ba9e" width="500" height="auto">
</p>
<p align="center">
 <img src="https://github.com/user-attachments/assets/aae933f3-6c14-4132-b599-2bf5df510a76" width="500" height="auto">
</p>









