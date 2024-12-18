const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// 정적 파일 제공을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname)))

// 루트 경로로 접속시 HTML 파일 제공
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
