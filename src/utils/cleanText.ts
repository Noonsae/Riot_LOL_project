export const cleanedText = (text: string): string => {
  return text.replace(/[^가-힣\s]/g, " ");
};
