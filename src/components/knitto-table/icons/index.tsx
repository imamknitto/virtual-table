import { memo, lazy, Suspense } from 'react';
import type { IIconProps } from '../lib';

// Lazy load icons to reduce initial bundle size
const IcCheck = lazy(() => import('./ic-check'));
const IcChevron = lazy(() => import('./ic-chevon'));
const IcClose = lazy(() => import('./ic-close'));
const IcColumn = lazy(() => import('./ic-column'));
const IcCopy = lazy(() => import('./ic-copy'));
const IcDelete = lazy(() => import('./ic-delete'));
const IcDotsVertical = lazy(() => import('./ic-dots-vertical'));
const IcFilterAdvance = lazy(() => import('./ic-filter-advance'));
const IcFilterMultiple = lazy(() => import('./ic-filter-multiple'));
const IcMenu = lazy(() => import('./ic-menu'));
const IcSearch = lazy(() => import('./ic-search'));
const IcSort = lazy(() => import('./ic-sort'));

// Import type for sort icon
import type { IconSortProps } from './ic-sort';

// Icon wrapper component for lazy loading
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className='w-4 h-4' />}>{children}</Suspense>
);

export const icons = {
  close: (props: IIconProps) => (
    <IconWrapper>
      <IcClose {...props} />
    </IconWrapper>
  ),
  chevron: (prop: IIconProps) => (
    <IconWrapper>
      <IcChevron {...prop} />
    </IconWrapper>
  ),
  column: (prop: IIconProps) => (
    <IconWrapper>
      <IcColumn {...prop} />
    </IconWrapper>
  ),
  copy: (prop: IIconProps) => (
    <IconWrapper>
      <IcCopy {...prop} />
    </IconWrapper>
  ),
  sort: (prop: IconSortProps) => (
    <IconWrapper>
      <IcSort {...prop} />
    </IconWrapper>
  ),
  delete: (prop: IIconProps) => (
    <IconWrapper>
      <IcDelete {...prop} />
    </IconWrapper>
  ),
  dotsVertical: (prop: IIconProps) => (
    <IconWrapper>
      <IcDotsVertical {...prop} />
    </IconWrapper>
  ),
  filterAdvance: (prop: IIconProps) => (
    <IconWrapper>
      <IcFilterAdvance {...prop} />
    </IconWrapper>
  ),
  filterMultiple: (prop: IIconProps) => (
    <IconWrapper>
      <IcFilterMultiple {...prop} />
    </IconWrapper>
  ),
  search: (prop: IIconProps) => (
    <IconWrapper>
      <IcSearch {...prop} />
    </IconWrapper>
  ),
  menu: (prop: IIconProps) => (
    <IconWrapper>
      <IcMenu {...prop} />
    </IconWrapper>
  ),
  check: (prop: IIconProps) => (
    <IconWrapper>
      <IcCheck {...prop} />
    </IconWrapper>
  ),
};

type IconName = keyof typeof icons;

type IconProps<Name extends IconName> = Name extends 'sort'
  ? React.ComponentProps<(typeof icons)['sort']>
  : React.ComponentProps<(typeof icons)[Name]>;

type Props<Name extends IconName = IconName> = {
  name: Name;
} & IconProps<Name>;

function Icon<Name extends IconName>({ name, ...rest }: Props<Name>) {
  const Component = icons[name];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Component {...(rest as any)} />;
}

export default memo(Icon) as <Name extends IconName>(props: Props<Name>) => React.ReactNode;
