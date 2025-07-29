import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { LanguageProvider } from "./contexts/Language.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Highlight from "./pages/Highlight.jsx";

// Create the root route
const rootRoute = createRootRoute({
  component: () => (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  ),
});

// Create the index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Create the highlight route
const highlightRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/highlight",
  component: Highlight,
});

// Create the router instance
const routeTree = rootRoute.addChildren([indexRoute, highlightRoute]);

export const router = createRouter({ routeTree });
