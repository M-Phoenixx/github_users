import React from 'react'
import './App.css'

const App = () => {
  return (
  <> {/* search bar */}
    <div className="container">
    <div className="navbar">
     <div className="title">
     <h1>Github user's</h1>
     </div>
     <div className="searchbar">
     <input type="text" />
     <button>Search</button>
     </div>
    </div>
   
    {/* user details card */}
 
    <div className="detail-card">
     <div className="uper-part">
      uper part
     </div>
     <div className="lower-part">
     lower part
     </div>
    </div>

    </div>
    </>
  )
}

export default App