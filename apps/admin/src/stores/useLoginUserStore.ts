import { create } from 'zustand';
import { LoginUser } from '@apis/auth/auth.ts';

interface LoginUserState {
  loginUser?: LoginUser;
  setLoginUser: (loginUser: LoginUser) => void;
}

export const useLoginUserStore = create<LoginUserState>((setState) => ({
  loginUser: undefined,
  setLoginUser: (loginUser) => setState({ loginUser }),
}));
