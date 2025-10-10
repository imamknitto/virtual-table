import { memo } from 'react';
import type { Product } from '../utils';

type InteractionLogProps = {
  selectedRow: Product | null;
  doubleClickedRow: Product | null;
  interactionLog: string[];
};

const InteractionLog = ({ selectedRow, doubleClickedRow, interactionLog }: InteractionLogProps) => {
  return (
    <div className='space-y-4'>
      <div className='border rounded-lg p-4'>
        <h3 className='font-semibold mb-3'>Selected Row</h3>
        {selectedRow ? (
          <div className='text-sm space-y-1'>
            <p>
              <strong>Name:</strong> {selectedRow.name}
            </p>
            <p>
              <strong>Category:</strong> {selectedRow.category}
            </p>
            <p>
              <strong>Price:</strong> ${selectedRow.price}
            </p>
            <p>
              <strong>Stock:</strong> {selectedRow.stock}
            </p>
          </div>
        ) : (
          <p className='text-muted-foreground text-sm'>No row selected</p>
        )}
      </div>

      <div className='border rounded-lg p-4'>
        <h3 className='font-semibold mb-3'>Double-Clicked Row</h3>
        {doubleClickedRow ? (
          <div className='text-sm space-y-1'>
            <p>
              <strong>Name:</strong> {doubleClickedRow.name}
            </p>
            <p>
              <strong>Status:</strong> {doubleClickedRow.status}
            </p>
            <p>
              <strong>Description:</strong> {doubleClickedRow.description.slice(0, 50)}...
            </p>
          </div>
        ) : (
          <p className='text-muted-foreground text-sm'>No row double-clicked</p>
        )}
      </div>

      <div className='border rounded-lg p-4'>
        <h3 className='font-semibold mb-3'>Interaction Log</h3>
        <div className='text-sm space-y-1 max-h-32 overflow-y-auto'>
          {interactionLog.length > 0 ? (
            interactionLog.map((log, index) => (
              <p key={index} className='text-xs bg-muted px-2 py-1 rounded'>
                {log}
              </p>
            ))
          ) : (
            <p className='text-muted-foreground'>No interactions yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(InteractionLog);

