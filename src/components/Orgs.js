import React from "react";


const Orgs = ({orgs}) => {
const { login ,  avatar_url } = orgs;

   return (
        <div className="single-organization">
            <img src={ avatar_url } alt="Organization"/>
            <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer">
                {login}
            </a>
        </div>
   )
}

export default Orgs;