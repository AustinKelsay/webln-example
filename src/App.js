import React from "react"

 const App = () => {
    async function enable() {
        if (typeof window.webln === "undefined") {
          return alert("No WebLN available.");
        }
        try {
          await window.webln.enable();
          celebrate();
        } catch (error) {
          alert("User denied permission or cancelled.");
        }
      }
     return(
         <div>
             <h1>Hello world</h1>
             <button onClick={() => enable()}>Connect</button>
         </div>
     )
 }

export default App; 