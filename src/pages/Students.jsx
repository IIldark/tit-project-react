import React from 'react';
import ContentSection from '../components/ContentSection';
import ContentSectionAnimated from '../components/ContentSectionAnimated';
import { motion } from 'framer-motion';

const Students = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-indigo-500 min-h-screen pt-24 px-6 space-y-10">
      <ContentSection>
        <h1 className="text-6xl font-bold mb-10">Студенту</h1>
        <p className="text-xl leading-relaxed mb-10">
          Добро пожаловать в Техникум информационных технологий! Здесь вы найдете полезную информацию о расписании занятий, учебных материалах и новостях.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          Мы стремимся обеспечить комфортные условия для обучения и развития каждого студента.
        </p>
      </ContentSection>

      <ContentSectionAnimated>
        <motion.img
          src="/src/assets/students_image.jpg"
          alt="Students"
          className="rounded-xl shadow-lg mx-auto max-w-full max-h-[90vh] object-cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </ContentSectionAnimated>

      <ContentSection>
        <h2 className="text-4xl font-semibold mb-6">Расписание занятий</h2>
        <p className="text-lg leading-relaxed mb-6">Актуальное расписание учебных занятий и экзаменов доступно на нашем сайте и в учебном отделе.</p>
      </ContentSection>
      <ContentSection>
        <h2 className="text-4xl font-semibold mb-6">Учебные материалы</h2>
        <p className="text-lg leading-relaxed mb-6">Доступ к учебным пособиям, презентациям и дополнительным ресурсам предоставляется через электронную библиотеку и учебные кабинеты.</p>
      </ContentSection>
      <ContentSection>
        <h2 className="text-4xl font-semibold mb-6">Новости и мероприятия</h2>
        <p className="text-lg leading-relaxed mb-6">Информация о предстоящих событиях, конкурсах и студенческой жизни регулярно обновляется на сайте и в социальных сетях техникума.</p>
      </ContentSection>
    </div>
  );
};

export default Students;
