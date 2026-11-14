import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import XrFormatDeck from "./pages/XrFormatDeck";
import ServicesDeck from "./pages/ServicesDeck";
import NotFound from "./pages/NotFound";
import PreviewRouter from "./PreviewRouter";

// Private preview builds switch decks with #atrium / #services; the real site uses normal page addresses.
const Router = import.meta.env.VITE_PREVIEW === "true" ? PreviewRouter : BrowserRouter;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/xr-format" element={<XrFormatDeck />} />
          <Route path="/services" element={<ServicesDeck />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
