import React from 'react'
import './App.css'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const App = () => {

  const [input, setinput] = useState('')
  const [data, setdata] = useState('')

  const inputvalue =(e) =>{
    setinput(e.target.value)
  }

  const submit = (e) =>{
    e.preventDefault();

    fetch('https://api.github.com/users/' + input)
    .then(response => response.json())
    .then(info => {
      console.log(info);
      setdata(info);
    });
    setinput('')
   
  }
 

  return (  <> <form className='form' >
    <div className="inputbox"> <h1>Github-User's</h1>
   <div className='inputfield'> <input type="text" onChange={inputvalue} value={input} />
    <SearchIcon className='search' onClick={submit} >Enter</SearchIcon> </div>
    </div> { data &&
    <div className="info-box">
      <div className="name-ava">
      <img className='avatar' src={data.avatar_url} alt="check for net" />
      <div className="name-bio">
      <h1>{data.name}</h1>
      <div className="followers">
      <div className="repo-box">
      <h1> Public Projects </h1>
      <h2> {data.public_repos} </h2>
      </div>
      <div className="follwer-box">
      <h1> Followers </h1>
      <h2> {data.followers} </h2>
      </div>
      <div className="follwing-box">
      <h1> Following </h1>
      <h2> {data.following} </h2>
      </div>
      </div>
      </div>
      </div>
    </div>}
    </form>
    </>
  )
}

export default App