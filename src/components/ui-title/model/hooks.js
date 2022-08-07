export const useTitleTag = (variant) => {
  if (variant[0] === 'h') return `${variant}`;
  if (variant.includes('subtitle')) return `h6`;
  if (variant.includes('body')) return `p`;
  if (variant.includes('caption')) return `span`;
  return `div`;
};
