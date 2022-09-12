import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user/user.jpg';
import SinglePost from './SinglePost';

const SecondSection = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    return (
        <div className='mt-2 border p-4 mx-auto shadow-md rounded-lg mb-2'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className="w-10 rounded-full" src={user} alt="userImg" />
                    <h1 className='font-bold mx-2 text-xs'>Parvez Rahman</h1>
                    <span className='text-xs'>celebrates this</span>
                </div>
                <ul className='p-0 menu menu-horizontal'>
                    <li>
                        <Link to='#'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='border mt-2 mb-4'> </div>
            <div>
                <div>
                    {
                        post.map(singlePost => <SinglePost
                            key={singlePost._id}
                            singlePost={singlePost}
                        />)
                    }
                </div>

            </div>
        </div>
    );
};

export default SecondSection;