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
      <img src="data:image/jpeg;base64,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" alt="net slow" />
       <div className="name-follow">
       <h1>  Mahesh Chauhan</h1>
       <div className="user-detail">
       <h1 className="project">
       <p>150</p> Project
       </h1>
       <h1 className="project">
       <p>150</p> follower
       </h1>
       <h1 className="project">
       <p>150</p> following
       </h1>
       </div>
        <div className="work">
        <h1> 👨🏻 : Front-end dev </h1>
         <h1> 🏢 : Google </h1>
        </div>
       </div>
     </div>
     <div className="lower-part">
       <button> Visite Profile </button>
     </div>
    </div>

    </div>
    </>
  )
}

export default App