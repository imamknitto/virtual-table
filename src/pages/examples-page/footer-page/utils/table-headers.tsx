import type { IHeader } from '../../../../components/virtual-table';
import type { SampleData } from './types';

export const getBasicHeaders = (
  data: SampleData[],
  CalculationFooter: React.ComponentType<{ data: SampleData[]; columnKey: string }>,
  TotalsFooter: React.ComponentType,
): IHeader<SampleData>[] => [
  { key: 'id', caption: 'ID', width: 100 },
  { key: 'product', caption: 'Product', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  {
    key: 'quantity',
    caption: 'Quantity',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='quantity' data={data} />,
  },
  {
    key: 'unitPrice',
    caption: 'Unit Price',
    width: 120,
    renderFooter: () => <TotalsFooter />,
  },
  {
    key: 'total',
    caption: 'Total',
    width: 120,
    renderFooter: () => <CalculationFooter columnKey='total' data={data} />,
  },
  {
    key: 'discount',
    caption: 'Discount %',
    width: 140,
    renderFooter: () => <CalculationFooter columnKey='discount' data={data} />,
  },
  {
    key: 'finalAmount',
    caption: 'Final Amount',
    width: 130,
    renderFooter: () => <CalculationFooter columnKey='finalAmount' data={data} />,
  },
  {
    key: 'status',
    caption: 'Status',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='status' data={data} />,
  },
];

export const getAdvancedHeaders = (
  data: SampleData[],
  CalculationFooter: React.ComponentType<{ data: SampleData[]; columnKey: string }>,
  TotalsFooter: React.ComponentType,
  ActionsFooter: React.ComponentType,
): IHeader<SampleData>[] => [
  { key: 'id', caption: 'ID', width: 100, freeze: 'left' },
  { key: 'product', caption: 'Product', width: 200, freeze: 'left' },
  { key: 'category', caption: 'Category', width: 150 },
  {
    key: 'quantity',
    caption: 'Quantity',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='quantity' data={data} />,
  },
  {
    key: 'unitPrice',
    caption: 'Unit Price',
    width: 120,
    renderFooter: () => <TotalsFooter />,
  },
  {
    key: 'total',
    caption: 'Total',
    width: 120,
    renderFooter: () => <CalculationFooter columnKey='total' data={data} />,
  },
  {
    key: 'discount',
    caption: 'Discount %',
    width: 140,
    renderFooter: () => <CalculationFooter columnKey='discount' data={data} />,
  },
  {
    key: 'finalAmount',
    caption: 'Final Amount',
    width: 130,
    renderFooter: () => <CalculationFooter columnKey='finalAmount' data={data} />,
  },
  {
    key: 'status',
    caption: 'Status',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='status' data={data} />,
  },
  { key: 'region', caption: 'Region', width: 120, freeze: 'right' },
  {
    key: 'salesRep',
    caption: 'Sales Rep',
    width: 150,
    freeze: 'right',
    renderFooter: () => <ActionsFooter />,
  },
];

export const getSummaryHeaders = (
  data: SampleData[],
  CalculationFooter: React.ComponentType<{ data: SampleData[]; columnKey: string }>,
  TotalsFooter: React.ComponentType,
  SummaryFooter: React.ComponentType,
  ActionsFooter: React.ComponentType,
): IHeader<SampleData>[] => [
  {
    key: 'id',
    caption: 'ID',
    width: 100,
    renderFooter: () => <SummaryFooter />,
  },
  { key: 'product', caption: 'Product', width: 200 },
  { key: 'category', caption: 'Category', width: 150 },
  {
    key: 'quantity',
    caption: 'Quantity',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='quantity' data={data} />,
  },
  {
    key: 'unitPrice',
    caption: 'Unit Price',
    width: 120,
    renderFooter: () => <TotalsFooter />,
  },
  {
    key: 'total',
    caption: 'Total',
    width: 120,
    renderFooter: () => <CalculationFooter columnKey='total' data={data} />,
  },
  {
    key: 'discount',
    caption: 'Discount %',
    width: 140,
    renderFooter: () => <CalculationFooter columnKey='discount' data={data} />,
  },
  {
    key: 'finalAmount',
    caption: 'Final Amount',
    width: 130,
    renderFooter: () => <CalculationFooter columnKey='finalAmount' data={data} />,
  },
  {
    key: 'status',
    caption: 'Status',
    width: 100,
    renderFooter: () => <CalculationFooter columnKey='status' data={data} />,
  },
  { key: 'region', caption: 'Region', width: 120 },
  {
    key: 'salesRep',
    caption: 'Sales Rep',
    width: 150,
    renderFooter: () => <ActionsFooter />,
  },
];
