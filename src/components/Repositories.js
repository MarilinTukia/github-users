import React, { useEffect , useState } from "react";


const Repositories = ({user}) => {
const [repo , setRepos] = useState ([]);


const getRepos = async () => {
    const url = `https://api.github.com/users/${user.login}/repos`;
    const response = await fetch(url);
    setRepos(await response.json());
}

useEffect ( () => {
    getRepos();
}, );

   return (
       <>
            { repo.length ? (
                repo.slice(0, 3).map( repo => {
                    return (
                        <p>
                            {repo.name}
                        </p>
                    )
                })
                ) : ( <span>No repos for this user</span>
            )}
        </>
   )
}

export default Repositories;