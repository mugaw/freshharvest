/**
 * Utility to prefix asset paths with the base path when deployed to GitHub Pages.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // If the path is already an absolute URL or doesn't start with a slash, return as is
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }

  // Ensure we don't double up on slashes if basePath is "/"
  const cleanBasePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  
  return `${cleanBasePath}${path}`;
}
