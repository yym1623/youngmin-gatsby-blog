export default {
  /**
   * basic Information
   */
  title: `young-min.com`,
  description: `개발자 영민`,
  language: `ko`,
  siteUrl: `https://young-min.com/`,
  ogImage: ``, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`danmin20/danmin-gatsby-blog`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `윤영민`,
    nickname: `영민`,
    stack: ['Frontend', 'Vue', 'Typescript'],
    bio: {
      email: `yym16233@gmail.com`,
      residence: 'Seoul, South Korea',
      bachelorDegree: 'Computer Engineering (2017.03-2021.02)',
    },
    social: {
      github: `https://github.com/yym1623`,
      linkedIn: `https://www.linkedin.com/in/영민-윤-728ba630a/`,
      resume: `https://www.figma.com/file/03Le7GFj5cEVf3UOxmQcRE/%EC%9C%A4%EC%98%81%EB%AF%BC-%EC%9D%B4%EB%A0%A5%EC%84%9C?type=design&node-id=0%3A1&mode=design&t=0t8WvqDlul2v9ILp-1`,
    },
    dropdown: {
      tistory: '',
      velog: '',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
