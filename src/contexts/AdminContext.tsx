import React, { createContext, useContext, useState, ReactNode } from 'react';
import { NewsItem } from '@/data/news';
import { Notice } from '@/data/notices';
import { GalleryImage } from '@/data/gallery';
import { Enquiry } from '@/data/enquiries';
import { newsData } from '@/data/news';
import { noticesData } from '@/data/notices';
import { galleryData } from '@/data/gallery';
import { enquiriesData } from '@/data/enquiries';

interface AdminContextType {
  news: NewsItem[];
  notices: Notice[];
  gallery: GalleryImage[];
  enquiries: Enquiry[];
  
  // News operations
  addNews: (news: Omit<NewsItem, 'id'>) => void;
  updateNews: (id: string, news: Partial<NewsItem>) => void;
  deleteNews: (id: string) => void;
  
  // Notice operations
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, notice: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  
  // Gallery operations
  addGalleryItem: (item: Omit<GalleryImage, 'id'>) => void;
  updateGalleryItem: (id: string, item: Partial<GalleryImage>) => void;
  deleteGalleryItem: (id: string) => void;
  
  // Enquiry operations
  addEnquiry: (enquiry: Omit<Enquiry, 'id'>) => void;
  updateEnquiry: (id: string, enquiry: Partial<Enquiry>) => void;
  deleteEnquiry: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [news, setNews] = useState<NewsItem[]>(newsData);
  const [notices, setNotices] = useState<Notice[]>(noticesData);
  const [gallery, setGallery] = useState<GalleryImage[]>(galleryData);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(enquiriesData);

  // News operations
  const addNews = (newNews: Omit<NewsItem, 'id'>) => {
    const id = Date.now().toString();
    setNews(prev => [...prev, { ...newNews, id }]);
  };

  const updateNews = (id: string, updatedNews: Partial<NewsItem>) => {
    setNews(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedNews } : item
    ));
  };

  const deleteNews = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  // Notice operations
  const addNotice = (newNotice: Omit<Notice, 'id'>) => {
    const id = Date.now().toString();
    setNotices(prev => [...prev, { ...newNotice, id }]);
  };

  const updateNotice = (id: string, updatedNotice: Partial<Notice>) => {
    setNotices(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedNotice } : item
    ));
  };

  const deleteNotice = (id: string) => {
    setNotices(prev => prev.filter(item => item.id !== id));
  };

  // Gallery operations
  const addGalleryItem = (newItem: Omit<GalleryImage, 'id'>) => {
    const id = Date.now().toString();
    setGallery(prev => [...prev, { ...newItem, id }]);
  };

  const updateGalleryItem = (id: string, updatedItem: Partial<GalleryImage>) => {
    setGallery(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  const deleteGalleryItem = (id: string) => {
    setGallery(prev => prev.filter(item => item.id !== id));
  };

  // Enquiry operations
  const addEnquiry = (newEnquiry: Omit<Enquiry, 'id'>) => {
    const id = Date.now().toString();
    setEnquiries(prev => [...prev, { ...newEnquiry, id }]);
  };

  const updateEnquiry = (id: string, updatedEnquiry: Partial<Enquiry>) => {
    setEnquiries(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedEnquiry } : item
    ));
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(item => item.id !== id));
  };

  return (
    <AdminContext.Provider value={{
      news,
      notices,
      gallery,
      enquiries,
      addNews,
      updateNews,
      deleteNews,
      addNotice,
      updateNotice,
      deleteNotice,
      addGalleryItem,
      updateGalleryItem,
      deleteGalleryItem,
      addEnquiry,
      updateEnquiry,
      deleteEnquiry
    }}>
      {children}
    </AdminContext.Provider>
  );
};
