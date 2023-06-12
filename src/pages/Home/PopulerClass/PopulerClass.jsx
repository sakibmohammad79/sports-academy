import React from 'react';
import useData from '../../../hook/useData';
import PopulerClassCard from './PopulerClassCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PopulerClass = () => {
    const [allDatas] = useData();
    console.log(allDatas)
    return (
        <div>
            
            <SectionTitle heading={'Become A Professional Badminton Player'} subHeading='This section showcasing the our populer activity'></SectionTitle>
            <div className='grid px-8 grid-cols-2 md:grid-cols-3 gap-4'>
            {
                allDatas.slice(0,6).map(classes => <PopulerClassCard
                key={classes._id}
                classes={classes}>
                </PopulerClassCard>)
            }
            </div>
        </div>
    );
};

export default PopulerClass;