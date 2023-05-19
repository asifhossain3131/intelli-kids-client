import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const DetailsTab = ({toy}) => {
    const{sellerName,subCategory,toysDescription,sellerEmail}=toy
    return (
        <>
             <Tabs className='w-9/12 mx-auto mt-8 mb-8 lg:h-[400px] text-center p-4 bg-[#F4F3F0]'>
    <TabList className='font-bold'>
      <Tab>Information</Tab>
      <Tab>Description</Tab>
      <Tab>Reviews</Tab>
    </TabList>

    <TabPanel>
    <div className="stats stats-vertical lg:stats-horizontal shadow mt-12">
  
  <div className="stat">
    <div className="stat-title">Sub-Category</div>
    <div className="stat-value">{subCategory}</div></div>
  
  <div className="stat">
    <div className="stat-title">Seller Name</div>
    <div className="stat-value">{sellerName}</div></div>
  
  <div className="stat">
    <div className="stat-title">Seller Email</div>
    <div className="stat-value">{sellerEmail}</div></div>
  
</div>

<div className="stats stats-vertical lg:stats-horizontal shadow mt-8">
  
  <div className="stat">
    <div className="stat-title">Sells</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
</div>
    </TabPanel>
    <TabPanel>
    <div className='mt-12 w-9/12 mx-auto'>
{
toysDescription
}
    </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
        </>
    );
};

export default DetailsTab;