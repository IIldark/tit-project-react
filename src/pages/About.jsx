import React from 'react';
import ContentSection from '../components/ContentSection';
import ContentSectionAnimated from '../components/ContentSectionAnimated';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-indigo-500 min-h-screen pt-24 px-4 space-y-8">
        <ContentSection>
          <h1 className="text-5xl font-bold mb-8">Сведения об образовательной организации</h1>
          <p className="text-lg leading-relaxed mb-8">
            Частное профессиональное образовательное учреждение «Техникум информационных технологий» с 2000 года осуществляет подготовку по самым приоритетным направлениям технического профиля.
          </p>
        </ContentSection>

        <ContentSectionAnimated>
          <motion.img
            src="/src/assets/about_image.jpg"
            alt="Computer with contrast"
            className="rounded-xl shadow-lg mx-auto max-w-full max-h-[80vh] object-cover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </ContentSectionAnimated>

        <ContentSection>
          <h2 className="text-3xl font-semibold mb-4">История техникума</h2>
          <p className="text-lg leading-relaxed mb-6">
            Техникум информационных технологий был основан в 2000 году и с тех пор успешно готовит специалистов в области IT, предоставляя качественное образование и практические навыки.
          </p>
        </ContentSection>
        <ContentSection>
          <h2 className="text-3xl font-semibold mb-4">Миссия и цели</h2>
          <p className="text-lg leading-relaxed mb-6">
            Обеспечить качественное образование и подготовку кадров, востребованных на рынке труда, способных успешно работать в сфере информационных технологий.
          </p>
        </ContentSection>
        <ContentSection>
          <h2 className="text-3xl font-semibold mb-4">Образовательные программы</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Программирование и разработка ПО</li>
            <li>Сетевые технологии и администрирование</li>
            <li>Информационная безопасность</li>
            <li>Дизайн и мультимедиа</li>
            <li>Водительские курсы</li>
          </ul>
        </ContentSection>
        <ContentSection>
          <h2 className="text-3xl font-semibold mb-4">Наши преимущества</h2>
          <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
            <li>Современные образовательные программы</li>
            <li>Опытные преподаватели и наставники</li>
            <li>Практическая направленность обучения</li>
            <li>Сотрудничество с ведущими IT-компаниями</li>
            <li>Удобное расположение и комфортные условия</li>
          </ul>
        </ContentSection>
    </div>
  );
};

export default About;
