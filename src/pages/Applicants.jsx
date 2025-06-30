import React from 'react';
import ContentSection from '../components/ContentSection';
import ContentSectionAnimated from '../components/ContentSectionAnimated';
import { motion } from 'framer-motion';

const Applicants = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-indigo-500 min-h-screen pt-24 px-4 space-y-8">
      <ContentSection>
        <h1 className="text-6xl font-bold mb-10">Абитуриенту</h1>
        <p className="text-xl leading-relaxed mb-10">
          Добро пожаловать в Техникум информационных технологий! Мы рады приветствовать будущих студентов и готовы помочь вам на каждом этапе поступления.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Здесь вы найдете всю необходимую информацию о правилах приема, необходимых документах, сроках подачи заявлений и экзаменов, а также о подготовительных курсах и консультациях.
        </p>
      </ContentSection>

      <ContentSectionAnimated>
        <motion.img
          src="/src/assets/applicants_image.jpg"
          alt="Applicants"
          className="rounded-xl shadow-lg mx-auto max-w-full max-h-[90vh] object-cover"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
      </ContentSectionAnimated>

      <ContentSection>
        <h2 className="text-4xl font-semibold mb-6">Поступление</h2>
        <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
          <li>Правила приема и необходимые документы: паспорт, аттестат, заявление и медицинская справка.</li>
          <li>Сроки подачи заявлений: с 1 июня по 15 августа.</li>
          <li>Экзамены: вступительные испытания по профильным предметам.</li>
          <li>Подготовительные курсы: бесплатные курсы для успешной сдачи экзаменов.</li>
          <li>65 бюджетных мест на 2024 год.</li>
        </ul>
      </ContentSection>
      <ContentSection>
        <h2 className="text-4xl font-semibold mb-6">Консультации и поддержка</h2>
        <p className="text-lg leading-relaxed mb-6">
          Наши специалисты готовы ответить на все ваши вопросы и помочь с оформлением документов. Вы можете связаться с приемной комиссией по телефону или электронной почте.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Телефон: 8(8793) 32-32-96, 97-43-74<br/>
          Email: info@tech-it.ru<br/>
          Адрес: г. Пятигорск, пр. Калинина, 15
        </p>
      </ContentSection>
    </div>
  );
};

export default Applicants;
