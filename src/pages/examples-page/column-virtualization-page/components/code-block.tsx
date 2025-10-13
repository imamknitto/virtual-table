import { memo } from 'react';

interface CodeBlockProps {
  code: string;
  title: string;
  language?: string;
}

const CodeBlock = ({ code, title, language = 'tsx' }: CodeBlockProps) => {
  return (
    <div className='rounded-lg border bg-muted/50'>
      <div className='flex items-center justify-between border-b px-4 py-2'>
        <h4 className='text-sm font-medium'>{title}</h4>
        <span className='text-xs text-muted-foreground'>{language}</span>
      </div>
      <pre className='overflow-x-auto p-4'>
        <code className='text-sm'>{code}</code>
      </pre>
    </div>
  );
};

export default memo(CodeBlock);
