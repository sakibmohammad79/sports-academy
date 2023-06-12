import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ClientCard from './ClientCard';
import { Bounce, Zoom } from "react-awesome-reveal";


const ClientSay = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://wolves-server.vercel.app/client')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    //console.log(reviews);
    return (
        <div className='mb-16'>
            <SectionTitle heading={'valuable feedback from our amazing client'} subHeading={'Our experienced instructors will guide you towards success.'}></SectionTitle>
            <Zoom><div className='grid grid-cols-1 px-8 md:p-8 md:grid-cols-3 gap-8'>
            {
                reviews.map(review => <ClientCard
                key={review._id}
                review={review}>
                </ClientCard>)
            }
            </div>
            </Zoom>
        </div>
    );
};

export default ClientSay;