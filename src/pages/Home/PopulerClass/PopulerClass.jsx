import React from 'react';
import useData from '../../../hook/useData';
import PopulerClassCard from './PopulerClassCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const PopulerClass = () => {
    const [allDatas] = useData();
    console.log(allDatas)
    return (
        <div>
            <SectionTitle heading={'Our client say'} subHeading={'about us'}></SectionTitle>
            <div className='grid grid-cols-3 gap-4'>
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