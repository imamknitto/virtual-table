import { memo } from 'react';

type AvatarCellProps = {
  name: string;
};

export const AvatarCell = memo(({ name }: AvatarCellProps) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className='flex items-center gap-3'>
      <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium'>
        {initials}
      </div>
      <span className='font-medium'>{name}</span>
    </div>
  );
});

AvatarCell.displayName = 'AvatarCell';

