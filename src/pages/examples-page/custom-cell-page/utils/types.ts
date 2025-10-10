export type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  performance: number;
  avatar?: string;
  skills: string[];
};

