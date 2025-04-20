import { ChatIcon, EmailIcon } from '../components/icons/ContactIcons';

export const ContactConst = lang => [
  {
    title: lang === 'en' ? 'Get in touch' : 'Hubungi kami',
    description:
      lang === 'en'
        ? "Want to create a dream website for your business or project?. We are ready to help you from planning to launch. We will respond as soon as possible. Let's start your digital journey with us!"
        : 'Ingin membuat website impian untuk bisnis atau proyek Anda?. Kami siap membantu Anda dari perencanaan hingga peluncuran. Kami akan merespons secepat mungkin. Yuk, mulai perjalanan digital Anda bersama kami!',
  },
];

export const contactInfo = [
  {
    id: 'whatsapp',
    icon: ChatIcon,
    title: 'Whatsapp',
    info: '+62822-5450-0939',
    linkHref: 'https://wa.me/6282254500939',
    linkText: 'Chat now',
  },
  {
    id: 'email',
    icon: EmailIcon,
    title: 'Email',
    info: 'ferdausalamsyah@gmail.com',
    linkHref: 'mailto:ferdausalamsyah@gmail.com',
    linkText: 'Send email',
  },
];
