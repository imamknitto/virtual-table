export const CODE_EXAMPLE = `import { VirtualTable, type IHeader } from '@knitto/virtual-table';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
};

const ProductTable = () => {
  const [data, setData] = useState<Product[]>([
    // Your product data here
  ]);

  // Click handlers
  const handleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    console.log('Row clicked:', item);
    console.log('Position:', rowIndex, columnIndex);
    // Handle single click - e.g., select row, show details
  };

  const handleDoubleClickRow = (item: Product, rowIndex: number, columnIndex: number) => {
    console.log('Row double-clicked:', item);
    // Handle double click - e.g., open edit modal, navigate to detail page
    openEditModal(item);
  };

  const handleRightClickRow = (item: Product, position: { x: number; y: number }) => {
    console.log('Row right-clicked:', item);
    console.log('Mouse position:', position);
    // Handle right click - e.g., show context menu
    showContextMenu(item, position);
  };

  const headers: IHeader<Product>[] = [
    { key: 'name', caption: 'Product Name', width: 200 },
    { key: 'category', caption: 'Category', width: 150 },
    { key: 'price', caption: 'Price', width: 100 },
    { key: 'stock', caption: 'Stock', width: 80 },
    { key: 'status', caption: 'Status', width: 120 },
  ];

  return (
    <VirtualTable
      headers={headers}
      data={data}
      rowKey="id"
      headerMode="double"
      rowHeight={32}
      headerHeight={40}
      filterHeight={32}
      onClickRow={handleClickRow}
      onDoubleClickRow={handleDoubleClickRow}
      onRightClickRow={handleRightClickRow}
    />
  );
};`;

