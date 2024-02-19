# CodeLensAI

CodeLensAI is an intelligent code review assistant powered by CodeLlama 7B model through Ollama. It provides instant, AI-powered code reviews to help developers write better code.

## 🌟 Features

- Instant AI code reviews using CodeLlama
- Modern, split-pane interface
- Real-time code editing
- Support for multiple programming languages
- Markdown rendering for review output

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express
- **AI**: Ollama with CodeLlama 7B
- **UI**: Tailwind CSS + CodeMirror
- **Others**: React Markdown, CORS

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Ollama installed locally

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/code-lens-ai.git
   cd code-lens-ai
   ```

2. **Install Dependencies**
   ```bash
   # Start Ollama service
   ollama serve

   # Pull CodeLlama model (in a new terminal)
   ollama pull codellama:7b
   ```

4. **Configure Environment**
   ```bash
   # Create .env in root directory
   echo "VITE_API_URL=http://localhost:3000" > .env
   ```

5. **Start Development Servers**
   ```bash
   # Start backend (in server directory)
   cd server
   npm run dev

   # Start frontend (in src directory)
   cd ../src
   npm run dev
   ```

## 💻 Usage

1. Navigate to `http://localhost:5173` in your browser
2. Write or paste code in the left editor panel
3. Click "Generate Review"
4. View AI-generated code review in the right panel

## 🔧 Project Structure

```
code-lens-ai/
├── server/
│   ├── index.js        # Express server setup
│   └── review.js       # Ollama integration
├── src/
│   ├── components/
│   │   ├── Editor.tsx  # Code editor component
│   │   └── Review.tsx  # Review display component
│   ├── App.tsx         # Main application
│   └── main.tsx        # Entry point
└── package.json
```

## 🚀 Deployment

1. **Frontend (Vercel)**
   - Connect GitHub repository
   - Configure build settings
   - Set environment variables
   - Deploy

2. **Backend (Your Choice)**
   - Deploy to a server with Ollama access
   - Update API URL in frontend
   - Configure CORS settings

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## 📝 API Endpoints

### Generate Code Review
- **URL**: `/api/v1/reviews`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "code": "// Your code here"
  }
  ```
- **Response**:
  ```json
  {
    "review": "AI-generated review content"
  }
  ```

## ⚙️ Configuration Options

### Environment Variables
- `VITE_API_URL`: Backend API URL
- `PORT`: Backend server port (default: 3000)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ollama team for the amazing AI model integration
- React and Vite communities
- All contributors and users of CodeLensAI Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../src
   npm install
   ```

3. **Setup Ollama**
   ```bash
   # For macOS
   brew install ollama

   #