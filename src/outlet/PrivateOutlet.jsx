import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export default function PrivateOutlet() {
  const currentUser = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}
