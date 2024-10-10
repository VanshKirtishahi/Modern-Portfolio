import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Tech Stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently Learning a React.js",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Ochi-Design Clone",
      des: "Exploring React",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/three.svg", "/fm.svg", "/gsap.svg"],
      link: "https://ochi-design-kappa.vercel.app/",
    },
    {
      id: 2,
      title: "Family Golf",
      des: "Clone",
      img: "/p2.svg",
      iconLists: ["/html-icon.svg", "/css-icon.svg", "/js-icon.svg"],
      link: "https://family-golf001.netlify.app/",
    },
    {
      id: 3,
      title: "Weather App",
      des: "To get the weather conditions",
      img: "/p3.svg",
      iconLists: ["/html-icon.svg", "/css-icon.svg", "/js-icon.svg"],
      link: "https://weatherrrrr-appp.netlify.app/",
    },
    {
      id: 4,
      title: "To-Do App",
      des: "Do your targeted work on time",
      img: "/p4.svg",
      iconLists: ["/html-icon.svg", "/css-icon.svg", "/js-icon.svg"],
      link: "https://to-doo-listss.netlify.app/",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Web Developer",
      desc: "Projects in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "GDSC Web Development Member",
      desc: "Designed and developed web app for society using React.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Traning and Placement Co-Ordinator",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/VanshKirtishahi",
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://github.com/VanshKirtishahi",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://github.com/VanshKirtishahi",
    },
  ];