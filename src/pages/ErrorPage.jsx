import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  // Par exemple, rediriger l'utilisateur après une erreur
  setTimeout(() => navigate("/"), 3000);

  return (
    <div>
      <h2>Page not found. Redirecting...</h2>
    </div>
  );
}

export default ErrorPage;