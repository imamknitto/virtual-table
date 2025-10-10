export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'active' | 'inactive' | 'discontinued';
  lastUpdated: string;
  description: string;
};

export type ContextMenuPosition = {
  x: number;
  y: number;
};

