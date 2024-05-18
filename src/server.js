import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening) // 바닐라 JS의 click event랑 비슷하다.

