export type Employee = {
  id: number;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  startDate: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  skills: string[];
  projects: Project[];
};

export type Project = {
  name: string;
  status: 'Active' | 'Completed' | 'On Hold';
  progress: number;
};

export type Company = {
  id: number;
  companyName: string;
  industry: string;
  revenue: number;
  employees: number;
  founded: number;
  ceo: string;
  headquarters: string;
  departments: Department[];
};

export type Department = {
  name: string;
  manager: string;
  employees: number;
  budget: number;
  teams: Team[];
};

export type Team = {
  name: string;
  lead: string;
  members: number;
  projects: number;
  status: 'Active' | 'Inactive' | 'Planning';
};

