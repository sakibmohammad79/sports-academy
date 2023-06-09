import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClientCard from './ClientCard';

const ClientSay = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://wolves-server.vercel.app/client')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    //console.log(reviews);
    return (
        <>
            <SectionTitle heading={'Our client say'} subHeading={'about us'}></SectionTitle>
            <div className='grid grid-cols-3 gap-8'>
            {
                reviews.map(review => <ClientCard
                key={review._id}
                review={review}>
                </ClientCard>)
            }
            </div>
        </>
    );
};

export default ClientSay;