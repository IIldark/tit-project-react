import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen pt-24 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 animate-fadeIn space-y-6">
        <h1 className="text-3xl font-bold mb-4">Сведения об образовательной организации</h1>
        <p>Общая информация о техникуме, его истории, миссии и образовательных программах.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">История техникума</h2>
          <p>Техникум информационных технологий был основан в 2000 году и с тех пор успешно готовит специалистов в области IT.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Миссия и цели</h2>
          <p>Обеспечить качественное образование и подготовку кадров, востребованных на рынке труда.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Образовательные программы</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Программирование и разработка ПО</li>
            <li>Сетевые технологии и администрирование</li>
            <li>Информационная безопасность</li>
            <li>Дизайн и мультимедиа</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
