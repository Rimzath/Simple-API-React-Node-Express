import React, { useEffect, useState } from 'react'

const App = () => {

  const [user,setUser]= useState([])

  const getUser = () => {
    fetch("/api/user")
    .then((res) => res.json())
    .then((json) => setUser(json))
    .catch((err) => console.error("Error fetching user data:", err));
  }
  
  useEffect(()=>{
    getUser()
  },[])

  return (
    <div>
      {user.map((data)=>{
        return<>
        <div style={{border:"1px solid gray",width:"500px"}}>
          <h1>{data.name}</h1>
          <h1>{data.username}</h1>
          <h1>{data.email}</h1>
        </div>
        </>
        
      })}
    </div>
  )
}



export default App