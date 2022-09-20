import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

   const [input, setinput] = useState('')
   const [data, setdata] = useState('')
   
 const inputvalue = (e) =>{
  setinput(e.target.value);
 }

 const submit = (e) =>{
 e.preventDefault();
 fetch('https://api.github.com/users/' + input)
 .then(response => response.json())
 .then(info => {
   console.log(info);
   setdata(info);
 });
  setinput('');
 }


  return (
  <> {/* search bar */}
    <div className="container">
    <div className="navbar">
     <div className="title">
     <h1>Github user's</h1>
     </div>
     <div className="searchbar">
     <input value = {input} onChange = {inputvalue} type="text" />
     <button disabled ={!input} onClick = {submit} >Search</button>
     </div>
    </div>
   
    {/* user details card */}
     { data && true ?
    <div className="detail-card">
     <div className="uper-part">
      <img src={data.avatar_url} alt="net slow" />
       <div className="name-follow">
       <h1> {data.name} </h1>
       <div className="user-detail">
       <h1 className="project">
       <p>{data.public_repos} </p> Project
       </h1>
       <h1 className="project">
       <p>{data.followers} </p> follower
       </h1>
       <h1 className="project">
       <p>{data.following} </p> following
       </h1>
       </div>
        <div className="work">
        <h1> 👨🏻 : {data.bio} </h1>
         <h1> 🏢 : {data.company} </h1>
        </div>
       </div>
     </div>
     <div className="lower-part">
     <a target='blank' href={data.html_url}>
       <button className='button' > Visite Profile </button>
       </a>
     </div>
    </div> : <h1>enter user name</h1>}

    </div>
    </>
  )
}

export default App