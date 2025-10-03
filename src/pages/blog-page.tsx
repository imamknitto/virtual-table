import { Link } from 'react-router-dom';

export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introducing React Virtualized Table v1.0',
      excerpt: 'We\'re excited to announce the release of React Virtualized Table v1.0 with improved performance and new features.',
      date: '2024-01-15',
      author: 'Development Team',
      readTime: '5 min read',
      category: 'Release',
    },
    {
      id: 2,
      title: 'Performance Optimization Tips for Large Datasets',
      excerpt: 'Learn how to optimize your React applications when working with large datasets and virtual scrolling.',
      date: '2024-01-10',
      author: 'John Doe',
      readTime: '8 min read',
      category: 'Performance',
    },
    {
      id: 3,
      title: 'Building Accessible Data Tables',
      excerpt: 'A comprehensive guide to creating accessible data tables that work for all users.',
      date: '2024-01-05',
      author: 'Jane Smith',
      readTime: '6 min read',
      category: 'Accessibility',
    },
    {
      id: 4,
      title: 'Custom Styling with CSS-in-JS',
      excerpt: 'Explore different approaches to styling your virtual tables with modern CSS-in-JS solutions.',
      date: '2023-12-28',
      author: 'Mike Johnson',
      readTime: '7 min read',
      category: 'Styling',
    },
    {
      id: 5,
      title: 'React 18 Concurrent Features and Virtual Scrolling',
      excerpt: 'How React 18\'s concurrent features can improve the performance of virtual scrolling implementations.',
      date: '2023-12-20',
      author: 'Sarah Wilson',
      readTime: '10 min read',
      category: 'React',
    },
    {
      id: 6,
      title: 'Testing Virtual Tables: Best Practices',
      excerpt: 'Comprehensive testing strategies for virtual tables including unit tests, integration tests, and E2E testing.',
      date: '2023-12-15',
      author: 'Alex Chen',
      readTime: '9 min read',
      category: 'Testing',
    },
  ];

  const categories = ['All', 'Release', 'Performance', 'Accessibility', 'Styling', 'React', 'Testing'];

  return (
    <div className='space-y-8'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Blog</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Stay updated with the latest news, tutorials, and insights about React Virtualized Table.
        </p>
      </div>

      {/* Category Filter */}
      <div className='flex flex-wrap gap-2'>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              category === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {blogPosts.map((post) => (
          <article key={post.id} className='rounded-lg border bg-card p-6 hover:shadow-md transition-shadow'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full'>
                {post.category}
              </span>
              <span className='text-xs text-muted-foreground'>{post.readTime}</span>
            </div>
            
            <h2 className='text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors'>
              <Link to={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className='text-sm text-muted-foreground mb-4 line-clamp-3'>
              {post.excerpt}
            </p>
            
            <div className='flex items-center justify-between text-xs text-muted-foreground'>
              <span>{post.author}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className='rounded-lg border bg-muted/50 p-6'>
        <div className='text-center'>
          <h3 className='font-semibold text-lg mb-2'>Stay Updated</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            Get the latest updates, tutorials, and announcements delivered to your inbox.
          </p>
          <div className='flex gap-2 max-w-md mx-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring'
            />
            <button className='px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* RSS Feed */}
      <div className='text-center'>
        <p className='text-sm text-muted-foreground'>
          Prefer RSS? 
          <a 
            href='/blog/rss.xml' 
            className='ml-1 text-primary hover:underline'
          >
            Subscribe to our RSS feed
          </a>
        </p>
      </div>
    </div>
  );
};
