import studentOne from './utils/images/student1.png';
import studentTwo from './utils/images/student2.png';
import studentThree from './utils/images/student3.png';

const testimonialData = [
  {
    image: studentOne,
    name: 'Angel Greene',
    university: 'Uniport',
    year: '400l student',
    feedback:
      'Thanks to Storeguard, I am not worried about my receipts because they are all secured.',
  },
  {
    image: studentTwo,
    name: 'Mark Oscar',
    university: 'UNN',
    year: '400l student',
    feedback:
      "Storeguard's secure receipt storage is a game changer. Total peace of mind!",
  },
  {
    image: studentThree,
    name: 'Helen Joy',
    university: 'UNI',
    year: '400l student',
    feedback: 'Storeguard is fantastic! Keeping my receipts safe and sound.',
  },
];

const chooseUsData = [
  {
    title: 'Two Step Authentication',
    description:
      'We provide you with an extra layer of security to prevent unauthorized access to your data',
    backgroundColor: 'bg-slate-600',
  },
  {
    title: 'Receipt Retrieval',
    description:
      'We provide you with an extra layer of security to prevent unauthorized access to your data',
    backgroundColor: 'bg-[#b6814d]',
  },
  {
    title: 'Receipt Management',
    description:
      'We provide you with an extra layer of security to prevent unauthorized access to your data',
    backgroundColor: 'bg-slate-600',
  },
];
const faqData = [
  {
    question: 'Can I retrieve lost receipts?',
    answer: 'Yes, you can retrieve lost receipts by following the steps provided in our support section.',
  },
  {
    question: 'How do I register to have access to upload receipts?',
    answer: 'To register and gain access to upload receipts, please visit the registration page on our website.',
  },
  {
    question: 'What are the steps taken to retrieve receipts?',
    answer: 'The steps to retrieve receipts involve logging into your account, navigating to the receipts section, and selecting the appropriate options for retrieval.',
  },
  {
    question: 'Can I manage my receipts on this website?',
    answer: 'Yes, you can manage your receipts on our website by logging into your account and accessing the receipt management tools provided.',
  },
];

export  {chooseUsData, testimonialData, faqData};
