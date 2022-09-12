import React from 'react';
import './Card.css';
import user from '../../images/user/user.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className='container border rounded-lg mt-3 pb-3 w-[80%]'>
            <div className='background-style w-full'>
                <h1 className='text-3xl mt-7' >Programming</h1>
            </div >
            <div className='image-style' >
                <img src={user} alt='userimg'></img>
            </div >
            <div className='my-2'>
                <h3 className='text-xs font-bold'>Parvez Rahman</h3>
                <p className='text-xs'>MERN Stack Developer</p>
            </div>
            <div style={{ height: '1px' }} className='w-[100%] bg-slate-300'></div>
            <div className='mt-2'>
                <Link to='#' className='flex items-center justify-between'>
                    <div className='text-xs'>
                        <p>Connections</p>
                        <p className='font-bold'>Grow your network</p>
                    </div>
                    <div className='text-color'>49</div>
                </Link>
            </div>
            <div>
                <Link to='#' className='flex items-center justify-between'>
                    <div className='text-xs'>
                        <p>Who's viewed your profile</p>
                    </div>
                    <div className='text-color'>9</div>
                </Link>
            </div>
            <div style={{ height: '1px' }} className='w-[100%] bg-slate-300'></div>

            <div className='my-2'>
                <Link to='#'>
                    <div>
                        <h2 className='text-xs text-left'>Access exclusive tools & insights</h2>
                    </div>
                    <div className='flex items-center premium-link text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                        <h2 className='ml-2'>Try Premium for free</h2>
                    </div>
                </Link>
            </div>
            <div style={{ height: '1px' }} className='w-[100%] bg-slate-300'></div>
            <div className='mt-2'>
                <Link to='#'>
                    <div className='flex items-center premium-link text-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
                        </svg>
                        <h2 className='ml-2'>My Items</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Card;