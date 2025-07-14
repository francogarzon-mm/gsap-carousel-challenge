export function calculateVisibleCardsInView(containerWidth: number) {
  if (containerWidth >= 1920) return 4;
  if (containerWidth >= 1440) return 3;
  if (containerWidth >= 1280) return 3;
  if (containerWidth >= 900) return 3;
  if (containerWidth >= 764) return 2;
  return 1;
}