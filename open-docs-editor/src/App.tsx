import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Open Docs Editor</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="내용을 입력하세요..."
        rows={10}
        cols={50}
        style={{
          width: "100%",
          fontSize: "16px",
          padding: "10px",
        }}
      />
    </div>
  );
}

export default App;
