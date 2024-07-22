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
    title: "Nike Website",
    des: "Recreated e-commerce Nike Website landing page using ReactJS plus Vite and Tailwind.",
    img: "./nike.svg",
    iconLists: ["./re.svg", "./vite.svg", "./js.svg", "./tail.svg", "./vercel.ico"],
    link: "https://nike-website-peach.vercel.app/",
  },
  {    
    id: 3,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "./apple.png",
    iconLists: ["./next.svg", "./tail.svg", "./ts.svg", "./three.svg", "./gsap.svg"],
    link: "https://github.com/bernard-lab/apple-website.git",
  }, 
  {
    id: 4,
    title: "Image Slider",
    des: "Created a smooth image transition animation of wildlife animals combining CSS and JavaScript.",
    img: "./img-slider.png",
    iconLists: ["./html.svg", "./css.svg", "./js.svg"],
    link: "https://github.com/bernard-lab/image-slider.git",
  },
  // {
  //   id: 4,
  //   title: "YouTube Website",
  //   des: "Recreated the old YouTube Website, using HTML, CSS, and JavaScript.",
  //   img: "./yt.png",
  //   iconLists: ["./html.svg", "./css.svg", "./js.svg"],
  //   link: "https://github.com/bernard-lab/yt-recreate.git",
  // },
  
];
  
export const workExperience = [
  {
    id: 1,
    title: "Chat Support Representative",
    desc: "Ensures prompt and proper resolution of customer queries by providing answers, additional information, suggestions to provide a solution according to defined procedures.",
    className: "md:col-span-2",
    thumbnail: "./exp1.svg",
  },
  {
    id: 2,
    title: "Technical Support Representative",
    desc: "Identifies, investigates, and resolves users’ problems with computer software and hardware, or escalating/engaging others in the organization to provide a solution according to defined procedures.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp2.svg",
  },
  {
    id: 3,
    title: "TECHNICAL OFFICER",
    desc: "Responsible for repairing and maintaining computers and servers including hardware, software, network, and computer peripherals.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "./exp3.svg",
  },
  {
    id: 4,
    title: "Software Developer Intern",
    desc: "Developed user-facing features using Java NetBeans.",
    className: "md:col-span-2",
    thumbnail: "./exp4.svg",
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