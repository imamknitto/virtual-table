import React from 'react';

type ContentLoadingProps = {
  className?: string;
  message?: string;
};

export const ContentLoading: React.FC<ContentLoadingProps> = ({
  className = '',
  message = 'Loading page...',
}) => {
  return (
    <div
      className={`flex items-center justify-center min-h-[200px] bg-gradient-to-br from-gray-50 to-white ${className}`}
    >
      <div className='flex flex-col items-center space-y-3'>
        {/* Optimized spinner with better performance */}
        <div className='relative'>
          <div className='w-8 h-8 border-3 border-gray-200 rounded-full animate-spin border-t-blue-500'></div>
          <div className='absolute inset-0 w-8 h-8 border-3 border-transparent rounded-full animate-pulse border-t-blue-300'></div>
        </div>

        {/* Loading text with fade animation */}
        <div className='text-center animate-fade-in'>
          <p className='text-gray-600 text-sm font-medium'>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentLoading;
