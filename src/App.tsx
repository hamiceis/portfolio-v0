import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/projeto-1" element={<ProjectDetail />} />
          <Route path="/projects/projeto-2" element={<ProjectDetail />} />
          <Route path="/projects/projeto-3" element={<ProjectDetail />} />
          <Route path="/projects/projeto-4" element={<ProjectDetail />} />
          <Route path="/projects/projeto-5" element={<ProjectDetail />} />
          <Route path="/projects/projeto-6" element={<ProjectDetail />} />
          <Route path="/projects/projeto-7" element={<ProjectDetail />} />
          <Route path="/projects/projeto-8" element={<ProjectDetail />} />
          <Route path="/projects/projeto-9" element={<ProjectDetail />} />
          <Route path="/projects/projeto-10" element={<ProjectDetail />} />
          <Route path="/projects/projeto-11" element={<ProjectDetail />} />
          <Route path="/projects/projeto-12" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
