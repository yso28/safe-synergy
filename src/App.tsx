import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import BottomNavigation from "./components/BottomNavigation"; // <== No longer needed!
import Home from "./pages/Home";
import Events from "./pages/Events";
import Training from "./pages/Training";
import Forum from "./pages/Forum";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";
import TopNavigation from "./components/TopNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background pb-4">
          <Header />
          <TopNavigation />
          <div className="pt-32 px-2 max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/training" element={<Training />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
