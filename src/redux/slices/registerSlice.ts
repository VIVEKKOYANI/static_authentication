import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllUservalue {
  id: number | string;
  name?: string;
  email?: string;
  password?: string;
  company?: string;
  dob?: string;
  department?: string;
  mobile?: number;
  profilePicture?: string;
  joiningDate?: string;
  role?: string;
  address?: string;
  companyname?: string;
  companyaddress?: string;
  experience?: string;
  isActive?: boolean;
}

interface RegisterState {
  allUser: AllUservalue[];
}

const initialState: RegisterState = {
  allUser: [
    {
      id:Date.now().toString(36) + Math.random().toString(36).substr(2),
      address: "Totam animi nemo in",
      email: "contact@gamil.com",
      mobile: 9574170590,
      name: "Signe Russo",
      password: "123456",
      isActive: true,
      profilePicture:
        "blob:http://localhost:3000/38d98a12-15e7-4dbd-b836-65c9807f28e7",
      role: "workspace",
    },
    {
      id:Date.now().toString(36) + Math.random().toString(36).substr(2),
      address: "Totam animi nemo in",
      email: "contact1@gamil.com",
      mobile: 9574170590,
      name: "Signe Russo",
      password: "123456",
      profilePicture:
        "blob:http://localhost:3000/38d98a12-15e7-4dbd-b836-65c9807f28e7",
      role: "superadmin",
    },
    {
      id:Date.now().toString(36) + Math.random().toString(36).substr(2),
      address: "Totam animi nemo in",
      email: "contact2@gamil.com",
      mobile: 9574170590,
      name: "Signe Russo",
      password: "123456",
      companyaddress: 'ssss',
      companyname: 'sssssssss',
      experience: '12',
      role: "employee",
    },
  ],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerAllEmployee: (state, action: PayloadAction<any>) => {
      state.allUser = [...state.allUser, action.payload];
    },
    registerEditEmployee: (state, action: PayloadAction<any>) => {
      state.allUser = action.payload;
    }
  },
});

export const { registerAllEmployee, registerEditEmployee } = registerSlice.actions;
export default registerSlice.reducer;