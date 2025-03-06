
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-valor-primary to-valor-primary/80 p-4">
      <div className="glass-card p-10 md:p-16 text-center max-w-lg mx-auto backdrop-blur-md bg-white/10">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-valor-accent">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-valor-light">Página não encontrada</h2>
        <p className="text-valor-light/80 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <a 
          href="/" 
          className="valor-button-accent px-6 py-3 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
