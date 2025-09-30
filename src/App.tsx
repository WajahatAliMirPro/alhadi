import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Fee from "./pages/Fee";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import Qaida from "./pages/courses/Qaida";
import Tajweed from "./pages/courses/Tajweed";
import Hifz from "./pages/courses/Hifz";
import Translation from "./pages/courses/Translation";
import Tafseer from "./pages/courses/Tafseer";
import NahjulBalagha from "./pages/courses/NahjulBalagha";
import MaleTutor from "./pages/tutors/MaleTutor";
import FemaleTutor from "./pages/tutors/FemaleTutor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fee" element={<Fee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/courses/qaida" element={<Qaida />} />
          <Route path="/courses/tajweed" element={<Tajweed />} />
          <Route path="/courses/hifz" element={<Hifz />} />
          <Route path="/courses/translation" element={<Translation />} />
          <Route path="/courses/tafseer" element={<Tafseer />} />
          <Route path="/courses/nahjul-balagha" element={<NahjulBalagha />} />
          <Route path="/tutors/male" element={<MaleTutor />} />
          <Route path="/tutors/female" element={<FemaleTutor />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
