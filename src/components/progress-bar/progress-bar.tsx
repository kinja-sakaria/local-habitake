"use client";

import "./styles.css";
import NProgress from "nprogress";
import { MouseEvent, Suspense, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "../../routes/hooks";

// ----------------------------------------------------------------------

/**
 * Handles anchor click events to start the progress bar if the target URL is different from the current URL.
 */
const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
  const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
  const currentUrl = window.location.href;

  if (targetUrl !== currentUrl) {
    NProgress.start();
  }
};

/**
 * Handles DOM mutations to add click event listeners to anchor elements.
 */
const handleMutation = () => {
  const anchorElements =
    document.querySelectorAll<HTMLAnchorElement>("a[href]");

  const filteredAnchors = Array.from(anchorElements).filter((element) => {
    const rel = element.getAttribute("rel");
    const href = element.getAttribute("href");
    const target = element.getAttribute("target");

    return href?.startsWith("/") && target !== "_blank" && rel !== "noopener";
  });

  filteredAnchors.forEach((anchor) =>
    anchor.addEventListener(
      "click",
      handleAnchorClick as unknown as EventListener
    )
  );
};

// ----------------------------------------------------------------------

export function ProgressBar() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, { childList: true, subtree: true });

    // Patch history.pushState to finish progress when route changes programmatically
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (
        target,
        thisArg,
        argArray: [data: never, unused: string, url?: string | URL | null]
      ) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      },
    });

    return () => {
      mutationObserver.disconnect();
      const anchorElements =
        document.querySelectorAll<HTMLAnchorElement>("a[href]");
      anchorElements.forEach((anchor) =>
        anchor.removeEventListener(
          "click",
          handleAnchorClick as unknown as EventListener
        )
      );
    };
  }, []);

  return (
    <Suspense fallback={null}>
      <NProgressDone />
    </Suspense>
  );
}

// ----------------------------------------------------------------------

function NProgressDone() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, router, searchParams]);

  return null;
}
