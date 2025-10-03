type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent = ({ children }: MainContentProps) => {
  return (
    <main className='flex-1 overflow-auto'>
      <div className='container max-w-4xl mx-auto px-4 py-8'>
        <div className='prose prose-slate dark:prose-invert max-w-none'>{children}</div>
      </div>
    </main>
  );
};
