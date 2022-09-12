import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = ({ singlePost }) => {
    const { img, post, userImg, userInfo, userName } = singlePost;
    return (
        <div c className='border rounded-lg mt-3 p-3'>
            <div className='grid grid-cols-2'>
                <div className='flex items-center'>
                    <div>
                        <img className="w-10 rounded-full" src={userImg} alt="" />
                    </div>
                    <div>
                        <h4 className='font-bold text-xs'>{userName} . 2nd</h4>
                        <h6 className='text-xs ml-2'>{userInfo}</h6>
                    </div>
                </div>
                <div className='font-bold flex justify-end text-color link no-underline'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <span>Follow</span>
                </div>
            </div>
            <div className='my-4'>
                <p className='text-left mb-2'>{post}</p>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='text-xs text-left flex items-center my-2'>
                    <p className='hover:link'>Mahmudul Hasan Selim and 919 others</p>
                    <p className='hover:link  ml-5'>38 comments</p>
                    <p className='hover:link  ml-5'>2 shares</p>
                </div>
                <hr />
            </div>
            <div className=''>
                <ul className='p-0 flex items-center justify-around text-xs'>
                    <li>
                        <Link to='#' className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                            </svg>
                            <span>Like</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <span className='text-xs'>Comment</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fill-rule="evenodd" d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
                            </svg>
                            <span className='text-xs'>Share</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='#' className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>
                            <span className='text-xs'>Send</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SinglePost;