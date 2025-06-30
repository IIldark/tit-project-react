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
    <footer className="bg-gradient-to-r mt-8 from-gray-200 to-gray-100 text-gray-900 p-8 text-center text-lg">
      <div className="container mx-auto space-y-3">
        <p>© 2024 Техникум Информационных Технологий. Все права защищены.</p>
        <p>Контактная информация:</p>
        <p>Телефон: 8(8793) 32-32-96, 97-43-74, +7(903)440-42-42</p>
        <p>Адрес: г. Пятигорск, пр. Калинина, 15</p>
        <p>Email: info@tech-it.ru</p>
        <p>Посетителей на сайте: {visits}</p>
      </div>
    </footer>
  );
};

export default Footer;
