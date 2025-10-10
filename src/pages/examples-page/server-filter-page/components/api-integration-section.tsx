import { memo } from 'react';

const ApiIntegrationSection = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold tracking-tight mb-4'>API Integration</h2>
      <div className='border rounded-lg p-4'>
        <h3 className='font-semibold mb-2'>📡 Data Source</h3>
        <p className='text-sm text-muted-foreground mb-3'>
          This example uses <strong>JSONPlaceholder API</strong> - a free fake REST API for
          testing and prototyping:
        </p>
        <ul className='text-sm text-muted-foreground space-y-1 mb-4'>
          <li>
            • <code className='bg-muted px-1 rounded'>https://jsonplaceholder.typicode.com/users</code>{' '}
            - User data
          </li>
          <li>
            • <code className='bg-muted px-1 rounded'>https://jsonplaceholder.typicode.com/posts</code>{' '}
            - Post data
          </li>
        </ul>
        <div className='bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded p-3'>
          <p className='text-sm text-blue-800 dark:text-blue-200'>
            <strong>💡 Tip:</strong> Replace the API endpoints with your own backend API to
            implement real server filtering. The filtering logic can be adapted to work with any REST
            API or GraphQL endpoint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(ApiIntegrationSection);

