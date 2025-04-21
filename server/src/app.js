import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

// cors 설정
app.use(cors());

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
