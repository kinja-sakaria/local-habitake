import packageJson from './package.json';

// ----------------------------------------------------------------------

export const CONFIG = {
  appName: 'Habitake-web-app',
  appVersion: packageJson.version,
  assetsDir: process.env.NEXT_PUBLIC_ASSETS_DIR ?? '',
  googleMapApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
};
