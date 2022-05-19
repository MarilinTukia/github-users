import React, { useEffect, useState } from 'react'
import Search from './Search';
import Repositories from './Repositories';
import {Link} from 'react-router-dom';


const Users = () => {

    const [allUsers , setUsers] = useState ([]);
    const [cName, setClassName] = useState('grid-view');

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUsers(await response.json());
    }

    useEffect ( () => {
        getUsers();
    }, []);

  return (
    <section className="users">
        <div className="title-block">
            <div className="title-block__left">
                <svg width="1024px" height="1024px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>
                </svg>
                <h1>Github users</h1>
            </div>
            <div className={"view-change " + cName}>
                <button className="button button--grid" onClick={() => setClassName('grid-view')}>
                    <svg width="20" height="20" viewBox="0 0 29 28.3" fill="706e6e" xmlns="http://www.w3.org/2000/svg">
                        <g id="grid-2">
                            <path class="st0" d="M8.7,2.4c0-0.5-0.4-1-1-1H2.4c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1V2.4z"/>
                            <path class="st0" d="M17.9,2.4c0-0.5-0.4-1-1-1h-5.3c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1H17c0.5,0,1-0.4,1-1V2.4z"/>
                            <path class="st0" d="M27.4,2.4c0-0.5-0.4-1-1-1H21c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1
                                C27.4,7.7,27.4,2.4,27.4,2.4z"/>
                            <path class="st0" d="M8.7,11.4c0-0.5-0.4-1-1-1H2.4c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1V11.4z"/>
                            <path class="st0" d="M17.9,11.4c0-0.5-0.4-1-1-1h-5.3c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1H17c0.5,0,1-0.4,1-1V11.4z"/>
                            <path class="st0" d="M27.4,11.4c0-0.5-0.4-1-1-1H21c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1
                                C27.4,16.7,27.4,11.4,27.4,11.4z"/>
                            <path class="st0" d="M8.7,20.6c0-0.5-0.4-1-1-1H2.4c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1V20.6z"/>
                            <path class="st0" d="M17.9,20.6c0-0.5-0.4-1-1-1h-5.3c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1H17c0.5,0,1-0.4,1-1V20.6z"/>
                            <path class="st0" d="M27.4,20.6c0-0.5-0.4-1-1-1H21c-0.5,0-1,0.4-1,1v5.3c0,0.5,0.4,1,1,1h5.3c0.5,0,1-0.4,1-1
                                C27.4,25.9,27.4,20.6,27.4,20.6z"/>
                        </g>
                    </svg>
                </button>
                <button className="button button--list" onClick={() => setClassName('list-view')}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.8 23.1" fill="706e6e">
                        <g>
                            <path class="st0" d="M27.5,5c0,0.8-0.9,1.4-2,1.4H3.6c-1.1,0-2-0.6-2-1.4V2.8c0-0.8,0.9-1.4,2-1.4h21.9c1.1,0,2,0.6,2,1.4V5z"/>
                            <path class="st0" d="M27.5,20.5c0,0.8-0.9,1.4-2,1.4H3.6c-1.1,0-2-0.6-2-1.4v-2.3c0-0.8,0.9-1.4,2-1.4h21.9c1.1,0,2,0.6,2,1.4V20.5
                                z"/>
                            <path class="st0" d="M27.5,12.7c0,0.8-0.9,1.4-2,1.4H3.6c-1.1,0-2-0.6-2-1.4v-2.3c0-0.8,0.9-1.4,2-1.4h21.9c1.1,0,2,0.6,2,1.4V12.7
                                z"/>
                        </g>
                    </svg>
                </button>
            </div>
         </div>
        <Search/>
        <div className={"max--width--small users__container "+cName}>
            {
                allUsers.map((element) => {
                    return (
                    <div className='single-user'>
                        <img src={ element.avatar_url } alt="User"/>
                        <div className="single-user__info">
                                <Link to={`users/${element.login}`}>
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g id="about"><path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"/><path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"/></g></svg>
                                    {element.login }
                                </Link>
                            <span></span>
                            <p>Type: {element.type}</p>
                        </div>
                        <div className='single-user__repos'>
                            <span>User Repos</span>
                            <Repositories user={element} />
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Users
