import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  if (!token) return <Navigate to="/login" />;

  if (roleRequired && !roles.includes(`ROLE_${roleRequired}`))
    return <Navigate to="/" />;

  return children;
}
