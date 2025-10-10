export type Employee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  performance: number;
  manager: string;
  location: string;
  skills: string[];
};

export type SalesData = {
  id: number;
  product: string;
  category: string;
  q1Sales: number;
  q2Sales: number;
  q3Sales: number;
  q4Sales: number;
  totalSales: number;
  profit: number;
  margin: number;
  region: string;
  salesRep: string;
};

