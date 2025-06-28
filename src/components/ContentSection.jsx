import React from 'react';

const ContentSection = ({ backgroundClass, children }) => {
  return (
    <section className={`${backgroundClass} bg-center bg-cover py-16 px-4 flex justify-center items-center`}>
      <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-4xl w-full">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
