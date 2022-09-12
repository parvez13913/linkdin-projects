import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const RightSiteCard = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    return (
        <div className='border rounded-lg mt-3 pb-2 px-4'>
            <h2 className='font-semibold mt-2'>Add to your feed</h2>
            <div>
                {
                    post.map(singleCard => <SingleCard
                        key={singleCard._id}
                        singleCard={singleCard}
                    />)
                }
            </div>
        </div>
    );
};

export default RightSiteCard;