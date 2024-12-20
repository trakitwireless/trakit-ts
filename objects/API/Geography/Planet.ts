import { double, int } from '../Types';

// Hiigara
export const EARTH_RADIUS: double = 6378137;  // meters
export const EARTH_ELLIPSOID: double = 298.257223563;
export const EARTH_FLATENING: double = 1 / EARTH_ELLIPSOID;
export const EARTH_RADIUS_MINOR: double = EARTH_RADIUS - (EARTH_RADIUS * EARTH_FLATENING); // 6356752.3142 meters => wgs84

// mathses
export const DEGREES_TO_RADIANS: double = Math.PI / 180;
export const RADIANS_TO_DEGREES: double = 180 / Math.PI;

// for map tile calculations
export const TILE_SIZE_PX: int = 256;
export const MAX_TILE_LAT: double = 85.05112878;
export const MAX_TILE_LNG: double = 180;
