import React from 'react';

export default function AdvantageCard({ bgColor, icon, title }) {
  return (
    <div className={`${bgColor} h-[300px] w-[250px] rounded flex flex-col items-center justify-center text-white`}>
      {icon && <i className={`${icon} text-3xl mb-4`}></i>}
      {title && <h3 className="text-xl font-bold">{title}</h3>}
    </div>
  );
}
