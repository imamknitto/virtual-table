import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { columns, dummyData, type IUser } from './lib/data';
import { VirtualTableV5 } from './components/virtual-table-v5';

export default function App() {
  const contextMenuRef = useRef<ContextMenuHandle | null>(null);

  const handleRightClick = useCallback((data: IUser, position: { x: number; y: number }) => {
    requestAnimationFrame(() => {
      contextMenuRef.current?.open(data, position);
    });
  }, []);

  const contextMenuComponent = useMemo(() => <ContextMenu ref={contextMenuRef} />, []);

  return (
    <>
      <div className='h-screen p-5 flex flex-col space-y-4'>
        <p className='mb-5'>Data length: {dummyData.length}</p>
        <div className='flex-1 overflow-auto'>
          <VirtualTableV5
            useFooter
            data={dummyData}
            headers={columns}
            headerMode='double'
            rowKey='name'
            headerHeight={40}
            filterHeight={32}
            footerHeight={40}
            onClickRow={(data) => console.log('PARENT | klik row: ', data)}
            onDoubleClickRow={(data) => console.log('PARENT | klik double row: ', data)}
            onRightClickRow={handleRightClick}
            onChangeCheckboxRowSelection={(selectedRows, deselectedRows, isSelectAll) => {
              console.log('PARENT | Selected rows:', { selectedRows, deselectedRows, isSelectAll });
            }}
            onRenderExpandedContent={(data) => (
              <div className='p-5 border border-gray-200 bg-green-50'>
                <h4 className='text-lg font-semibold'>Expanded Content</h4>
                <pre>
                  <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
              </div>
            )}
          />
        </div>
      </div>

      {createPortal(contextMenuComponent, document.body)}
    </>
  );
}

type ContextMenuHandle = {
  open: (data: IUser, position: { x: number; y: number }) => void;
  close: () => void;
};

const ContextMenu = forwardRef<ContextMenuHandle>(function ContextMenu(_, ref) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useImperativeHandle(
    ref,
    () => ({
      open: (_payload, pos) => {
        setPosition(pos);
        setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }),
    [],
  );

  const contextMenuItems = useMemo(() => ['Hapus', 'Edit', 'Detail', 'Launch'], []);

  const handleItemClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const target = e.target as Node;
      if (!containerRef.current.contains(target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className='fixed z-50'
      style={{
        top: 0,
        left: 0,
        willChange: 'transform',
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        display: isOpen ? 'block' : 'none',
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className='w-32 h-auto flex flex-col bg-white rounded shadow-2xl divide-y divide-gray-300 text-gray-800 overflow-hidden'>
        {contextMenuItems.map((item) => (
          <button
            key={item}
            type='button'
            className='h-7 text-left cursor-pointer text-xs flex items-center px-2 hover:bg-gray-300'
            onClick={handleItemClick}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
});
