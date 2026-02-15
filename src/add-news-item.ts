// This script adds the CBSE Board Results news item
import { useAdmin } from '@/contexts/AdminContext';

export const addCBSEBoardResults = () => {
  const { addNews } = useAdmin();
  
  const newsItem = {
    title: "CBSE Board Results - 98% Pass Rate",
    excerpt: "R.G.N. Public School achieves outstanding results in CBSE Board Examinations.",
    content: "We are proud to announce that R.G.N. Public School has achieved a remarkable 98% pass rate in the CBSE Board Examinations. Our students have shown exceptional performance with 15 students scoring above 95% marks. This outstanding result reflects the dedication of our teachers and the hard work of our students. The school management congratulates all students, parents, and teachers for this collective achievement.",
    date: new Date().toISOString().split('T')[0], // Today's date
    category: "news" as const,
    image: "/class 12.jpg"
  };
  
  addNews(newsItem);
  console.log("CBSE Board Results news item added successfully!");
};
