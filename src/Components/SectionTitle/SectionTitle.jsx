import React from 'react';

const SectionTitle = () => {
    return (
        <div className="text-center w-4/12 mx-auto my-8">
            <p className="text-lime-500 mb-2">---{heading}---</p>
            <h3 className="text-4xl border-y-4 py-3 uppercase">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;