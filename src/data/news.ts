export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "news" | "event";
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Annual Sports Day 2025",
    excerpt: "Students showcased their athletic talents in the annual sports day held on school grounds.",
    content: "The Annual Sports Day was a grand success with over 500 students participating in various events including track and field, relay races, and team sports.",
    date: "2025-01-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "CBSE Board Results - 98% Pass Rate",
    excerpt: "R.G.N. Public School achieves outstanding results in CBSE Board Examinations.",
    content: "We are proud to announce that our school has achieved a 98% pass rate in the CBSE Board Examinations with 15 students scoring above 95%.",
    date: new Date().toISOString().split('T')[0],
    category: "news",
    image: "/class 12.jpg",
  },
  {
    id: "3",
    title: "Science Exhibition Winners",
    excerpt: "Our students won first prize at the Inter-School Science Exhibition.",
    content: "Team of 5 students from Class X won the first prize at the District Level Inter-School Science Exhibition with their project on renewable energy.",
    date: "2025-01-20",
    category: "news",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Republic Day Celebration",
    excerpt: "A grand celebration of Republic Day with cultural performances and flag hoisting.",
    content: "The school celebrated Republic Day with great patriotic fervor. The chief guest unfurled the national flag followed by cultural performances.",
    date: "2025-01-26",
    category: "event",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer lab with 40 systems inaugurated for students.",
    content: "A new computer lab equipped with 40 latest systems and high-speed internet was inaugurated by the school chairman.",
    date: "2025-02-10",
    category: "news",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    title: "Parent-Teacher Meeting",
    excerpt: "Quarterly PTM scheduled for all classes to discuss student progress.",
    content: "The quarterly Parent-Teacher Meeting will be held to discuss academic progress, attendance, and overall development of students.",
    date: "2025-02-15",
    category: "event",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop",
  },
];
