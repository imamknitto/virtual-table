import { memo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useClickOutside } from '../../../../components/virtual-table';
import type { ContextMenuPosition, Product } from '../utils';

type ContextMenuProps = {
  isOpen: boolean;
  position: ContextMenuPosition | null;
  row: Product | null;
  onAction: (action: string) => void;
  onClose: () => void;
};

const ContextMenu = ({ isOpen, position, onAction, onClose }: ContextMenuProps) => {
  const contextMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside([contextMenuRef], onClose);

  if (!isOpen || !position) return null;

  return createPortal(
    <div
      ref={contextMenuRef}
      className='fixed z-50 bg-white dark:bg-black/50 dark:backdrop-blur-xl border border-border rounded-lg shadow-lg py-2 min-w-48'
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <button
        className='w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-blue-950 text-sm transition-colors'
        onClick={() => onAction('Edit')}
      >
        ✏️ Edit Product
      </button>
      <button
        className='w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-blue-950 text-sm transition-colors'
        onClick={() => onAction('Duplicate')}
      >
        📋 Duplicate
      </button>
      <button
        className='w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-blue-950 text-sm transition-colors'
        onClick={() => onAction('View Details')}
      >
        👁️ View Details
      </button>
      <hr className='my-1 border-border' />
      <button
        className='w-full px-4 py-2 text-left hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400 text-sm transition-colors'
        onClick={() => onAction('Delete')}
      >
        🗑️ Delete
      </button>
    </div>,
    document.body,
  );
};

export default memo(ContextMenu);
