
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import HotelOverview from "./pages/HotelOverview";
import HotelDetail from "./pages/HotelDetail";
import Contact from "./pages/Contact";
import BlogOverview from "./pages/BlogOverview";
import BlogDetail from "./pages/BlogDetail";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/hotels" element={<HotelOverview />} />
            <Route path="/hotel/:id" element={<HotelDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogOverview />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
