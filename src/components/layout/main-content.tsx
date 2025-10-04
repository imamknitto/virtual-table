import { Outlet } from 'react-router-dom';
import PageTransition from '../page-transition';

export const MainContent = () => {
  return (
    <main className='flex-1 overflow-auto'>
      <div className='container max-w-4xl mx-auto px-4 py-8'>
        <PageTransition>
          <div className='prose prose-slate dark:prose-invert max-w-none'>
            <Outlet />
          </div>
        </PageTransition>
      </div>
    </main>
  );
};
