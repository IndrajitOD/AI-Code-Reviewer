# ✦ AI Code Reviewer

> An intelligent, AI-powered code review tool that analyzes your code instantly for bugs, security vulnerabilities, performance issues, and best practices — powered by **Groq** and **Meta's Llama 3.3 70B** model.

🌐 **Live Demo:** [https://ai-code-reviewer-api-5h5s.onrender.com](https://ai-code-reviewer-api-5h5s.onrender.com)  
👨‍💻 **Author:** [Indrajit Bhowmick](https://github.com/IndrajitOD)

---

## 📸 Overview

AI Code Reviewer is a full-stack web application that allows developers to paste their code and receive a detailed, expert-level review within seconds. The review covers code quality, performance, security, scalability, best practices, and documentation — all formatted in clear, structured Markdown.

The app supports **8 programming languages** and enforces **language mismatch detection**: if you write Python code but select JavaScript, the AI will immediately flag the error instead of giving a meaningless review.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI-Powered Reviews** | Uses Meta's Llama 3.3 70B model via Groq's ultra-fast inference engine |
| ⚡ **Lightning Fast** | Groq's LPU hardware delivers responses in milliseconds |
| 🌐 **Multi-Language Support** | JavaScript, Python, Java, C++, C#, Go, Rust, PHP |
| 🔍 **Language Mismatch Detection** | AI detects and flags if code doesn't match the selected language |
| 📝 **Syntax Highlighting** | Live Prism.js syntax highlighting that adapts to the selected language |
| 📱 **Fully Responsive** | Works seamlessly on mobile, tablet, and desktop |
| 🎨 **Premium UI** | Soft pastel theme with glassmorphism, smooth animations, and micro-interactions |
| 🔒 **Privacy First** | Code is never stored or used for training |
| 🏠 **Multi-Page App** | Welcome screen, main editor, and About page with smooth navigation |

---

## 🧪 What the AI Reviews

When you submit code, the AI evaluates it across **8 dimensions**:

- **Code Quality** — Is it clean, readable, and maintainable?
- **Best Practices** — Does it follow industry standards?
- **Performance** — Are there bottlenecks or inefficient patterns?
- **Security** — Are there vulnerabilities (e.g., XSS, injection, CSRF)?
- **Scalability** — Can this code grow with the system?
- **DRY / SOLID** — Is logic properly separated and non-repetitive?
- **Test Coverage** — Are edge cases and error paths handled?
- **Documentation** — Are comments and function names self-explanatory?

### Review Format

```
❌  What's wrong and WHY it's a problem
✅  Corrected or improved version of the code
💡  Key improvements and what the developer should learn
```

---

## 🗂️ Project Structure

```
AI Code Reviewer/
├── backend/
│   ├── src/
│   │   ├── app.js                     # Express app setup, CORS, routes
│   │   ├── controllers/
│   │   │   └── analysis.controller.js # Request handler, extracts code + language
│   │   ├── routes/
│   │   │   └── analysis.routes.js     # POST /review/analyze route
│   │   └── services/
│   │       └── codeAnalyzer.js        # Groq API integration + system prompt
│   ├── .env                           # API keys (NOT committed to Git)
│   ├── package.json
│   └── server.js                      # Entry point, listens on PORT
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx              # About page component
│   │   │   ├── BottomNav.jsx          # Mobile bottom navigation
│   │   │   ├── CodeEditorCard.jsx     # Code editor + language selector + submit button
│   │   │   ├── Header.jsx             # Top header bar
│   │   │   ├── MobileTabSwitcher.jsx  # Mobile Editor/Review tab toggle
│   │   │   ├── ReviewCard.jsx         # AI review output with Markdown rendering
│   │   │   ├── Sidebar.jsx            # Desktop left sidebar navigation
│   │   │   └── Welcome.jsx            # Full-screen landing page
│   │   ├── hooks/
│   │   │   └── useCodeReview.js       # API calls, state management (code, language, review)
│   │   ├── App.jsx                    # Main layout orchestrator + routing
│   │   ├── index.css                  # Minimal global CSS (Prism tokens, scrollbars)
│   │   └── main.jsx                   # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 7** | Build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **react-simple-code-editor** | In-browser code editor component |
| **Prism.js** | Syntax highlighting for 8 languages |
| **react-markdown** | Renders AI response as formatted Markdown |
| **rehype-highlight** | Syntax highlighting inside Markdown code blocks |
| **axios** | HTTP requests to backend |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express 5** | Web server framework |
| **Groq SDK** | Interface to Groq's inference API |
| **Llama 3.3 70B** | The AI model performing the code review |
| **dotenv** | Environment variable management |
| **CORS** | Cross-origin request support |

### Hosting
| Service | What's deployed |
|---|---|
| **Render Web Service** | Node.js backend API |
| **Render Static Site** | React frontend |
| **GitHub** | Source code repository |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js** v18+
- A **Groq API key** — get one free at [console.groq.com](https://console.groq.com)

### 1. Clone the repository
```bash
git clone https://github.com/IndrajitOD/AI-Code-Reviewer.git
cd AI-Code-Reviewer
```

### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:
```env
GROQ_API_KEY=your_groq_api_key_here
PORT=4000
```

Start the backend server:
```bash
npm run dev
```
The API will be running at `http://localhost:4000`

### 3. Set up the Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
The app will open at `http://localhost:5173`

---

## 🌐 API Reference

### `GET /`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "AI Code Reviewer API is running."
}
```

### `POST /review/analyze`
Submit code for AI review.

**Request Body:**
```json
{
  "code": "function sum(a, b) { return a + b }",
  "language": "javascript"
}
```

**Supported `language` values:**
`javascript`, `python`, `java`, `cpp`, `csharp`, `go`, `rust`, `php`

**Response:**
Plain text Markdown string containing the full code review.

**Error Responses:**
- `400` — No code provided
- `429` — Groq rate limit reached

---

## ⚙️ Deployment (Render)

### Backend — Web Service
| Setting | Value |
|---|---|
| Root Directory | `backend` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Environment Variable | `GROQ_API_KEY=your_key` |

### Frontend — Static Site
| Setting | Value |
|---|---|
| Root Directory | `frontend` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Environment Variable | `VITE_API_URL=https://your-backend.onrender.com` |

> **Note:** On Render's free tier, the backend sleeps after 15 minutes of inactivity. The first request may take ~30 seconds as the server wakes up.

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
```env
GROQ_API_KEY=your_groq_api_key
PORT=4000
```

### Frontend (`frontend/.env`)  
Only needed for production/deployment:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|---|---|
| **Mobile** (`< md`) | Single panel with tab switcher (Editor / Review) + Bottom navigation |
| **Tablet** (`md`) | Side-by-side Editor and Review panels |
| **Desktop** (`lg+`) | Left sidebar + side-by-side panels |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 About the Author

**Indrajit Bhowmick**  
GitHub: [github.com/IndrajitOD](https://github.com/IndrajitOD)

---

<div align="center">
  <p>Built with ❤️ and ✦ AI</p>
</div>
