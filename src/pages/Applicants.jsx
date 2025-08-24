import React from 'react';

const Applicants = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen pt-24 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 animate-fadeIn space-y-6">
        <h1 className="text-3xl font-bold mb-4">Абитуриенту</h1>
        <p>Информация для поступающих: правила, документы, сроки и полезные советы.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Поступление</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Правила приема и необходимые документы</li>
            <li>Сроки подачи заявлений и экзаменов</li>
            <li>Подготовительные курсы и консультации</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Контакты приемной комиссии</h2>
          <p>Телефон: 8(8793) 32-32-96, 97-43-74</p>
          <p>Email: info@tech-it.ru</p>
        </section>
      </div>
    </div>
  );
};

export default Applicants;
