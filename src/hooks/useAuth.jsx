import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuth = () => {
  // eslint-disable-next-line no-undef
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;