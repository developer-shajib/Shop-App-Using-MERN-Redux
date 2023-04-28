import React from 'react';
import './SubTitle.scss';

const SubTitle = ({ title, desc, justifyContent = 'center', textAlign = 'center' }) => {
  return (
    <>
      <div className={`subtitle row g-0 align-items-end justify-content-${justifyContent}`}>
        <div className='col-lg-6'>
          <div className={`subtitle-content text-${textAlign} mb-5 wow fadeInUp`} data-wow-delay='0.1s'>
            <h1 className=' display-5 mb-3 '>{title}</h1>
            <p className=''>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubTitle;
