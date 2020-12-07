export interface DataI {
  id: number;
  title: string;
  description: string;
  img: string;
  live: string;
  tools: string[];
  code: string;
}

export const projects: Array<DataI> = [
  {
    id: 1,
    title: 'Healthy App',
    img: 'healthy-desktop',
    description:
      'Proyecto creado con un grupo de personas de FrontendCafe a modo aprendizaje, donde pude conectar con personas que tienen la misma pasion por la programacion y la colaboracion en equipo. Mi primera experiencia trabajando en equipo, donde encontre una mejor comunicacion con diferentes integrantes del proyecto, tanto con la parte de diseno, front y backen devs.',
    live: 'https://healthy.vercel.app/',
    code: 'https://github.com/Healthy-Dev',
    tools: ['react', 'redux-sagas', 'scss'],
  },
  {
    id: 2,
    title: 'Portfolio',
    img: 'portfolio',
    description:
      'Desarrolle mi portfolio personal usando Next.js integrando Typescript como lenguaje, y para los estilos decidi usar styled-components, que me parece una herramienta muy poderosa a la hora de desarollar aplicaciones en React.',
    live: 'https://myke-dev.vercel.app/',
    code: 'https://github.com/myke-roly/Portfolio',
    tools: ['next-js', 'styled-components', 'typescript'],
  },
  {
    id: 3,
    title: 'Movie App',
    img: 'movies-app',
    description:
      'Con personas de Front-End Cafe, decidimos a modo de aprendizaje crear una aplicacion e integrar todos nuestros conocimientos de react y su ecosistema. A partir de ello tambien hicimos coworking juntandonos en algun lugar de Buenos Aires, fue una experiencia bastante contructiva compartiendo ideas y ayudandonos unos a otros.',
    live: 'https://movies-mike.herokuapp.com/',
    code: 'https://github.com/myke-roly/movie-group-react',
    tools: ['react', 'styled-components', 'scss'],
  },
  {
    id: 4,
    title: 'Full Stack E-commerce',
    img: 'e-commerce',
    description: `Con la necesidad de un familiar por tener un e-commerce, decidi aplicar todo mi conociemiento para crear una web que tenga todo lo necesario para que se le haga el trabajo mas sencillo, realizando diferentes tareas: 
    1. Listar catalogo de productos 
    2. Filtrar productos por categorias
    3. Buscador de productos
    4. Carrito de compras
    5. Login/Regiter
    6. Opciones de envio y pago para cada compra
    7. Medios de Pago, atravez de Mercado Pago o por Whatsapp
    `,
    live: 'https://caps-arg.herokuapp.com/',
    code: 'https://github.com/myke-roly/capsEcommerce',
    tools: ['next-js', 'styled-components', 'node-js', 'mongo-db'],
  },
  {
    id: 5,
    title: 'Admin E-commerce',
    img: 'admin',
    description:
      'Para complementar a this web, Se creo un administrador donde tienes control detallado sobre la web, se puede ver estadisticas de comprar o listar de productos, agregar, eliminar, editar ver stock y mucho mas. Esto para hacer el trabajo mas facil para el cliente',
    live: 'https://admin-caps.vercel.app/',
    code: 'https://github.com/myke-roly/dashboard-products',
    tools: ['react', 'firebase', 'scss', 'redux'],
  },
  {
    id: 6,
    title: 'Administrador de Gastos',
    img: 'expences',
    description:
      'Me hacia falta un "Exel" mas detallado y facil uso para administrar mis gastos personales y de cualquiera que lo use. Con la ayuda de firebase se creo una base de datos simple, donde se puede almacenar los gatos de cada usuario, y poder tener acceso a su informacion y ver todas las estadisticas personales, solo es necesarion authenticarse para poder usar la app.',
    live: 'https://expences.vercel.app/',
    code: 'https://github.com/myke-roly/expenttrent-app',
    tools: ['typescript', 'scss', 'firebase', 'chart-js'],
  },
  {
    id: 7,
    title: 'Todo Vue',
    img: 'todo-vue',
    description:
      'Primera proyecto en vue, a modo de aprendizaje hice un simple todo integrando los conceptos basicos de vue.',
    live: 'https://todo-vue-rose.vercel.app/#/',
    code: 'https://github.com/myke-roly/todo-vue',
    tools: ['vue', 'tailwind'],
  },
];
