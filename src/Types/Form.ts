export interface FormProps {
  name: string;
  email: string;
  password: string;
  company: string;
  dob: string;
  department: string;
  mobile: string;
  profilePicture: string;
  joiningDate: string;
  role: string;
}

export interface WorkspaceFormInterFace {
  id: number| string | null;
  profilePicture: string;
  name: string;
  email: string;
  mobile: number| string | null;
  password: string;
  address: string;
  role: string | null | undefined;
}

export interface EmployeeFormInterFace {
  id: number| string | null;
  name: string;
  email: string;
  mobile: number| string | null;
  address: string;
  companyname: string;
  companyaddress: string;
  experience: string;
  role: string | null | undefined;
}