import clsx from 'clsx';
import { forwardRef, useCallback, useEffect, useRef, useState, lazy, Suspense } from 'react';

const IcClose = lazy(() => import('../icons/ic-close'));

interface ITableVirtualInput extends React.InputHTMLAttributes<HTMLInputElement> {
  onClickEnter?: () => void;
  onRemoveSearch?: () => void;
  onDebouncedChange?: (value: string) => void;
  debounceDelay?: number;
}

const InputSearch = forwardRef<HTMLInputElement, ITableVirtualInput>(
  (
    { onClickEnter, className, onRemoveSearch, value, onChange, onDebouncedChange, debounceDelay = 300, ...props },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState<string>('');
    const timeoutRef = useRef<number | undefined>(undefined);

    // Handle input change with debouncing
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange?.(e);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        if (onDebouncedChange) {
          timeoutRef.current = setTimeout(() => {
            onDebouncedChange(newValue);
          }, debounceDelay);
        }
      },
      [onChange, onDebouncedChange, debounceDelay],
    );

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(String(value));
      }
    }, [value]);

    useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, []);

    return (
      <div className='!w-full relative group/input'>
        <input
          ref={ref}
          type='text'
          placeholder=''
          className={clsx(
            'outline-none border bg-white dark:bg-black/50 border-gray-200 rounded h-[1.625rem] px-1.5 w-full text-xs focus:border-blue-950',
            'transition-all duration-300 font-medium',
            className,
          )}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && onClickEnter?.()}
          {...props}
        />

        {!props.disabled && (
          <Suspense fallback={<div className='w-4 h-4' />}>
            <IcClose
              onClick={onRemoveSearch}
              className={clsx(
                '!w-4 absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer',
                'opacity-0 group-hover/input:opacity-100 transition-opacity duration-200 hover:text-red-600',
              )}
            />
          </Suspense>
        )}
      </div>
    );
  },
);

InputSearch.displayName = 'InputSearch';

export default InputSearch;
