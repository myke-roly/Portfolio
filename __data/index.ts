export interface ProjectsI {
  id: number;
  title: string;
  description: string;
  img: string;
  live: string;
  tools: string[];
  code: string;
}

export const projects: Array<ProjectsI> = [
  {
    id: 1,
    title: 'Healthy App',
    img: 'healthy-desktop',
    description: `With a group of people we met at "FRONTEND CAFE", we came up with the idea of ​​creating an application that would allow us to save cards with health tips for developers, in which I could learn how teamwork communicates with the different members of the project with the design team, with the front and the back developers. It was an incredible experience in which I learned a lot and had a slight idea of ​​what it takes to work as a team and bring a product to production.`,
    live: 'https://healthy.vercel.app/',
    code: 'https://github.com/Healthy-Dev',
    tools: ['react', 'redux-sagas', 'scss'],
  },
  {
    id: 2,
    title: 'Portfolio',
    img: 'portfolio',
    description:
      'I developed my personal website to display my personal projects, contact information, and individual and group projects that I developed throughout my learning process. It is built with NextJs, Styled-components, and typescript.',
    live: 'https://myke-dev.vercel.app/',
    code: 'https://github.com/myke-roly/Portfolio',
    tools: ['next-js', 'styled-components', 'typescript'],
  },
  {
    id: 3,
    title: 'Movie App',
    img: 'movies-app',
    description:
      'With the folks at "FRONTEND CAFE", we decided on creating a web application to integrate all our knowledge of ReactJS and its ecosystem. We also did coworking meeting in a cafe in Buenos Aires, it was a very constructive experience to share ideas and help each other.',
    live: 'https://movies-mike.herokuapp.com/',
    code: 'https://github.com/myke-roly/movie-group-react',
    tools: ['react', 'styled-components', 'scss'],
  },
  {
    id: 4,
    title: 'Full Stack E-commerce',
    img: 'e-commerce',
    description: `I was presented with the opportunity to create a very complete product store, where the entire web can be implemented from scratch, starting with the design and all the implementation of the different functionalities that were required, such as seeing a list of products. It has different functionalities such as filtering by various options and searching for a specific product. It also has an authentication system, and for the payment system I integrated all the functionalities using the MERCADO PAGO api for LATAM where I learned how the online payment management system works.`,
    live: 'https://caps-arg.herokuapp.com/',
    code: 'https://github.com/myke-roly/capsEcommerce',
    tools: ['next-js', 'styled-components', 'node-js', 'mongo-db'],
  },
  {
    id: 5,
    title: 'Admin E-commerce',
    img: 'admin',
    description:
      "To complement this website https://movies-mike.herokuapp.com/, an administrator was created where you have detailed control over the website, you can view purchase statistics or product listings, add, delete, edit, view stock and much more. This is to facilitate the client/'s work.",
    live: 'https://admin-caps.vercel.app/',
    code: 'https://github.com/myke-roly/dashboard-products',
    tools: ['react', 'firebase', 'scss', 'redux'],
  },
  {
    id: 6,
    title: 'Administrador de Gastos',
    img: 'expences',
    description:
      'I needed a more detailed and user-friendly way to manage my personal expenses and those of anyone who uses it. With the help of firebase, a simple database was created, where the expenses of each user can be stored. To access their information and see all their personal statistics, it is only necessary to authenticate to be able to use the application.',
    live: 'https://expenttrent-app.vercel.app/',
    code: 'https://github.com/myke-roly/expenttrent-app',
    tools: ['typescript', 'scss', 'firebase', 'chart-js'],
  },
  {
    id: 7,
    title: 'Todo Vue',
    img: 'todo-vue',
    description:
      'I created this application after taking a course and with the help of the official Vue documentation. I implemented the basic concepts of this technology and integrated Tailwind CSS to produce the styles faster.',
    live: 'https://todo-vue-rose.vercel.app/#/',
    code: 'https://github.com/myke-roly/todo-vue',
    tools: ['vue', 'tailwind'],
  },
];
