import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isOpen ? 'bg-blue-500' : 'bg-blue-500'}`}>
            {isOpen ? (
              <Minus size={16} className="text-white" />
            ) : (
              <Plus size={16} className="text-white" />
            )}
          </div>
          <span className="text-white font-medium">{question}</span>
        </div>
      </button>
      {isOpen && (
        <div className="pl-11 pr-4 pb-5">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What career is best suited for my personality and interests?',
      answer: 'We offer personalized career counseling services that take into account your unique personality traits, skills, and interests to help you explore and identify career paths that align with your aspirations. Our assessments and consultations provide valuable insights to guide your decisions.',
    },
    {
      id: 2,
      question: 'Do I need any prior knowledge of University to enroll in this course?',
      answer: 'No, our courses are designed for all levels. We start with the basics and gradually progress to more advanced concepts, making it accessible to everyone regardless of prior knowledge.',
    },
    {
      id: 3,
      question: 'How long does it take to complete the Admission?',
      answer: 'The typical admission process takes 2-4 weeks, depending on the program and your application completeness. We guide you through each step to ensure a smooth process.',
    },
    {
      id: 4,
      question: 'What format is the Counselling content delivered in?',
      answer: 'Our counselling is delivered through a combination of one-on-one sessions, interactive workshops, and supplementary digital resources to ensure comprehensive guidance.',
    },
    {
      id: 5,
      question: 'How do I access this?',
      answer: 'Once enrolled, you\'ll receive login credentials to our student portal where you can access all counselling sessions, resources, and schedule appointments with counselors.',
    },
    {
      id: 6,
      question: 'How is this counselling relevant to different industries?',
      answer: 'Our counselling programs are tailored to various industries and career paths. We have specialized counselors who understand the specific requirements and opportunities in different sectors.',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center italic mb-12">
          Frequently Asked Questions
        </h2>

        <div className="bg-gray-800 rounded-lg p-6">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;