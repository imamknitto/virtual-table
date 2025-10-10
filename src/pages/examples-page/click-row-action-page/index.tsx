import { memo, useMemo } from 'react';
import {
  FeaturesSection,
  ImplementationTipsSection,
  NextStepsSection,
  PreviewSection,
} from './components';
import { useRowInteractions } from './hooks';
import { generateSampleData } from './utils';

const ClickRowActionPage = () => {
  const data = useMemo(() => generateSampleData(), []);
  const {
    selectedRow,
    doubleClickedRow,
    contextMenuPosition,
    contextMenuRow,
    showContextMenu,
    interactionLog,
    handleClickRow,
    handleDoubleClickRow,
    handleRightClickRow,
    handleContextMenuAction,
    handleCloseContextMenu,
  } = useRowInteractions();

  return (
    <div className='space-y-8'>
      {/* Page Header */}
      <div>
        <h1 className='text-4xl font-bold tracking-tight'>Click Row Actions</h1>
        <p className='text-xl text-muted-foreground mt-4'>
          Learn how to handle row interactions in the Virtual Table. Support for single click,
          double click, and right-click events with full context information.
        </p>
      </div>

      {/* Preview Section */}
      <PreviewSection
        contextMenuPosition={contextMenuPosition}
        contextMenuRow={contextMenuRow}
        data={data}
        doubleClickedRow={doubleClickedRow}
        interactionLog={interactionLog}
        onClickRow={handleClickRow}
        onCloseContextMenu={handleCloseContextMenu}
        onContextMenuAction={handleContextMenuAction}
        onDoubleClickRow={handleDoubleClickRow}
        onRightClickRow={handleRightClickRow}
        selectedRow={selectedRow}
        showContextMenu={showContextMenu}
      />

      {/* Features Section */}
      <FeaturesSection />

      {/* Implementation Tips */}
      <ImplementationTipsSection />

      {/* Next Steps */}
      <NextStepsSection />
    </div>
  );
};

export default memo(ClickRowActionPage);

