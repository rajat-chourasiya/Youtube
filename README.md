# 📺 YouTube Clone
## 📷 Screenshots

| Home Page | 
|-----------|
| ![Screenshot 2025-05-30 014226](https://github.com/user-attachments/assets/b679785d-8ef0-4deb-8107-79552eb3c8e2)
| ![Screenshot 2025-05-30 014627](https://github.com/user-attachments/assets/f8e0910f-1297-4379-b7bb-3eabcdef1001)
  

A responsive YouTube-like video streaming platform built using **React**, **Vite**, and **Tailwind CSS**, with data fetched from the **YouTube API (via RapidAPI)**.

## 🚀 Features

- 🔍 Search for videos and channels (Text & Voice)
- 🎙️ **Voice Search** using Web Speech API
- 🎥 Watch YouTube videos with React Player
- 📑 View channel info, subscriber count, likes, views, and description
- 💡 Suggested videos sidebar
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 📁 Sidebar with navigation options
- 🌙 Dark/light styling compatible

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Video Player**: React Player
- **Icons**: React Icons
- **API**: RapidAPI - YouTube v3 API
- **Voice Recognition**: Web Speech API

## 🎙️ Voice Search

We’ve integrated voice search using the **Web Speech API**, allowing users to search YouTube videos by simply speaking.

### How it Works:

1. Click the 🎤 microphone icon in the search bar.
2. Speak your search query (e.g., “React tutorials”).
3. The query will be recognized and results fetched instantly.

> Note: Voice search works in supported browsers like **Chrome**.

## 📁 Project Structure

youtube-clone/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js


## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/youtube-clone.git

# Navigate into the project folder
cd youtube-clone

# Install dependencies
npm install

# Run the development server
npm run dev

📌 API Configuration
Create a .env file in the root and add your RapidAPI key:
VITE_RAPID_API_KEY=your_rapidapi_key
Ensure your fetchData function uses the key securely.

👨‍💻 Author
Your Name – @rajat-chourasiya

📄 License
This project is open-source and available under the MIT License.
