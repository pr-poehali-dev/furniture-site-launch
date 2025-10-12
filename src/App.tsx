
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import KitchenOliva from "./pages/KitchenOliva";
import KitchenSnow from "./pages/KitchenSnow";
import KitchenCaramel from "./pages/KitchenCaramel";
import KitchenChampagne from "./pages/KitchenChampagne";
import KitchenHoney from "./pages/KitchenHoney";
import KitchenAlmond from "./pages/KitchenAlmond";
import KitchenWhiskey from "./pages/KitchenWhiskey";
import KitchenIsland from "./pages/KitchenIsland";
import KitchenMint from "./pages/KitchenMint";
import KitchenSapphire from "./pages/KitchenSapphire";
import KitchenGraphite from "./pages/KitchenGraphite";
import KitchenSand from "./pages/KitchenSand";
import KitchenModernClassic from "./pages/KitchenModernClassic";
import KitchenUrbanJungle from "./pages/KitchenUrbanJungle";
import KitchenMarbleWave from "./pages/KitchenMarbleWave";
import KitchenClassicBeige from "./pages/KitchenClassicBeige";
import KitchenGraphiteIsland from "./pages/KitchenGraphiteIsland";
import ObsidianKitchen from "./pages/ObsidianKitchen";
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
          <Route path="/kitchen/oliva" element={<KitchenOliva />} />
          <Route path="/kitchen/snow" element={<KitchenSnow />} />
          <Route path="/kitchen/caramel" element={<KitchenCaramel />} />
          <Route path="/kitchen/champagne" element={<KitchenChampagne />} />
          <Route path="/kitchen/honey" element={<KitchenHoney />} />
          <Route path="/kitchen/almond" element={<KitchenAlmond />} />
          <Route path="/kitchen/whiskey" element={<KitchenWhiskey />} />
          <Route path="/kitchen/island" element={<KitchenIsland />} />
          <Route path="/kitchen/mint" element={<KitchenMint />} />
          <Route path="/kitchen/sapphire" element={<KitchenSapphire />} />
          <Route path="/kitchen/graphite" element={<KitchenGraphite />} />
          <Route path="/kitchen/sand" element={<KitchenSand />} />
          <Route path="/kitchen/modern-classic" element={<KitchenModernClassic />} />
          <Route path="/kitchen/urban-jungle" element={<KitchenUrbanJungle />} />
          <Route path="/kitchen/marble-wave" element={<KitchenMarbleWave />} />
          <Route path="/kitchen/classic-beige" element={<KitchenClassicBeige />} />
          <Route path="/kitchen/graphite-island" element={<KitchenGraphiteIsland />} />
          <Route path="/kitchen/obsidian" element={<ObsidianKitchen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;