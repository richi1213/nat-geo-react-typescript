export const estimateRowHeight = (width: number): number => {
  if (width < 480) return 140; // for mobile screens
  if (width >= 480 && width < 640) return 190; // for small screens (sm)
  if (width >= 640 && width < 1024) return 320; // for medium screens (md)
  return 360; // for large screens (lg)
};
