import React from 'react';

const Footer = () => {
  const [visits, setVisits] = React.useState(0);

  React.useEffect(() => {
    const storedVisits = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newVisits = storedVisits + 1;
    localStorage.setItem('visitCount', newVisits.toString());
    setVisits(newVisits);
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p>© 2024 TechCollege. Все права защищены.</p>
        <p>Контактная информация: info@techcollege.ru | +7 (123) 456-78-90</p>
        <p>Посетителей на сайте: {visits}</p>
      </div>
    </footer>
  );
};

export default Footer;
