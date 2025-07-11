// src/data/projectData.js
import AnalyticsAI from "../assets/AnalyticsAI.png"; 
import VibeBoard from "../assets/viteboard.png"; 



const projectData = [
  {
    title: "VibeBoard",
    description: "VibeBoard is a full-stack, Reddit-style community platform where users can register, post content, and engage by upvoting or downvoting posts. Built with React, Node.js, Express, and MongoDB, the system features role-based authentication, protected routes, a clean and responsive UI (thanks to Tailwind CSS), and an admin dashboard for content moderation.",
    image: VibeBoard, // replace with actual image
    github: "https://github.com/Dhumra/VibeBoard.git",
    live: "https://vibe-board.vercel.app",
  },
  {
    title: "AnalyticAI",
    description: "This project aims to build an AI-powered consulting chatbot that provides strategic business insights to small businesses, startups, and entrepreneurs who may not have access to costly professional consultants. Leveraging Generative AI, it automates key analyses such as SWOT, PESTLE, TOWS, Porter’s Five Forces, and Business Model Canvas to support smarter decision-making. The system also includes a visual Strategy Plans Board to help users gather real-time business insights sourced from the web with actionable, data-driven recommendations — all designed to democratize access to high-quality business strategy tools.",
    image: AnalyticsAI,
    github: "https://github.com/Riddhimaan-Senapati/consulting-chatbot.git",
    // live: "#",
  },
];
export default projectData;


// Finnect is a full-stack personal finance web application that securely connects to a user’s bank account via Plaid, fetches real-time transaction data, and visualizes spending trends with interactive charts. It helps users track their expenses across categories and lays the foundation for predictive cash flow forecasting. Built with React, Express, PostgreSQL, and Chart.js, Finnect focuses on clean UX and functional insights over raw spreadsheets.