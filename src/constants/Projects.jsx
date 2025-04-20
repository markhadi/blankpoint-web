import { EyeOutline } from '../components/icons/EyeOutline';
import { NotebookOutline } from '../components/icons/NotebookOutline';

export const titleProject = lang => [{ title: lang === 'en' ? 'Highlight Project' : 'Sorotan Proyek' }, { title: lang === 'en' ? 'Another Project' : 'Proyek Lainnya' }];

export const highlightProjectsData = lang => [
  {
    id: 'blanksys',
    title: 'Blanksys',
    imageSrc: '/blanksys.png',
    imageAlt: 'Screenshot of Blanksys Point of Sales system',
    backgroundColor: 'bg-[#F1F2FF]',
    badges: [
      { text: 'Web App', type: 'gray-small' },
      { text: 'Point of sales', type: 'gray-small' },
    ],
    description:
      lang === 'en'
        ? 'BLANKSYS Point of Sales is a web-based POS system designed for businesses that focus on retail sales, but flexible enough to be used in Food and Beverage (FnB) operations. This system aims to provide a convenient, efficient, and easy-to-use interface for cashiers in managing stock, processing transactions, and interacting with customers.'
        : 'BLANKSYS Point of Sales adalah sistem POS berbasis web yang dirancang untuk bisnis yang berfokus pada penjualan barang retail, namun cukup fleksibel untuk digunakan dalam operasional Food and Beverage (FnB). Sistem ini bertujuan untuk memberikan antarmuka yang nyaman, efisien, dan mudah digunakan bagi kasir dalam mengelola stok barang, memproses transaksi, serta berinteraksi dengan pelanggan.',
    links: [
      { href: 'https://blanksys-pos.vercel.app/', text: 'View Demo', icon: EyeOutline, variant: 'demo' },
      { href: 'https://blanksys-pos.vercel.app/', text: 'Case study', icon: NotebookOutline, variant: 'study' },
    ],
  },
  {
    id: 'bakkah',
    title: 'Bakkah Mobile Service',
    imageSrc: '/bakkah.png',
    imageAlt: 'Screenshot of the Bakkah Mobile Service school management system',
    backgroundColor: 'bg-[#CDFFEA]',
    badges: [
      { text: 'Web App', type: 'gray-small' },
      { text: 'School System', type: 'gray-small' },
      { text: 'Website', type: 'gray-small' },
    ],
    description:
      lang === 'en'
        ? "Mobile and web applications for the management of the modern Islamic boarding school Ma'had Bakkah Martapura. Where the application is used for public services for monitoring purposes from parents of students and as internal management for school employees starting from attendance, submission, permits, leave to financial systems."
        : 'Aplikasi mobile dan web untuk management sekolah pesantren modern Ma’had Bakkah Martapura. Dimana aplikasi digunakan untuk layanan publik untuk keperluan monitor dari orangtua siswa dan sebagai internal management bagi pegawai sekolah mulai dari absensi, pengajuan, perizinan, cuti hingga system keuangan.',
    links: [
      { href: 'https://blanksys-pos.vercel.app/', text: 'View Demo', icon: EyeOutline, variant: 'demo' },
      { href: 'https://blanksys-pos.vercel.app/', text: 'Case study', icon: NotebookOutline, variant: 'study' },
    ],
  },
];

export const anotherProjectsData = lang => [
  {
    id: 'devoverflow',
    imageSrc: '/devoverflow.png',
    imageAlt: 'Screenshot from the Devoverflow website, a social forum for developers',
    badges: [
      { text: 'Landing page', type: 'blue-large' },
      { text: 'Company Profile', type: 'green-large' },
      { text: 'Portfolio', type: 'yellow-large' },
    ],
    title: 'Devoverflow',
    description: lang === 'en' ? 'Developer & Coder social forum' : 'Forum sosial pengembang dan pembuat kode',
    links: [
      { href: 'https://link-demo-devoverflow.com', text: 'View Demo', icon: EyeOutline, variant: 'demoSmall' },
      { href: 'https://link-study-devoverflow.com', text: 'Case study', icon: NotebookOutline, variant: 'studySmall' },
    ],
  },
  {
    id: 'citaprasada',
    imageSrc: '/citaprasada.png',
    imageAlt: 'Screenshot of Citaprasada.com website, architect and construction company profile',
    badges: [
      { text: 'Landing page', type: 'blue-large' },
      { text: 'Company Profile', type: 'green-large' },
      { text: 'Portfolio', type: 'yellow-large' },
    ],
    title: 'Citaprasada.com',
    description: lang === 'en' ? 'Architect & construction company profile' : 'Profil perusahaan arsitek & konstruksi',
    links: [
      { href: 'https://link-demo-citaprasada.com', text: 'View Demo', icon: EyeOutline, variant: 'demoSmall' },
      { href: 'https://link-study-citaprasada.com', text: 'Case study', icon: NotebookOutline, variant: 'studySmall' },
    ],
  },
  {
    id: 'cotechca',
    imageSrc: '/cotechca.png',
    imageAlt: 'Screenshot of the website of the company profile of the software agency Cotechca',
    badges: [
      { text: 'Landing page', type: 'blue-large' },
      { text: 'Company Profile', type: 'green-large' },
      { text: 'Portfolio', type: 'yellow-large' },
    ],
    title: 'Cotechca',
    description: lang === 'en' ? 'Software agency company profile & Portfolio' : 'Profil & Portofolio Perusahaan Agensi Perangkat Lunak',
    links: [
      { href: 'https://link-demo-cotechca.com', text: 'View Demo', icon: EyeOutline, variant: 'demoSmall' },
      { href: 'https://link-study-cotechca.com', text: 'Case study', icon: NotebookOutline, variant: 'studySmall' },
    ],
  },
  {
    id: 'pinkme',
    imageSrc: '/pinkme.png',
    imageAlt: 'Screenshot from the Pinkme website',
    badges: [
      { text: 'Landing page', type: 'blue-large' },
      { text: 'Company Profile', type: 'green-large' },
      { text: 'Portfolio', type: 'yellow-large' },
    ],
    title: 'Pinkme',
    description: lang === 'en' ? 'Pinkme website' : 'Pinkme website',
    links: [
      { href: 'https://link-demo-pinkme.com', text: 'View Demo', icon: EyeOutline, variant: 'demoSmall' },
      { href: 'https://link-study-pinkme.com', text: 'Case study', icon: NotebookOutline, variant: 'studySmall' },
    ],
  },
];
