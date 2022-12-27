import React from 'react';

import TravelItem from '../components/TravelItem';

import travelItemsData from '../data/travelItemsData';

export default function Main() {
  const travelItemElements = travelItemsData.map(item => {
    return <TravelItem
      id={item.id}
      {...item}
    />
  });

  return (
    <main className="main">
      <div className="items-container">
        {travelItemElements}
      </div>
    </main>
  );
}