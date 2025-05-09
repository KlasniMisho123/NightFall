import React from 'react';
import AdvantageCard from './AdvantageCard';


export default function OurAdvantages() {
  const cards = [
    { bgColor: 'bg-green-400', icon: 'fa-solid fa-crosshairs', title: 'Precision' },
    { bgColor: 'bg-yellow-400', icon: '', title: 'Speed' },
    { bgColor: 'bg-red-400', icon: '', title: 'Security' },
    { bgColor: 'bg-blue-400', icon: '', title: 'Support' },
    { bgColor: 'bg-purple-400', icon: '', title: 'Scalability' },
  ];

  return (
    <section className="flex gap-4 border-2 border-blue-700 rounded px-2 py-4 overflow-x-auto">
      {cards.map((card, index) => (
        <AdvantageCard
          key={index}
          bgColor={card.bgColor}
          icon={card.icon}
          title={card.title}
        />
      ))}
    </section>
  );
}
