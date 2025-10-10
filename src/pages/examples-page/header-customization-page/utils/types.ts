export type Employee = {
  id: number;
  name: string;
  email: string;
  company: string;
  department: string;
  position: string;
  salary: number;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  experience: number;
  phone: string;
  city: string;
  country: string;
  location: 'Remote' | 'On-site' | 'Hybrid';
};

