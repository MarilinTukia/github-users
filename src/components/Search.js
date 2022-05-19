import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';


const Search = () => {

   const [userSearch, setUserSearch] = useState('');

   let navigate = useNavigate();
   async function handleSubmit(event) {
      event.preventDefault();
      const url = `https://api.github.com/users/${userSearch}`;
      const response = await fetch(url);
      const foundUser = await response.json();
      navigate(`users/${foundUser.login}`, { replace: true }); 
      localStorage.setItem(foundUser.login, JSON.stringify(foundUser.login));
      const data = localStorage.getItem(foundUser.login);
      console.log(JSON.parse(data));

      var arr = [];
      for (let i = 0; i < localStorage.length; i++) {
         let storedValue = localStorage.key(i);
         arr.push(storedValue);
         console.log(arr);
      }

   }

   return (
      <>
         <form onSubmit={handleSubmit} className="max--width--small">
            <div className="search-form">
               <input value={userSearch} onChange= {event =>setUserSearch(event.target.value)} type="text" placeholder="Search users" ></input>
               <button className="button button--dark">Search</button>
            </div>
         </form>
         {/* <div>{
            arr.map( username => ( <div>{username}</div>))
            }
            </div> */}
      </>
   )
}

export default Search;