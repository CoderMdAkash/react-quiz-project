import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/signin" />;
};
