
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-valor-primary to-valor-primary/90 p-4">
      <div className="bg-white border border-gray-200 shadow-sm rounded-md p-8 md:p-12 text-center max-w-lg mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-valor-primary">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-valor-dark">Página não encontrada</h2>
        <p className="text-valor-dark/80 mb-6">
          Desculpe, a página que você está procurando não existe ou foi movida para outro endereço.
        </p>
        <a 
          href="/" 
          className="valor-button-primary px-5 py-2.5 inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
