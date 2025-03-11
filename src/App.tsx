
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GestaoInovacao from "./pages/GestaoInovacao";
import CaptacaoRecursos from "./pages/CaptacaoRecursos";
import GestaoHibrida from "./pages/GestaoHibrida";
import NovosNegocios from "./pages/NovosNegocios";
import AnaliseViabilidade from "./pages/AnaliseViabilidade";
import InteligenciaEstrategica from "./pages/InteligenciaEstrategica";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/gestao-inovacao" element={<GestaoInovacao />} />
          <Route path="/servicos/captacao-recursos" element={<CaptacaoRecursos />} />
          <Route path="/servicos/gestao-hibrida" element={<GestaoHibrida />} />
          <Route path="/servicos/novos-negocios" element={<NovosNegocios />} />
          <Route path="/servicos/analise-viabilidade" element={<AnaliseViabilidade />} />
          <Route path="/servicos/inteligencia-estrategica" element={<InteligenciaEstrategica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
