import React from 'react';

const SingleCard = ({ singleCard }) => {
    const { userImg, userInfo, userName } = singleCard;
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div>
                    <img className="w-10 rounded-full" src={userImg} alt='userImage' />
                </div>
                <div className='ml-2 mt-2'>
                    <h3 className='text-xs'>{userName}</h3>
                    <h3 className='text-xs'>{userInfo}</h3>
                    <button className='border rounded-full px-3 mt-2'>
                        <div className='flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                            <span>Follow</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;