import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.end();
}

const handleLogin = (req, res) => {
    return res.send({ message: "Login here."});
}

app.get("/", handleHome)
app.get("/login", handleLogin)

const handleListening = () => console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening) // 바닐라 JS의 click event랑 비슷하다.

// GET은 http method이다.
// GET은 페이지를 가져오란 뜻이다.
// 유저가 뭔가를 요청하거나, 보내거나, 네게 무슨 행동을 하면, 그게 request다.
// Request : req 객체는 HTTP request를 나타내며 요청 query string, parameters, body, HTTP headers 등에 대한 속성을 가지고 있습니다.
// Response : res 객체는 Express 앱이 HTTP request를 받을 때 보내는 HTTP response를 나타냅니다.