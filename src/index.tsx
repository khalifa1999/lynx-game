import { root } from "@lynx-js/react";

import { App } from "./App.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { MemoryRouter, Routes, Route } from "react-router";
import GameDetailsScreen from "./screens/game-details.tsx";
import GameStores from "./screens/game-stores.tsx";
// import SearchScreen from "./screens/search-screen.tsx";

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game-details/:id" element={<GameDetailsScreen />} />
        <Route path="/game-stores/:id" element={<GameStores />} />
        {/* <Route path="/search" element={<SearchScreen />} /> */}
      </Routes>
    </MemoryRouter>
  </QueryClientProvider>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
