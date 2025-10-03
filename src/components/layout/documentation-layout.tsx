import { useState } from 'react';
import { MainContent } from './main-content';
import { Header } from './header';
import { Sidebar } from './sidebar';

type DocumentationLayoutProps = {
  children: React.ReactNode;
};

export const DocumentationLayout = ({ children }: DocumentationLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className='min-h-screen bg-background'>
      <Header onMenuToggle={toggleSidebar} />

      <div className='flex min-h-[calc(100vh-3.5rem)]'>
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};
