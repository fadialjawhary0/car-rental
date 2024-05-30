import React, { useEffect, useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { FaqsService } from './services/FaqsService';
import './FaqStyles.scss';

const Faq = () => {
  const [activeQ, setActiveQ] = useState(FaqsService[0]?.id || '');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openQuestion = id => {
    setActiveQ(prevActiveQ => (prevActiveQ === id ? null : id));
  };

  const getAnswerStyles = id => ({
    maxHeight:
      activeQ === id
        ? windowWidth <= 500
          ? '50rem'
          : windowWidth <= 700
          ? '30rem'
          : '20rem'
        : '0',
    padding: activeQ === id ? '2.8rem 4.5rem' : '0rem 4.5rem',
    transition: 'all 0.3s ease-out',
  });

  const selectedQuestionStyles = id => ({
    color: activeQ === id ? '#fff' : '#000',
    backgroundColor: activeQ === id ? '#ff4d30' : '#fff',
    boxShadow: activeQ === id ? '0 10px 15px 0 rgba(255, 83, 48, .35)' : 'none',
    transition: 'all 0.1s ease-out',
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='faq-section'>
      <div className='container'>
        <div className='faq-content'>
          <div className='faq-content_title'>
            <h4>FAQ</h4>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className='questions-container'>
            {FaqsService.map(faq => (
              <div key={faq?.id} className='faq-box'>
                <div
                  className='faq-box_question'
                  onClick={() => openQuestion(faq?.id)}
                  style={selectedQuestionStyles(faq?.id)}>
                  <p>{faq?.question}</p>
                  <IconChevronDown />
                </div>
                <div
                  className='faq-box_answer'
                  style={getAnswerStyles(faq?.id)}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
