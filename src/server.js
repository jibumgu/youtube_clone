import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send("I still love you.");
}

const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.get("/", handleHome)
app.get("/login", handleLogin)

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening) // 바닐라 JS의 click event랑 비슷하다.

// GET은 http method이다.
// GET은 페이지를 가져오란 뜻이다.
// 유저가 뭔가를 요청하거나, 보내거나, 네게 무슨 행동을 하면, 그게 request다.
