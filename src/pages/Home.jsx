import React from 'react';
import { motion } from 'framer-motion';
import ContentSection from '../components/ContentSection';
import SectionTitle from '../components/SectionTitle';
import ContentSectionAnimated from '../components/ContentSectionAnimated';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-indigo-500 min-h-screen pt-24 px-4 space-y-8">
      <ContentSection>
        <section className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-extrabold mb-6"
          >
            Приёмная кампания
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-semibold mb-4"
          >
            65 бюджетных мест!
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl italic mb-8"
          >
            "Программируй свою карьеру с ТИТ!"
          </motion.p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
            Узнать больше
          </button>
        </section>
      </ContentSection>

      <ContentSection>
        <SectionTitle>О техникуме</SectionTitle>
        <p>
          Частное профессиональное образовательное учреждение «Техникум информационных технологий» с 2000 года осуществляет подготовку по самым приоритетным направлениям технического профиля.
        </p>
        <p>
          Мы предлагаем современные образовательные программы, опытных преподавателей и практическую направленность обучения.
        </p>
      </ContentSection>

      <ContentSectionAnimated>
        <motion.img
          src="/src/assets/home_image.jpg"
          alt="Technology education"
          className="rounded-xl shadow-lg mx-auto max-w-full max-h-[70vh] object-cover"
          initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </ContentSectionAnimated>

      <ContentSection>
        <section>
          <h2 className="text-2xl font-semibold mb-4">О техникуме</h2>
          <p>
            Частное профессиональное образовательное учреждение «Техникум информационных технологий» с 2000 года осуществляет подготовку по самым приоритетным направлениям технического профиля.
          </p>
          <p>
            Мы предлагаем современные образовательные программы, опытных преподавателей и практическую направленность обучения.
          </p>
        </section>
      </ContentSection>

      <ContentSection>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Наши преимущества</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Современные образовательные программы</li>
            <li>Опытные преподаватели и наставники</li>
            <li>Практическая направленность обучения</li>
            <li>Сотрудничество с ведущими IT-компаниями</li>
            <li>Удобное расположение и комфортные условия</li>
          </ul>
        </section>
      </ContentSection>

      <ContentSection className=''>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Контакты</h2>
          <p>Телефон: 8(8793) 32-32-96, 97-43-74, +7(903)440-42-42</p>
          <p>Адрес: г. Пятигорск, пр. Калинина, 15</p>
          <p>Email: info@tech-it.ru</p>
        </section>
      </ContentSection>
    </div>
  );
};

export default Home;
