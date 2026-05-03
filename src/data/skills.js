import { 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';

export const skills = [
  {
    category: "MERN Stack",
    icon: Code2,
    items: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    category: "Backend & DB",
    icon: Database,
    items: ["MySQL", "REST APIs", "JWT Auth", "RBAC", "MVC Pattern"]
  },
  {
    category: "Cloud & Devops",
    icon: Cloud,
    items: ["AWS (Hands-on)", "Azure (Ready)", "Google Cloud", "Vercel", "Render"]
  },
  {
    category: "Tools & OS",
    icon: Terminal,
    items: ["Git/GitHub", "Postman", "n8n", "Linux", "Docker"]
  },
  {
    category: "Core CS",
    icon: ShieldCheck,
    items: ["Data Structures", "Algorithms", "DBMS", "OS", "System Design"]
  }
];
