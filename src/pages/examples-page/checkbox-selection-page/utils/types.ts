export type Employee = {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  city: string;
  country: string;
  salary: number;
  status: 'Active' | 'Inactive' | 'Pending';
  department: 'Engineering' | 'Marketing' | 'Sales' | 'HR' | 'Finance';
};

