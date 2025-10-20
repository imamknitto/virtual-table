import { memo, useMemo, useState } from 'react';
import { CODE_EXAMPLE_ONCLICK } from '../utils/constants';
import { generateEmployeeData } from '../utils/data-generator';
import { getEmployeeHeaders } from '../utils/table-headers';
import { KnittoTable } from '../../../../components/knitto-table';
import CodeBlock from './code-block';

const OnclickDocumentationSection = () => {
  const [selectedRow, setSelectedRow] = useState<unknown | null>(null);
  const [showCode, setShowCode] = useState(false);

  const data = useMemo(() => generateEmployeeData(), []);
  const headers = useMemo(() => getEmployeeHeaders(), []);

  return (
    <div className='space-y-6'>
      <div>
        <h2 className='text-2xl font-bold tracking-tight mb-4'>onClick Row Behavior</h2>
        <p className='text-muted-foreground mb-6'>
          When using rowspan with regular tables, the onClick callback provides different parameter values depending on
          which cell is clicked. This is important for understanding how to handle user interactions in rowspan-enabled
          tables.
        </p>
      </div>

      <div className='border rounded-lg p-6 bg-muted/30'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='text-lg font-semibold'>Interactive Example</h3>
          <button
            className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        <div className='space-y-4'>
          <div className='h-80'>
            <KnittoTable
              rowKey='id'
              isLoading={false}
              headers={headers}
              data={data}
              useRegularTable
              onClickRow={(item, rowIndex, columnIndex, groupOfItems) => {
                setSelectedRow({ item, rowIndex, columnIndex, groupOfItems });
              }}
            />
          </div>

          <div>
            <h5>Selected Row Data:</h5>
            <pre>
              <code className='text-sm'>{JSON.stringify(selectedRow, null, 2)}</code>
            </pre>
          </div>

          {showCode && <CodeBlock code={CODE_EXAMPLE_ONCLICK} title='onClick Implementation Example' />}
        </div>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>Parameter Differences</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-3'>
            <h4 className='font-medium text-green-700 dark:text-green-400'>✅ Regular Cells (No Rowspan)</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>item</code> - The complete row data
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>rowIndex</code> - Actual row position (0-based)
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>columnIndex</code> - Column position (0-based)
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>groupOfItems</code> - Array with single item
              </li>
            </ul>
          </div>

          <div className='space-y-3'>
            <h4 className='font-medium text-blue-700 dark:text-blue-400'>🔄 Rowspan Cells (Merged)</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>item</code> - The complete row data
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>rowIndex</code> - First row of merged group
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>columnIndex</code> - Column position (0-based)
              </li>
              <li>
                • <code className='bg-muted px-1 py-0.5 rounded text-xs'>groupOfItems</code> - All rows in merged group
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg'>
          <h4 className='font-medium text-blue-900 dark:text-blue-100 mb-2'>💡 Key Points:</h4>
          <ul className='space-y-1 text-sm text-blue-800 dark:text-blue-200'>
            <li>
              • <strong>rowIndex</strong> always refers to the first row of a merged group for rowspan cells
            </li>
            <li>
              • <strong>groupOfItems</strong> contains all rows that share the same rowspan value
            </li>
            <li>
              • <strong>item</strong> represents the specific row that was clicked, not the merged group
            </li>
            <li>
              • Use <code className='bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded text-xs'>groupOfItems</code> to
              access all related data when needed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(OnclickDocumentationSection);
