import { Experience } from "@/types";

export const aboutContent = {
  headline: "Building scalable software that solves real-world challenges",
  description: `I'm a Full-Stack Python Engineer with a passion for learning and continuous improvement. With over 7 years of experience building web applications, I specialize in developing robust, scalable, and secure systems using Python, Django, Flask, and modern JavaScript frameworks.

My ultimate objective is to become a world-class software engineer, using my skills and expertise to solve real-world challenges faced by individuals and organizations in my community and beyond. Through innovative solutions and a collaborative approach, I aim to make a positive impact in the software engineering industry.`,
  skills: [
    "Python",
    "Django",
    "Flask",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Selenium",
    "REST APIs",
    "Git",
    "WordPress",
  ],
};

export const experiences: Experience[] = [
  // Sorted reverse chronologically (most recent first)
  {
    title: "AWS Cloud Practitioner Certified",
    company: "Amazon Web Services",
    location: "Online",
    startDate: "Jul 2024",
    endDate: "Jul 2024",
    description: "Certified in AWS cloud fundamentals, services, and best practices.",
    type: "education",
  },
  {
    title: "Full-Stack Developer Nanodegree",
    company: "Udacity",
    location: "Online",
    startDate: "Oct 2022",
    endDate: "Oct 2022",
    description:
      "Completed projects in API development, SQL and data modeling, identity and access management, and server deployment with Kubernetes.",
    type: "education",
  },
  {
    title: "Full-Stack Python Engineer",
    company: "Verisage",
    location: "Remote",
    startDate: "Mar 2018",
    endDate: undefined,
    description:
      "Developed models, views, templates, and APIs with Flask, Django, and DjangoCMS. Designed and improved robust, scalable, and secure web-based applications. Managed data-capturing servers using Python and Selenium for Amazon data analysis.",
    type: "work",
  },
  {
    title: "Full-Stack JavaScript Bootcamp",
    company: "VSchool",
    location: "Cape Coast, Ghana",
    startDate: "Dec 2017",
    endDate: "Dec 2017",
    description: "Intensive bootcamp covering full-stack JavaScript development.",
    type: "education",
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Ghana",
    startDate: "Jun 2016",
    endDate: undefined,
    description:
      "Consulted with clients to identify needs and goals. Configured and optimized WordPress websites for performance, security, and SEO. Built personal projects including School Clarity (School Management System), Auto Room Deals, and various API development projects.",
    type: "work",
  },
  {
    title: "Meetinghouse Technology Specialist",
    company: "The Church of Jesus Christ of Latter-day Saints",
    location: "Accra, Ghana",
    startDate: "Sep 2015",
    endDate: "Mar 2017",
    description:
      "Trained stakes and district technology specialists on managing firewalls, internet, and computers across West Africa. Collaborated with local leaders to make the Africa West Area lead globally in technology specialist deployment.",
    type: "work",
  },
  {
    title: "Bachelor of Science, Computer Science",
    company: "University of Cape Coast",
    location: "Cape Coast, Ghana",
    startDate: "2008",
    endDate: "May 2012",
    description:
      "Studied computer science fundamentals. Undergraduate thesis: 'Cloud Computing and Universities in Ghana - A Marriage of Convenience.'",
    type: "education",
  },
];
