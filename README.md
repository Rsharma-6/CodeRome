# 💻 CodeRome — Real-Time Collaborative Code Editor

**CodeRome** is a real-time collaborative coding platform built with **React**, **Node.js**, and **Socket.IO**.  
It allows multiple users to join a shared coding room, write code together, run it, and see synchronized outputs instantly — all in the browser.

---

## 🚀 Features

- ⚡ **Real-time collaboration:** All users in a room can edit code simultaneously and see changes instantly.  
- 🔄 **Live code & output sync:** Both **code** and **compiler output** are synchronized across all users in the same room — everyone sees the same result after a compilation.  
- 🔔 **User join/leave notifications:** When a user joins or leaves the room, all participants get instant on-screen notifications.  
- 🆔 **Unique Room ID (UUID):** Each room is created with a unique **UUID**, ensuring every coding session is distinct and securely identified.  
- 💬 **Room-based sessions:** Users can join existing rooms or create new ones for separate coding sessions.  
- 🧑‍💻 **Multi-language support:** Run code in various languages using the **JDoodle API**
- 🪶 **Modern and clean UI:** Built with React and Bootstrap for a smooth, dark-themed experience.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, Bootstrap |
| **Backend** | Node.js, Express.js |
| **Realtime** | Socket.IO |
| **Compiler** | JDoodle API  |
| **Code Editor** | CodeMirror Editor |
| **Build Tool** | Vite |
| **Version Control** | Git + GitHub |

---
## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/CodeRome.git
cd CodeRome
```

### 2️. Install dependencies 
# **Client**
```bash
cd client
npm install
```

# **Server**
```bash
cd ../server
npm install
```

### 3️. Configure environment variables

Create a .env file inside the server directory and add the following:

```bash
PORT=5000
JDoodle_ClientId=your_client_id
JDoodle_ClientSecret=your_client_secret
```

## 4️. Start the servers

Open two terminals and run:

# 🧩 Terminal 1 — Backend
```bash
cd server
npm start
```
# 💻 Terminal 2 — Frontend
```bash
cd client
npm run dev
```

## Then open your browser and visit:
👉 http://localhost:5173

