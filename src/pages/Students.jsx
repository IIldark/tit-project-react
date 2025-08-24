import React from 'react';

const Students = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen pt-24 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl mx-auto p-8 animate-fadeIn space-y-6">
        <h1 className="text-3xl font-bold mb-4">Студенту</h1>
        <p>Полезная информация для студентов: расписание, учебные материалы и новости.</p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Расписание занятий</h2>
          <p>Актуальное расписание учебных занятий и экзаменов.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Учебные материалы</h2>
          <p>Доступ к учебным пособиям, презентациям и дополнительным ресурсам.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Новости и мероприятия</h2>
          <p>Информация о предстоящих событиях, конкурсах и студенческой жизни.</p>
        </section>
      </div>
    </div>
  );
};

export default Students;
