import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen pt-24 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 animate-fadeIn space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-4">Добро пожаловать в Техникум информационных технологий</h1>
          <p>Здесь вы найдете всю необходимую информацию о нашем техникуме, поступлении и обучении.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Наши преимущества</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Современные образовательные программы</li>
            <li>Опытные преподаватели и наставники</li>
            <li>Практическая направленность обучения</li>
            <li>Сотрудничество с ведущими IT-компаниями</li>
            <li>Удобное расположение и комфортные условия</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Новости и события</h2>
          <p>Следите за последними новостями техникума, мероприятиями и конкурсами.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Контакты</h2>
          <p>Телефон: 8(8793) 32-32-96, 97-43-74, +7(903)440-42-42</p>
          <p>Адрес: г. Пятигорск, пр. Калинина, 15</p>
          <p>Email: info@tech-it.ru</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
