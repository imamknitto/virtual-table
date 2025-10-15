import { memo, useState } from 'react';
import { KnittoTable } from '../../../../components/knitto-table';
import { CODE_EXAMPLE, type Product } from '../utils';
import { getProductHeaders } from '../utils/table-headers';
import CodeBlock from './code-block';
import ContextMenu from './context-menu';
import InteractionLog from './interaction-log';

type PreviewSectionProps = {
  data: Product[];
  selectedRow: Product | null;
  doubleClickedRow: Product | null;
  contextMenuPosition: { x: number; y: number } | null;
  contextMenuRow: Product | null;
  showContextMenu: boolean;
  interactionLog: string[];
  onClickRow: (item: Product, rowIndex: number, columnIndex: number) => void;
  onDoubleClickRow: (item: Product, rowIndex: number, columnIndex: number) => void;
  onRightClickRow: (item: Product, position: { x: number; y: number }) => void;
  onContextMenuAction: (action: string) => void;
  onCloseContextMenu: () => void;
};

const PreviewSection = ({
  data,
  selectedRow,
  doubleClickedRow,
  contextMenuPosition,
  contextMenuRow,
  showContextMenu,
  interactionLog,
  onClickRow,
  onDoubleClickRow,
  onRightClickRow,
  onContextMenuAction,
  onCloseContextMenu,
}: PreviewSectionProps) => {
  const [showCode, setShowCode] = useState(false);
  const headers = getProductHeaders();

  return (
    <section>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Preview</h2>
        <button
          className='inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2'
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Table */}
        <div className='lg:col-span-2'>
          <div className='h-96'>
            <KnittoTable
              classNameCell={(item) => {
                if (selectedRow?.id === item.id)
                  return 'bg-blue-50 dark:bg-blue-950 !border-l-blue-950 dark:!border-blue-800';
                if (doubleClickedRow?.id === item.id)
                  return 'bg-green-50 dark:bg-green-950 !border-l-green-950 dark:!border-green-800';
                return '';
              }}
              data={data}
              filterHeight={32}
              headerHeight={40}
              headerMode='double'
              headers={headers}
              onClickRow={onClickRow}
              onDoubleClickRow={onDoubleClickRow}
              onRightClickRow={onRightClickRow}
              rowHeight={32}
              rowKey='id'
            />
          </div>

          <div className='mt-4 text-sm text-muted-foreground'>
            <p>
              <strong>Try these interactions:</strong>
            </p>
            <ul className='list-disc list-inside space-y-1 mt-2'>
              <li>
                <strong>Single Click:</strong> Select a row (highlighted in blue)
              </li>
              <li>
                <strong>Double Click:</strong> Edit mode (highlighted in green)
              </li>
              <li>
                <strong>Right Click:</strong> Show context menu
              </li>
            </ul>
          </div>
        </div>

        {/* Interaction Log */}
        <InteractionLog doubleClickedRow={doubleClickedRow} interactionLog={interactionLog} selectedRow={selectedRow} />
      </div>

      {/* Context Menu */}
      <ContextMenu
        isOpen={showContextMenu}
        onAction={onContextMenuAction}
        onClose={onCloseContextMenu}
        position={contextMenuPosition}
        row={contextMenuRow}
      />

      {showCode && (
        <div className='mt-4'>
          <CodeBlock code={CODE_EXAMPLE} title='Click Row Actions Example' />
        </div>
      )}
    </section>
  );
};

export default memo(PreviewSection);
