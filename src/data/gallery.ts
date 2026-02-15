export interface GalleryImage {
  id: string;
  title: string;
  category: "events" | "campus" | "activities";
  image: string;
}

export const galleryData: GalleryImage[] = [
  { id: "1", title: "Annual Day Celebration", category: "events", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop" },
  { id: "2", title: "Science Lab", category: "campus", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop" },
  { id: "3", title: "Sports Day", category: "activities", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop" },
  { id: "4", title: "Library", category: "campus", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop" },
  { id: "5", title: "Art Competition", category: "activities", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop" },
  { id: "6", title: "Independence Day", category: "events", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop" },
  { id: "7", title: "Computer Lab", category: "campus", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
  { id: "8", title: "Dance Performance", category: "activities", image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&h=300&fit=crop" },
  { id: "9", title: "Prize Distribution", category: "events", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=400&h=300&fit=crop" },
  { id: "10", title: "School Building", category: "campus", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop" },
  { id: "11", title: "Yoga Session", category: "activities", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop" },
  { id: "12", title: "Teachers Day", category: "events", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop" },
];
