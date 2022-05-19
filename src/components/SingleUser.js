import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import Orgs from './Orgs';
import Repositories from './Repositories';

const SingleUser = (props) => {
    const { username } = useParams();
    const [singleUser , setUser] = useState ({});
    const [orgs , setOrgs] = useState ([]);

    const getUser = async () => {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch(url);
        setUser(await response.json());
    }

    const getOrgs = async () => {
        const url = `https://api.github.com/users/${username}/orgs`;
        const response = await fetch(url);
        setOrgs(await response.json());
    }

    useEffect ( () => {
        getUser();
        getOrgs();
    }, );

   return (
    <>
        <div className="title-block">
            <div className="title-block__left">
                <svg width="1024px" height="1024px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>
                </svg>
            <h1>User</h1>
            </div>
            <Link className="button button--white" to={'/'}>Back to users</Link>
         </div>
        <div className="max--width--small">
            <div className="user-information">
                <div className="main-info">
                    <a href={singleUser.html_url} target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg>
                        <h2>{singleUser.name }</h2>
                    </a>
                    <span></span>
                    <p>Type: {singleUser.type}</p>
                </div>
                <div className="user-information__container">
                    <div className="image-container">
                        <img src={singleUser.avatar_url } alt="User"/>
                    </div>
                    <div className="info-container">
                        <div className="repositories">
                            <h4>User Repos</h4>
                            <Repositories user={singleUser} />
                        </div>
                        <div className="organizations">
                            <h4>User Organizations</h4>
                            { orgs.length ? (
                                orgs.slice(0, 3).map ( orgs => {
                                    return (
                                        <Orgs orgs={orgs} key={orgs.id}/>
                                    )
                                })
                                ) : ( <span>No Organizations for this user</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
   )
}

export default SingleUser;