// import  about from "../../public/about.svg";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "To create seamless web experiences through innovative coding and design",
    description: "",
    className: "lg:col-span-5 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./network.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building JavaScript Projects",
    description: "The Inside Scoop",
    className: "md:col-span-5 md:row-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Digital Echoes",
    des: "Digital Echoes is your space for sharing and exploring thoughts and reflections in the digital age.",
    img: "./digital-echoes.jpg",
    iconLists: ["./next.svg", "./re.svg", "./tail.svg", "mongo.svg", "./vercel.ico"],
    link: "https://digital-echoes.vercel.app/",
  },
  {
    id: 2,
    title: "Weateher Wise",
    des: "Real-time weather updates and 5-day forecasts at your fingertips. Stay informed with accurate data on temperature, humidity, and more.. ",
    img: "./weather.jpg",
    iconLists: ["./re.svg", "./ts.svg", "./tail.svg", "./vercel.ico"],
    link: "https://weather-watch-one.vercel.app/",
  },
  {
    id: 3,
    title: "Nike Website",
    des: "Recreated e-commerce Nike Website landing page using ReactJS plus Vite and Tailwind CSS.",
    img: "./nike.svg",
    iconLists: ["./re.svg", "./vite.svg", "./js.svg", "./tail.svg", "./vercel.ico"],
    link: "https://nike-website-peach.vercel.app/",
  }, 
  {    
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "./apple.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
    link: "https://github.com/bernard-lab/apple-website.git",
  }, 
  {
    id: 5,
    title: "Image Slider",
    des: "Created a smooth image transition animation of wildlife animals combining CSS and JavaScript.",
    img: "./img-slider.png",
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://image-slider-bice.vercel.app/",
  },
];
  
export const workExperience = [
  {
    id: 1,
    title: "Chat Support Representative",
    desc1: "Customer Assistance: Respond to customer inquiries in real-time via chat, providing accurate and helpful information to resolve their questions and issues.",
    desc2: "Issue Resolution: Diagnose and troubleshoot customer problems, offering effective solutions or escalating to appropriate teams when necessary.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
    company: "Immensity Group Philippines",
    duration: 'June 2021 - October 2023',    
  },
  {
    id: 2,
    title: "Technical Support Representative",
    desc1: "Issue Resolution: Diagnose and troubleshoot technical issues, including software, hardware, and network problems, providing clear and effective solutions to customers",
    desc2: "Customer Assistance: Respond to technical inquiries from customers via phone, email, or live chat, offering guidance and support to resolve their technical problems",
    className: "md:col-span-2", 
    thumbnail: "./exp2.svg",
    company: "Convergys WCC",
    duration: 'July 2015 – January 2016',
  },
  {
    id: 3,
    title: "TECHNICAL OFFICER",
    desc1: "System Maintenance: Perform regular maintenance, updates, and upgrades on hardware and software systems to ensure optimal performance and security.",
    desc2: "Technical Support: Provide on-site and remote technical support to users, troubleshooting and resolving hardware and software issues promptly.",
    className: "md:col-span-2",
    thumbnail: "./exp3.svg",
    company: "Pulse Digital Network Corporation",
    duration: 'July 2008 – February 2012',
  },
  {
    id: 4,
    title: "Software Developer Intern",
    desc1: "Code Development: Assist in writing, testing, and debugging code for software applications, ensuring adherence to coding standards and project requirements.",
    desc2: "Collaboration: Work closely with team members to understand project goals, contribute to design discussions, and support the implementation of software features.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
    company: "PLDT/SMART",
    duration: 'November 2018 - March 2019 ',
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "./git.svg",
    link: 'https://github.com/bernard-lab'
  },
  {
    id: 2,
    img: "./link.svg",
    link: "https://www.linkedin.com/in/bernardacero/"
  },
  {
    id: 3,
    img: "./fb.svg",
    link: "https://www.facebook.com/pushstart.bern/"
  },
];