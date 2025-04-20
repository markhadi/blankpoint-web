import { SoftDev, WebDev, UiUx, Pos } from '../components/icons/ServiceIcons';

export const servicesConst = lang => [
  {
    icon: <SoftDev />,
    heading: lang === 'en' ? 'Software Development' : 'Pengembangan Software',
    paragraph: lang === 'en' ? 'We build fast and user-friendly web-based software to optimize your business processes.' : 'Kami mengembangkan software berbasis web yang cepat dan mudah digunakan untuk mengoptimalkan segala proses bisnis.',
  },
  {
    icon: <WebDev />,
    heading: lang === 'en' ? 'Website Development' : 'Pengembangan Website',
    paragraph:
      lang === 'en' ? 'We create websites, company profiles, landing pages, and public service apps for various fields.' : 'Kami membuat aplikasi website, company profile, landing page hingga web pelayanan publik untuk segala bidang.',
  },
  {
    icon: <UiUx />,
    heading: 'UI UX Design',
    paragraph: lang === 'en' ? 'We create clean and modern designs for easier and error-free software usage.' : 'Kami membuat design yang clean dan modern untuk pengembangan software lebih mudah digunakan dan minim kesalahan.',
  },
  {
    icon: <Pos />,
    heading: lang === 'en' ? 'Point of Sales App' : 'Aplikasi Kasir',
    paragraph: lang === 'en' ? 'Our focus is on ERP systems for sales, like point of sales apps.' : 'Project kami banyak berfokus pada pengembangan sistem ERP penjualan seperti aplikasi kasir.',
  },
];
