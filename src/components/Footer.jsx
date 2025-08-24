import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [visits, setVisits] = React.useState(0);

  React.useEffect(() => {
    const storedVisits = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const newVisits = storedVisits + 1;
    localStorage.setItem('visitCount', newVisits.toString());
    setVisits(newVisits);
  }, []);

  return (
<motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 bg-gray-900 border-t border-gray-700 text-gray-300 p-8 text-center text-lg"
    >
      <div className="container mx-auto space-y-3">
        <p>© 2024 Техникум Информационных Технологий. Все права защищены.</p>
        <p>Контактная информация:</p>
        <p>Телефон: 8(8793) 32-32-96, 97-43-74, +7(903)440-42-42</p>
        <p>Адрес: г. Пятигорск, пр. Калинина, 15</p>
        <p>Email: info@tech-it.ru</p>
        <p>Посетителей на сайте: {visits}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
