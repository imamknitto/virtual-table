import { useCallback, useEffect, useRef, useState } from 'react';

interface ResizableColumnProps {
  currentWidth?: number;
  keyName?: string;
  columnIndex?: number;
  isFreezed?: boolean;
  onMouseUp?: (newSize: number) => void;
}

export default function useResizableColumn(props: ResizableColumnProps) {
  const { currentWidth, onMouseUp } = props;

  const boxRef = useRef<HTMLTableCellElement | null>(null);
  const [resizableWidth, setResizableWidth] = useState<number>(0);
  const [isTempResize, setIsTempResize] = useState<boolean>(false);
  const resizableWidthRef = useRef(resizableWidth);
  const lastUpdateTimeRef = useRef(0);
  const isResizingRef = useRef(false);

  useEffect(() => {
    setResizableWidth(Number(currentWidth));
  }, [currentWidth]);

  // Throttle function untuk mengurangi update yang berlebihan
  const throttle = useCallback((func: () => void, delay: number) => {
    const now = Date.now();
    if (now - lastUpdateTimeRef.current >= delay) {
      func();
      lastUpdateTimeRef.current = now;
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    if (!boxRef.current) return;
    isResizingRef.current = true;
    boxRef.current.requestPointerLock();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizingRef.current) return;

      setIsTempResize(true);

      // Throttle update untuk mengurangi re-render yang berlebihan
      throttle(() => {
        setResizableWidth((prevWidth) => {
          const newWidth = Math.max(32, prevWidth + e.movementX);
          resizableWidthRef.current = newWidth;
          return newWidth;
        });
      }, 16); // ~60fps untuk smooth experience
    },
    [throttle],
  );

  const handleMouseUp = useCallback(() => {
    if (!isResizingRef.current) return;

    isResizingRef.current = false;
    onMouseUp?.(resizableWidthRef.current);
    setIsTempResize(false);
    document.exitPointerLock();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [onMouseUp, handleMouseMove]);

  return { boxRef, handleMouseDown, resizableWidth, isTempResize };
}
