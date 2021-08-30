const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nicholas Khami | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Nicholas Portfolio",
    type: "website",
    url: "https://nicholaskhami.com/",
  },
};

//Home Page
const greeting = {
  title: "Hello!",
  sub: "Nicholas Khami",
  logo_name: "Nicholas Khami",
  resumeLink: "https://www.nicholaskhami.com/documents/data_science_resume.html",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/kmkhami",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/nicholas-khami-5a0a7a135/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Machine Learning using GANS and other techniques",
        "⚡ Experience with Data Cleaning, processing & Analysing using Pandas, NumPy, and Matplotlib",
        "⚡ Experience with various Javascript frameworks in both mobile and web development",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "bi:diagram-2",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS, and Ruby on Rails",
        "⚡ Have created application backends in Node, Express & Serverless APIs",
        "⚡ Experience in Domain & Hosting using AWS, Vercel, Heroku, and Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Blockchain",
      fileName: "DesignImg",
      skills: [
        "⚡ Designed a Coinbase integration demo at NelNet PaymentSpring over the course of a week",
        "⚡ Hosted and setup personal nodes for chain resolution"
      ],
      softwareSkills: [
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "simple-icons:bitcoin",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Monero",
          fontAwesomeClassname: "simple-icons:monero",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Contactless Payment",
          fontAwesomeClassname: "simple-icons:contactlesspayment",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Coinbase",
          fontAwesomeClassname: "simple-icons:coinbase",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "Optimal Well Location Selector",
      img_path: "RF.gif",
      description:
        "A project that used the Python Data Stack to create a ML algorithm that would select optimal well locations in a theoretical basin.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "PyTorch",
          color: "#004782",
        },
        {
          lang: "RandomForest",
          color: "#820032",
        },
        {
          lang: "conocophillips",
          color: "#00a100",
        },
        {
          lang: "Jupyter",
          color: "#ff4b4b",
        }
      ],
      link: "https://github.com/kmkhami/Well_Location_Selection",
      code: "https://github.com/kmkhami/Well_Location_Selection",
      linkcolor: "white",
    },
    {
      title: "Automatic Feature Highlighting In Noisy RES Data",
      img_path: "gan.gif",
      description:
        "First author on a Computer Vision research paper that uses CycleGAN for denoising.",
      tags: [
        {
          lang: "python",
          color: "red",
        },
        {
          lang: "CycleGAN",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "PyTorch",
          color: "#4257f5",
        },
        {
          lang: "Jupyter",
          color: "#ff4b4b",
        },
      ],
      link: "https://www.nicholaskhami.com/documents/Feature_Highlighting_Prepublication.pdf",
      code: "https://www.nicholaskhami.com/documents/Feature_Highlighting_Prepublication.pdf",
      linkcolor: "white",
    },
    {
      title: "RapiDocs",
      img_path: "EHR-Preview.gif",
      description:
        "A webapp to allow patients to take control of their EHR data.",
      tags: [
        {
          lang: "React.JS",
          color: "#004782",
        },
        {
          lang: "HTML5",
          color: "#8700b0",
        },
        {
          lang: "CSS3",
          color: "#c47206",
        },
        {
          lang: "Firebase",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://devpost.com/software/rapidocs",
      code: "https://github.com/Abinavraj5427/rapidocs",
      linkcolor: "white",
    }
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Undergraduate Data Science Researcher",
        subtitle: "ConocoPhillips and UT Austin",
        date: "August 2020 - May 2021",
        content: [
          "Utilized the Python data stack to to perform statistcal analysis on geological survey data.",
          "Communicated research observations through markdown documentation in Jupyter notebooks and slidedeck presentations.",
          "Deployed a RandomForestRegressor to make suggestions about the best well locations in a given geological area.",
          "Used CycleGAN to develop a new technique for denoising and isolating layers in Radio-Echo-Sounding data that is currently in pre-publication."
        ],
      },
      {
        title: "Software Engineering Intern",
        subtitle: "NelNet PaymentSpring",
        date: "August 2020 - Current",
        content: [
          "Managed docker containers and configuration for multi-tier development environment.",
          "Tested and deployed code onto AWS EC2 instances.",
          "Worked with PostgresSQL database and related back-end technologies.",
          "Wrote back-end code in Ruby for a Ruby on Rails server-side web application framework."
        ],
      }
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor of Computer Science",
          subtitle: "University of Texas at Austin",
          date: "2020 - 2024",
          content: ["GPA: 3.96"]
        },
        {
          title: "Bachelor of Applied Mathematics",
          subtitle: "University of Texas at Austin",
          date: "2020 - 2024",
          content: ["GPA: 3.96"]
        },
      ],
    }
  ],
};

//certificate cards
// const certifications = {
//   certifications: [
//     {
//       title: "Tableau Analyst",
//       subtitle: "Tableau",
//       logo_path: "tabana-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Consumer",
//       subtitle: "Tableau",
//       logo_path: "tabcon-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Problem solving",
//       subtitle: "HackerRank",
//       logo_path: "problem-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Python",
//       subtitle: "HackerRank",
//       logo_path: "python-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Certificate of Merit",
//       subtitle: "Summer Analytics | IIT Guwahati",
//       logo_path: "iitg-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "IITG",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Desktop Qualified Associate",
//       subtitle: "SimpliLearn",
//       logo_path: "simplilearn-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Simplilearn",
//       color_code: "#000000",
//     },
//     {
//       title: "Question Generation using Transformers",
//       subtitle: "Udemy",
//       logo_path: "udemy-01.png",
//       certificate_link:
//         "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
//       alt_name: "Udemy",
//       color_code: "#000000",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "Stanford University",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Visualization",
//       subtitle: "University of Michigan",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "University of Michigan",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Scientist Career Track",
//       subtitle: "DataCamp",
//       logo_path: "datacamp-01.png",
//       certificate_link:
//         "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
//       alt_name: "DataCamp",
//       color_code: "#000000",
//     },
//     {
//       title: "PowerBI Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can work with ML, AI, React, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "2505 San Gabriel St. Austin, TX 78705",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+12487614355",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kmkhami",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nicholas-khami-5a0a7a135/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:nicholas.khami@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  resumeleft,
  resumeright,
};
