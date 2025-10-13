import { memo } from 'react';
import { Link } from 'react-router-dom';

const NextStepsSection = () => {
  return (
    <section>
      <div className='rounded-lg border bg-muted/50 p-6'>
        <h3 className='font-semibold text-lg mb-2'>🚀 Next Steps</h3>
        <p className='text-sm text-muted-foreground mb-4'>
          Ready to explore more features? Check out these related examples:
        </p>
        <div className='flex flex-wrap gap-2'>
          <Link
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            to='/docs/examples/custom-cells'
          >
            Custom Cells
          </Link>
          <Link
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            to='/docs/examples/freeze-columns'
          >
            Freeze Columns
          </Link>
          <Link
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3'
            to='/docs/examples/large-dataset'
          >
            Large Dataset
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(NextStepsSection);
