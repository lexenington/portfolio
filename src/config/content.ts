import { Experience, FeaturedProject } from "@/types";

export const featuredProjects: FeaturedProject[] = [
  {
    name: "EatryCloud",
    tagline: "Cloud-based restaurant management platform",
    description:
      "An all-in-one system for running a restaurant: point of sale, kitchen display, inventory, and Mobile Money payments. Designed offline-first so service never stops when the connection does — orders sync automatically once the restaurant is back online.",
    highlights: [
      "Offline-first POS and Kitchen Display that keep working through outages",
      "Mobile Money and card payments via Paystack",
      "Real-time order flow between front of house and kitchen with Socket.io",
      "Receipt printing on standard ESC/POS thermal printers",
    ],
    tech: [
      "TypeScript",
      "React",
      "Remix",
      "Fastify",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "PowerSync",
      "Railway",
    ],
    liveUrl: "https://eatrycloud.com",
  },
  {
    name: "RunMySales",
    tagline: "AI sales agent for service businesses",
    description:
      "An autonomous sales agent that handles inbound conversations end to end — qualifying leads, uncovering pain points, handling objections, and booking real appointments. Urgent situations escalate to a human, and stale conversations get automatic follow-ups so no lead is dropped.",
    highlights: [
      "21-node conversation engine covering routing, qualification, psychology, and closing",
      "Books real appointments through Claude tool use, not just chat",
      "Automatic human handoff for emergencies from any point in the conversation",
      "Nurture sequences re-engage leads that go quiet",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "React",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "Claude API",
    ],
    status: "In development",
  },
  {
    name: "Webfront360 OS",
    tagline: "Audience-to-customer engine for local businesses",
    description:
      "A content system that finds what a local business should post, writes it, renders the vertical video, schedules it, and learns what converts — so a busy owner earns attention that turns into customers without the daily grind.",
    highlights: [
      "AI pipeline from idea to script with a quality-gate judge before anything ships",
      "Automated vertical video rendering with Remotion, captions, and voiceover",
      "Learns from performance to double down on what converts",
      "Multi-tenant with per-item cost metering and compliance guardrails built in",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Remotion",
      "Claude API",
    ],
    status: "In development",
  },
];

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
