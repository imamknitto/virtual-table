import { useEffect, useCallback } from 'react';

type PreloadFunction = () => Promise<{ default: React.ComponentType }>;

type RoutePreloaderOptions = {
  delay?: number;
  preloadOnHover?: boolean;
};

export const useRoutePreloader = (
  routes: Record<string, PreloadFunction>,
  options: RoutePreloaderOptions = {},
) => {
  const { delay = 2000, preloadOnHover = true } = options;

  // Preload routes after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      Object.entries(routes).forEach(([routeName, preloadFn]) => {
        preloadFn().catch((error) => {
          console.warn(`Failed to preload ${routeName}:`, error);
        });
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [routes, delay]);

  // Preload on hover
  const preloadOnHoverHandler = useCallback(
    (routeName: string) => {
      if (!preloadOnHover || !routes[routeName]) return;

      routes[routeName]().catch((error) => {
        console.warn(`Failed to preload ${routeName} on hover:`, error);
      });
    },
    [routes, preloadOnHover],
  );

  return {
    preloadOnHover: preloadOnHoverHandler,
  };
};
