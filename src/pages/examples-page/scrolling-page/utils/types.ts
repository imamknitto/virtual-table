export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  status: 'active' | 'inactive';
  location: string;
  manager: string;
  performance: number;
};

export type ScrollPosition = {
  scrollTop: number;
  scrollLeft: number;
};
