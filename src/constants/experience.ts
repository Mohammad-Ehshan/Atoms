export type Project = {
  name: string;
  link?: string;
};

export type Experience = {
  title: string;
  organization?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  type?: string;
  description?: string[];
  projects?: Project[];
  linkedinPost?: string;
  achievement?: string;
  images?: string[];
  tags?: string[];
  teamName?: string;
  teamMembers?: string[];
};


export const experiences: Experience[] = [
  {
    "title": "FullStack Developer",
    "organization": "Elite Coder",
    "startDate": "2025-07",
    "endDate": "2025-08",
    "location": "",
    "type": "Internship",
    "description": [
      "Full-stack development internship"
    ],
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/elitecoder1.png"],
    "tags": ["Internship", "FullStack"],
    "teamName": "Elite Coder",
    "teamMembers": []
  },
  {
    "title": "Google Agentic Hackathon",
    "organization": "Google Cloud + Hack2skill",
    "startDate": "2025-07-26",
    "endDate": "2025-07-27",
    "location": "BIEC , Bangalore, India",
    "type": "Mentorship",
    "description": [
      "Mentored 50+ teams on Agentic Ai solutions"
    ],
    "projects": [],
    "linkedinPost": "",
    "achievement": "Mentored at largest AI hackathon",
    "images": ["/photosByEhshan/googleagentic1.jpeg", "/photosByEhshan/googleagentic2.jpeg", "/photosByEhshan/googleagentic3.jpeg", "/photosByEhshan/googleagentic4.jpeg","/photosByEhshan/googleagentic5.jpeg", "/photosByEhshan/googleagentic6.jpeg"],
    "tags": ["Mentor","GoogleAgentic","GuniessWorldRecord"],
    "teamName": "Solo",
    "teamMembers": []
  },
  {
    "title": "Hackathon Participant",
    "organization": "Triwizardathon",
    "startDate": "2025-08-02",
    "endDate": "",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": [
      "Presented De-Cognito project",
      "Finished in top 20/1200+ teams"
    ],
    "projects": [
      {
        "name": "De-Cognito",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Top 20",
    "images": ["/photosByEhshan/triwizard1.jpg", "/photosByEhshan/triwizard2.jpg", "/photosByEhshan/triwizard3.jpg"],
    "tags": ["Top 20"],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Algoverse",
    "startDate": "2025-07-18",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": [
      "Presented De-Cognito (OSINT-based cyber investigation tool) to cybercrime experts"
    ],
    "projects": [
      {
        "name": "De-Cognito",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_cybersecurity-osint-hackathon-activity-7353037773446000642-ryUF",
    "achievement": "Shortlisted for Offline Round",
    "images": ["/photosByEhshan/algoverse.jpeg", "/photosByEhshan/decognito1.jpeg","/photosByEhshan/decognito2.jpeg"],
    "tags": [],
    "teamName": "AstraX",
    "teamMembers": ["Mohammad Ehshan","Aditya Singh", "Pooja Bhalla", "Anikesh Kumar"]
  },
  {
    "title": "Mentor",
    "organization": "HackOrbit",
    "startDate": "2025-07-09",
    "location": "Remote",
    "type": "Mentorship",
    "description": [
      "Mentored in national-level hackathon which had over 3,000+ participants"
    ],
    "projects": [],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_how-to-win-a-hackathon-from-a-mentor-activity-7349312409741742080-c1sq",
    "achievement": "",
    "images": ["/photosByEhshan/hackorbit1.jpeg", "/photosByEhshan/hackorbit2.jpeg", "/photosByEhshan/hackorbit3.jpeg"],
    "tags": ["Mentor"],
    "teamName": "Solo",
    "teamMembers": []
  },
  {
    "title": "APIHub",
    "startDate": "2025-06-14",
    "endDate": "2025-06-21",
    "location": "",
    "type": "Hackathon",
    "description": [
      "Built Sparkswipe and Family Vault given in problem statement"
    ],
    "projects": [
      {
        "name": "Sparkswipe",
        "link": ""
      },
      {
        "name": "Family Vault",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/apihub1.png", "/photosByEhshan/sparkswipe1.png"],
    "tags": [],
    "teamName": "Atoms & AstraX",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Aditya Kumar", "AstraX-Anikesh Kumar", "AstraX-Koshal Kumar","AstraX-Aryan Jha", "AstraX-Swayam Jha"]
  },
  {
    "title": "Code Clash 2.0",
    "startDate": "2025-06-23",
    "endDate": "2025-06-25",
    "location": "",
    "type": "Hackathon",
    "description": [
      "Built Kaamly - AI-powered booking agent Powered By OmniDimensionAi"
    ],
    "projects": [
      {
        "name": "Kaamly",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_techthatmatters-hackathon-hackathonbuild-activity-7345717359694778368-3R0p",
    "achievement": "",
    "images": [ "/photosByEhshan/codeclash1.png","/photosByEhshan/kaamly1.jpeg", "/photosByEhshan/kaamly2.jpeg"],
    "tags": [],
    "teamName": "ARCANE",
    "teamMembers": ["Anikesh Kumar","Aryan Jha", "Mohammad Ehshan"]
  },
  {
    "title": "Summer of Product",
    "organization": "HELLOPM",
    "startDate": "2025-06-18",
    "endDate": "2025-06-30",
    "location": "Remote",
    "type": "Case Study",
    "description": [
      "Submitted Eco Cart and Skill Proof case studies"
    ],
    "projects": [
      {
        "name": "Eco Cart",
        "link": ""
      },
      {
        "name": "Skill Proof",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/summerofproduct1.png", "/photosByEhshan/summerofproduct2.png"],
    "tags": [],
    "teamName": "Atoms & AstraX",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Pooja Bhalla","Atoms-Aditya Kumar", "AstraX-Anikesh Kumar", "AstraX-Koshal Kumar","AstraX-Aryan Jha", "AstraX-Swayam Jha"]
  },
  {
    "title": "FullStack Developer",
    "organization": "Hack4Brahma",
    "startDate": "2025-04",
    "endDate": "2025-10",
    "location": "Remote",
    "type": "FreeLance",
    "description": [
      "Developing official hackathon website"
    ],
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/hack4brahma1.png"],
    "tags": ["freelance", "fullstack"],
    "teamName": "Hack4Brahma",
    "teamMembers": []
  },
  {
    "title": "Hackemon",
    "organization": "Geek Room",
    "startDate": "2025-04-25",
    "endDate": "2025-04-27",
    "location": "Galgotias University,Greater Noida, India",
    "type": "Hackathon",
    "description": [
      "Presented RoboPulse project"
    ],
    "projects": [
      {
        "name": "RoboPulse",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/hackemon1.png", "/photosByEhshan/robopulse1.png"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan","N. Aarwin", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "Internship",
    "organization": "ZordieAi",
    "startDate": "2025-03-22",
    "location": "Remote",
    "type": "Internship",
    "description": [
      "Worked on there Website from scratch using NextJs and TailwindCss ",
    ],
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": ["ZordieAi", "Internship", "FullStack"],
    "teamName": "Solo",
    "teamMembers": []
  },
  {
    "title": "HackDucs",
    "organization": "University of Delhi",
    "startDate": "2025-04-19",
    "endDate": "2025-04-20",
    "location": "New Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented MargDarshak project",
      "Selected for offline round"
    ],
    "projects": [
      {
        "name": "MargDarshak",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "Selected for Offline Round",
    "images": ["/photosByEhshan/hackducs1.png"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "Mentor",
    "organization": "Hackhazard",
    "startDate": "2025-04-10",
    "endDate": "2025-04-20",
    "location": "Remote",
    "type": "Mentorship",
    "description": [
      "Mentored in nationwide hackathon which had over 17,000+ participants"
    ],
    "projects": [],
    "linkedinPost": "https://www.linkedin.com/posts/namespaceworld_hackhazards25-namespace-hackathon-ugcPost-7316841930204581888-B0oA",
    "achievement": "",
    "images": ["/photosByEhshan/mentor1.png", "/photosByEhshan/mentor2.jpg", "/photosByEhshan/mentor3.png"],
    "tags": ["Mentor"],
    "teamName": "Solo",
    "teamMembers": []
  },
  {
    "title": "Code Forge",
    "organization": "DoraHacks",
    "startDate": "2025-04-17",
    "location": "Microsoft Gurgaon, India",
    "type": "Hackathon",
    "description": [
      "Presented Fingenie and Rushless projects",
      "Qualified through multiple rounds"
    ],
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      },
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_rushless-smartcity-aiforcities-activity-7319717292139761664-JK-l",
    "achievement": "Top 20",
    "images": ["/photosByEhshan/codeforge1.jpg", "/photosByEhshan/codeforge2.jpg", "/photosByEhshan/codeforge3.jpg"],
    "tags": ["Top 20"],
    "teamName": "Atoms & AstraX",
    "teamMembers": ["AstraX-Mohammad Ehshan", "AstraX-Koshal Kumar", "Atoms-Anikesh Kumar", "Atoms-N. Aarwin"]
  },
  {
    "title": "Innovate",
    "organization": "Avinya",
    "startDate": "2025-04-04",
    "endDate": "2025-04-05",
    "location": "NSUT, Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built CampusBuddy (AI canteen manager, lost & find system, scholarship finder) in 24 hours"
    ],
    "projects": [
      {
        "name": "CampusBuddy",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_avinya25-hackathon-campusbuddy-activity-7314732776711245824-mbIL",
    "achievement": "Winner",
    "images": ["/photosByEhshan/avinya1.jpg", "/photosByEhshan/avinya2.jpg", "/photosByEhshan/avinya3.jpg"],
    "tags": ["Winner"],
    "teamName": "AstraX",
    "teamMembers": ["Aditya Singh", "Mohammad Ehshan", "Anikesh Kumar", "N. Aarwin"]
  },
  {
    "title": "Prastuti",
    "organization": "JIMS",
    "startDate": "2025-03-22",
    "location": "Delhi, India",
    "type": "Ideathon",
    "description": [
      "Presented BioSky research project on air pollution reduction"
    ],
    "projects": [
      {
        "name": "BioSky",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/biosky1.png", "/photosByEhshan/biosky2.png"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "N.Aarwin", "Koshal Kumar"]
  },
  {
    "title": "0to1",
    "startDate": "2025-03-22",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented Fingenie project in finance track",
      "Met sandeep jain(GeeksforGeeks)"
    ],
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_why-was-everyone-rushing-to-the-organizers-activity-7312791032549580801-1H-j",
    "achievement": "",
    "images": ["/photosByEhshan/0to11.jpg", "/photosByEhshan/0to12.jpg", "/photosByEhshan/0to13.jpg"],
    "tags": ["GeeksforGeeks"],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "HackWithImpact",
    "organization": "Ignite Room",
    "startDate": "2025-03-21",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built IoT-based traffic light changer for emergency vehicles using ESP32 and encrypted Bluetooth"
    ],
    "projects": [
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackwithimpact-iiit-innovation-activity-7309877890756530177-RHNI",
    "achievement": "",
    "images": ["/photosByEhshan/hackwithimpact1.jpg", "/photosByEhshan/hackwithimpact2.jpg", "/photosByEhshan/hackwithimpact3.jpg"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan","Aryan Jha","Swayam Jha"]
  },
  {
    "title": "Code With DCG",
    "organization": "Geek Room",
    "startDate": "2025-03-16",
    "endDate": "",
    "location": "DTU, Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented Health Sync project"
    ],
    "projects": [
      {
        "name": "Health Sync",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "Arcane",
    "teamMembers": ["Aryan Jha","N. Aarwin"]
  },
  {
    "title": "Cube Innovators",
    "organization": "TRYST",
    "startDate": "2025-03-11",
    "endDate": "2025-03-12",
    "location": "IIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built AI-powered career mapping tool using Next.js, Python, LangChain, Generative AI"
    ],
    "projects": [
      {
        "name": "MargDarshak",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_finalistatiitdelhi-codeinnovators-tryst2024-activity-7305659385161162752-chUk",
    "achievement": "5th Position",
    "images": ["/photosByEhshan/cubeInnovators1.jpg", "/photosByEhshan/cubeInnovators2.jpg", "/photosByEhshan/cubeInnovators3.jpg"],
    "tags": ["Top 5"],
    "teamName": "Atoms & Arcane",
    "teamMembers": ["Atoms-Mohammad Ehshan","Atoms-Aditya Kumar", "Atoms-N. Aarwin","Atoms-Swayam Jha", "Arcane-Anikesh Kumar", "Arcane-Aryan Jha","Arcane-Koshal Kumar"]
  },
  {
    "title": "Energy Hackathon",
    "organization": "IIT Delhi",
    "startDate": "2025-03-10",
    "location": "IIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented Roboflow project"
    ],
    "projects": [
      {
        "name": "Roboflow",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/energyhackathon1.png", "/photosByEhshan/energyhackathon2.png"],
    "tags": [],
    "teamName": "",
    "teamMembers": []
  },
  {
    "title": "Hack24",
    "startDate": "2025-03-08",
    "endDate": "2025-03-09",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built Information Integration system using docker,node.js and MongoDB in 24 hours"
    ],
    "projects": [
      {
        "name": "Docker",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-docker-iiitdelhi-activity-7306631267528187922-sKpE",
    "achievement": "",
    "images": ["/photosByEhshan/hack241.jpg", "/photosByEhshan/hack242.jpg", "/photosByEhshan/hack243.jpg"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan","Aryan Jha","Anikesh Kumar","Koshal Kumar"]
  },
  {
    "title": "Ai Horizon",
    "organization": "SpaceCon'25",
    "startDate": "2025-02-23",
    "location": "NSUT, Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built AI emotion-analysis and video-storytelling system in 5 hours using Next.js, LLM, Hugging Face, and Firebase"
    ],
    "projects": [
      {
        "name": "Narrato",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_spacecon-ai-mentalhealth-activity-7301143166190055425-8D-6",
    "achievement": "",
    "images": ["/photosByEhshan/aihorizon1.jpg", "/photosByEhshan/aihorizon2.jpg", "/photosByEhshan/aihorizon3.jpg"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "HackFinance",
    "organization": "ECell IIITD",
    "startDate": "2025-02-15",
    "endDate": "2025-02-16",
    "location": "IIIT Delhi, India",
    "type": "Hackathon",
    "description": [
      "Built AI finance management app (expense tracking, budgeting chatbot, advisory system) in 24-hour hackathon"
    ],
    "projects": [
      {
        "name": "Fingenie",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-finance-ai-activity-7298343436233908224-XN9D",
    "achievement": "Top 30",
    "images": ["/photosByEhshan/hackfinance1.jpg", "/photosByEhshan/hackfinance2.jpg", "/photosByEhshan/hackfinance3.jpg"],
    "tags": ["Top 30"],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "N. Aarwin", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "Smart Delhi Ideathon",
    "startDate": "2025-01-31",
    "location": "USAR (GGSIPU East Campus), Delhi, India",
    "type": "Ideathon",
    "description": [
      "Presented Rushless traffic control prototype",
      "Selected among top 30/1000+ teams"
    ],
    "projects": [
      {
        "name": "Rushless",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_smartdelhiideathon-innovation-learning-activity-7293907753218060288-Uztl",
    "achievement": "Top 30 Teams",
    "images": ["/photosByEhshan/smartdelhiideathon1.jpg", "/photosByEhshan/smartdelhiideathon2.jpg", "/photosByEhshan/smartdelhiideathon3.jpg", "/photosByEhshan/smartdelhiideathon4.jpg"],
    "tags": ["Top 30"],
    "teamName": "Arcane",
    "teamMembers": ["Mohammad Ehshan","Aryan Jha","Swayam Jha"]
  },
  {
    "title": "Code Wizards",
    "startDate": "2025-01-28",
    "endDate": "2025-01-29",
    "location": "SRM University, Delhi-NCR",
    "type": "Hackathon",
    "description": [
      "Got Shorlisted for offline round based on Resume",
      "Built Narrato project in 24-hour"
    ],
    "projects": [
      {
        "name": "Narrato",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "Resume Shortlisted",
    "images": ["/photosByEhshan/codewizard1.jpg", "/photosByEhshan/codewizard2.jpg", "/photosByEhshan/codewizard3.jpg", "/photosByEhshan/codewizard4.jpg"],
    "tags": [],
    "teamName": "Arcane",
    "teamMembers": ["Mohammad Ehshan", "Anikesh Kumar", "Aryan Jha", "Koshal Kumar"]
  },
  {
    "title": "Avensis",
    "organization": "HackFormers",
    "startDate": "2025-01-26",
    "location": "MSI, Delhi",
    "type": "Hackathon",
    "description": [
      "Submitted projects and shortlisted for offline round"
    ],
    "projects": [
      {
        "name": "Link-O-Matic",
        "link": ""
      },
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "Shortlisted Top 30",
    "images": ["/photosByEhshan/avensis1.png", "/photosByEhshan/avensis2.jpg"],
    "tags": ["Top30"],
    "teamName": "Arcane & Atoms",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Swayam Jha", "Arcane-Anikesh Kumar", "Arcane-Aryan Jha","Arcane-Koshal Kumar"]
  },
  {
    "title": "Code For Bharat",
    "startDate": "2025-01-25",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": [
      "Presented Link-O-Matic and GreenMindAI"
    ],
    "projects": [
      {
        "name": "Link-O-Matic",
        "link": ""
      },
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "",
    "images": [],
    "tags": [],
    "teamName": "Atoms & Arcane",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Swayam Jha", "Arcane-Anikesh Kumar", "Arcane-Aryan Jha","Arcane-Koshal Kumar"]
  },
  {
    "title": "Hack The Future",
    "organization": "GreenBits with WWF India",
    "startDate": "2025-01-25",
    "location": "WWF Office",
    "type": "Hackathon",
    "description": [
      "Presented GreenMindAI project"
    ],
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "",
    "images": ["/photosByEhshan/hackthefuture1.png"],
    "tags": [],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "N. Aarwin", "Aryan Jha", "Anikesh Kumar"]
  },
  {
    "title": "Hack Data",
    "organization": "Shiv Nadar University",
    "startDate": "2025-01-24",
    "location": "Greater Noida,India",
    "type": "Hackathon",
    "description": [
      "Submitted Health Sync project",
      "Got shortlisted for offline round out of 1000+"
    ],
    "projects": [
      {
        "name": "Health Sync",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "Shortlisted in Top 20% teams",
    "images": ["/photosByEhshan/hackData1.jpg", "/photosByEhshan/hackData2.jpg"],
    "tags": ["Top 20%"],
    "teamName": "Metamorphs",
    "teamMembers": ["Mohammad Ehshan","N. Aarwin"]
  },
  {
    "title": "B-Plan Competition",
    "organization": "E-Cell DTU",
    "startDate": "2025-01-21",
    "location": "Remote",
    "type": "Ideathon",
    "description": [
      "Did Research around Electric Vehicles",
      "Build a comprehensive business plan"
    ],
    "projects": [{
      "name":"Eco Ev Hub",
      "link": ""
    }],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "28th Rank in Business Quiz",
    "images": ["/photosByEhshan/bplan1.jpg", "/photosByEhshan/bplan2.png", "/photosByEhshan/bplan3.png"],
    "tags": ["28th Rank"],
    "teamName": "Arcane",
    "teamMembers": ["Mohammad Ehshan","Aryan Jha","N. Aarwin"]
  },
  {
    "title": "Technovation",
    "organization": "Sharda University",
    "startDate": "2025-01-21",
    "endDate": "2025-01-22",
    "location": "Remote",
    "type": "Hackathon",
    "description": [
      "Presented Rushless project"
    ],
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      },
      {
        "name": "RushLess",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathons-learningbydoing-timemanagement-activity-7292798514470735872-EZgL",
    "achievement": "",
    "images": ["/photosByEhshan/technovation1.jpg"],
    "tags": [],
    "teamName": "Atoms & Arcane",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Swayam Jha", "Arcane-Anikesh Kumar", "Arcane-Aryan Jha","Arcane-Koshal Kumar"]
  },
  {
    "title": "Clash of Code 2.0",
    "organization": "TechNexus Community",
    "startDate": "2025-01-18",
    "location": "Microsoft Office, Gurgaon, India",
    "type": "Hackathon",
    "description": [
      "Finalist in competition with 1000+ participants",
      "Pitched project at Microsoft finals"
    ],
    "projects": [{
        "name": "GreenMindAI",
        "link": ""
      },
      {
        "name": "Link-O-Matic",
        "link": ""
      }],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_clashofcodes-cocv2-technexuscommunity-activity-7286683805409492992-W10D",
    "achievement": "Finalist (Top 17)",
    "images": ["/photosByEhshan/clashOfCode1.jpg", "/photosByEhshan/clashOfCode2.jpg", "/photosByEhshan/clashOfCode3.jpg","/photosByEhshan/clashOfCode4.jpg"],
    "tags": ["Microsoft", "Top 17"],
    "teamName": "Atoms & Arcane",
    "teamMembers": ["Atoms-Mohammad Ehshan", "Atoms-N. Aarwin","Atoms-Swayam Jha", "Arcane-Anikesh Kumar", "Arcane-Aryan Jha","Arcane-Koshal Kumar"]
  },
  {
    "title": "Full Stack Developer",
    "organization": "BizByte Community",
    "startDate": "2024-11",
    "endDate": "2025-04",
    "location": "Remote",
    "type": "FreeLance",
    "description": [
      "Client-based full-stack development work"
    ],
    "projects": [],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/bizbyte1.png"],
    "tags": ["Freelance","FullStack"],
    "teamName": "BizByte",
    "teamMembers": []
  },
  {
    "title": "T-Hacks",
    "organization": "IEEE ADGIPS",
    "startDate": "2024-10-14",
    "location": "ADGIPS, Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented GreenMindAI (5th place) and Link-O-Matic (6th place) projects among 100+ teams"
    ],
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      },
      {
        "name": "Link-O-Matic",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_top6-linkomatic-hackathonjourney-activity-7271798612215394304-g-w0",
    "achievement": "Arcane Bytes-5th & Ai-6th Place",
    "images": ["/photosByEhshan/thacks1.jpg", "/photosByEhshan/thacks2.jpg"],
    "tags": ["Top 6"],
    "teamName": "Ai & Arcane Bytes",
    "teamMembers": ["Ai-Mohammad Ehshan", "Ai-N. Aarwin", "Arcane bytes-Anikesh Kumar","Arcane bytes-Aryan Jha"]
  },
  {
    "title": "HackVortex",
    "organization": "GeekRoom",
    "startDate": "2024-09-25",
    "location": "JIMS, Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented GreenMindAI project"
    ],
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-greenmindai-nextjs-activity-7246424831129239552-_mpd",
    "achievement": "Top 12",
    "images": ["/photosByEhshan/hackvortex1.jpg", "/photosByEhshan/hackvortex2.jpg"],
    "tags": ["Top 12"],
    "teamName": "Ai Sharks",
    "teamMembers": ["Mohammad Ehshan", "Md Imran", "N. Aarwin", "Anikesh Kumar"]
  },
  {
    "title": "Matrix 2.0",
    "organization": "IITM",
    "startDate": "2024-09-20",
    "endDate": "2024-09-21",
    "location": "Delhi, India",
    "type": "Hackathon",
    "description": [
      "Presented GreenMindAI project"
    ],
    "projects": [
      {
        "name": "GreenMindAI",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-greenmindai-nextjs-activity-7246424831129239552-_mpd",
    "achievement": "Participant",
    "images": ["/photosByEhshan/matrix1.jpg"],
    "tags": ["Top 12"],
    "teamName": "Atoms",
    "teamMembers": ["Mohammad Ehshan", "Sumit Rathore", "Md Imran", "N. Aarwin"]
  },
  {
    "title": "Build with Delhi",
    "organization": "Hack with India",
    "startDate": "2024-06-29",
    "location": "ITS Engineering College, Greater Noida, India",
    "type": "Hackathon",
    "description": [
      "Developed Pravasi Path (MERN stack + AI/ML solution for migrant workers)",
      "Selected for offline round among top 100/400+ teams"
    ],
    "projects": [
      {
        "name": "Pravasi Path",
        "link": ""
      }
    ],
    "linkedinPost": "https://www.linkedin.com/posts/mohammad-ehshan-4362a0298_hackathon-buildwithdelhi-pravasipath-activity-7213500738503593984-AfYO",
    "achievement": "Top 100 Teams",
    "images": ["/photosByEhshan/buildwithdelhi1.jpg", "/photosByEhshan/buildwithdelhi2.jpg", "/photosByEhshan/buildwithdelhi3.jpg", "/photosByEhshan/buildwithdelhi4.jpg", "/photosByEhshan/buildwithdelhi5.jpg"],
    "tags": ["Top 100"],
    "teamName": "Dev Dyanamos",
    "teamMembers": ["Sumit Rathore", "MD Imran", "N. Aarwin", "Mohammad Ehshan"]
  },
  {
    "title": "TechMind",
    "organization": "IITM",
    "startDate": "2024-03-15",
    "location": "IITM, Janakpuri,Delhi",
    "type": "Hackathon",
    "description": [
      "Built Seva Samarth project"
    ],
    "projects": [
      {
        "name": "Seva Samarth",
        "link": ""
      }
    ],
    "linkedinPost": "",
    "achievement": "",
    "images": ["/photosByEhshan/sevaSamarth1.png", "/photosByEhshan/sevaSamarth2.png"],
    "tags": [],
    "teamName": "Dev Dyanamos",
    "teamMembers": ["Sumit rathore", "Tanmay Tiwari", "Jai Chawla", "Mohammad Ehshan"]
  }
];