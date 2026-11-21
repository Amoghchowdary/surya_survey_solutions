import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";

import appCss from "../styles.css?url";
import { SiteFooter, SiteHeader } from "../components/site-shell";

function NotFoundComponent() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page Not Found | Surya Survey Solutions";
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    const created = !robots;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    const previousContent = robots.content;
    robots.content = "noindex,follow";
    return () => {
      document.title = previousTitle;
      if (created) robots?.remove();
      else if (robots) robots.content = previousContent;
    };
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="production-status-page">
        <div className="production-status-card">
          <span className="production-status-code">404</span>
          <p className="production-status-eyebrow">SURYA SURVEY SOLUTIONS</p>
          <h1>That survey point could not be found.</h1>
          <p>The page may have moved or the address may be incorrect. Continue with one of the main website sections below.</p>
          <div className="production-status-actions">
            <Link to="/" className="production-status-primary">Return Home</Link>
            <Link to="/services" className="production-status-secondary">Surveying Services</Link>
            <Link to="/projects" className="production-status-secondary">View Projects</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <>
      <SiteHeader />
      <main className="production-status-page">
        <div className="production-status-card">
          <span className="production-status-code">500</span>
          <p className="production-status-eyebrow">SURYA SURVEY SOLUTIONS</p>
          <h1>This page could not be loaded.</h1>
          <p>The website encountered a temporary problem. Retry the page or return to the main website.</p>
          <div className="production-status-actions">
            <button
              type="button"
              onClick={() => { router.invalidate(); reset(); }}
              className="production-status-primary"
            >
              Try Again
            </button>
            <a href={import.meta.env.BASE_URL} className="production-status-secondary">Return Home</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Surya Survey Solutions" },
      { name: "application-name", content: "Surya Survey Solutions" },
      { name: "theme-color", content: "#020a12" },
      { name: "msapplication-TileColor", content: "#020a12" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
      { name: "referrer", content: "strict-origin-when-cross-origin" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Surya Survey Solutions" },
      { property: "og:image", content: "https://www.suryasurveysolutions.in/images/survey-hero-1920.webp" },
      { property: "og:image:alt", content: "Surya Survey Solutions civil engineering surveying fieldwork" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.suryasurveysolutions.in/images/survey-hero-1920.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { rel: "icon", href: "/surya-favicon-48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/surya-favicon-96.png", type: "image/png", sizes: "96x96" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "describedby", href: "/llms.txt", type: "text/markdown" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <noscript><div className="noscript-notice">JavaScript is required to use the interactive Surya Survey Solutions website. You can still contact us at 7036892959 or suryamovva@gmail.com.</div></noscript>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content"><Outlet /></main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
