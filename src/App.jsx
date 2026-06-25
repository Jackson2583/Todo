import React, { useState } from "react";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import Resume from "./components/Resume"; 
import Explore from "./components/Explore"; 

function App() {
  const [currentView, setCurrentView] = useState("resume");

  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
      
      {currentView === "todo" && (
         <div className="todo-container" style={{ position: "relative" }}>
           {/* 修改了按鈕配色 */}
           <button 
             onClick={() => setCurrentView("resume")}
             style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                padding: "10px 20px",
                background: "#2c3e50", /* 履歷的深藍色 */
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "0.3s"
             }}
             onMouseOver={(e) => e.target.style.background = "#3498db"}
             onMouseOut={(e) => e.target.style.background = "#2c3e50"}
           >
             ⬅ 返回個人履歷
           </button>
           <TodoWrapper />
         </div>
      )}
      
      {currentView === "resume" && (
         <Resume setCurrentView={setCurrentView} />
      )}

      {currentView === "explore" && (
         <Explore setCurrentView={setCurrentView} />
      )}

    </div>
  );
}

export default App;