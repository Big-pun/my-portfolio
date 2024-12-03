import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Rediriger après 3 secondes
    const timer = setTimeout(() => {
      navigate("/"); // Redirige vers la page d'accueil
    }, 3000);

    // Nettoyer le timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>Page non trouvée. Vous allez être redirigé...</h2>
    </div>
  );
}

export default ErrorPage;
