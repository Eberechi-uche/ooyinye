import { atom } from "recoil";
export interface AuthModalState {
  view: "Login" | "Sign Up" | "Reset Password" | "Hello";
  open: boolean;
}
const defaultAuthModalState: AuthModalState = {
  view: "Login",
  open: false,
};
export const authModalState = atom<AuthModalState>({
  key: "authModal",
  default: defaultAuthModalState,
});
