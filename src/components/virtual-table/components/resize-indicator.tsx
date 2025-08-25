import clsx from 'clsx';
import React, { memo, useMemo } from 'react';

interface ResizeIndicatorProps {
  outerTableHeight: number;
  onMouseDown: (e: React.MouseEvent<HTMLElement>) => void;
  isMoving: boolean;
  left: number;
}

function ResizeIndicator(props: ResizeIndicatorProps) {
  const { onMouseDown, isMoving = false, left, outerTableHeight } = props;

  // Memoize styles untuk mengurangi re-computation
  const indicatorStyle = useMemo(() => ({
    height: outerTableHeight - 2,
    width: 4,
    left: left - 4,
  }), [outerTableHeight, left]);

  const handleClassName = useMemo(() => clsx(
    'w-1 h-full cursor-col-resize z-[9999] group-hover/outer:bg-blue-500/10',
    'absolute right-0 top-1/2 -translate-y-1/2',
  ), []);

  return (
    <>
      <div
        className={handleClassName}
        onMouseDown={onMouseDown}
      />

      {isMoving && (
        <div
          className='absolute bg-blue-500/10 z-[9999999]'
          style={indicatorStyle}
        />
      )}
    </>
  );
}

export default memo(ResizeIndicator);
