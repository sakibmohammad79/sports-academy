import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mt-16 mb-8">
            <p className="text-lime-500 text-4xl font-extrabold mb-2 uppercase">{heading}</p>
            <h3 className=" py-3 uppercase text-white font-bold">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;