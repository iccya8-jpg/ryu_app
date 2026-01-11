// stores/useUserFormStore.ts
import { create } from 'zustand';

type UserForm = {
  name: string;
  email: string;
  phone: string;
  age: string;
};

type UserFormState = {
  form: UserForm;
  setField: <K extends keyof UserForm>(
    key: K,
    value: UserForm[K]
  ) => void;
  reset: () => void;
};

export const useUserFormStore = create<UserFormState>((set) => ({
  form: {
    name: '',
    email: '',
    phone: '',
    age: '',
  },
  setField: (key, value) =>
    set((state) => ({
      form: { ...state.form, [key]: value },
    })),
  reset: () =>
    set({
      form: {
        name: '',
        email: '',
        phone: '',
        age: '',
      },
    }),
}));
