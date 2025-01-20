export const sanitazeHtmlContent = (htmlContent: string): string => {
  const doc = new DOMParser().parseFromString(htmlContent, 'text/html');

  const scriptTags = doc.querySelectorAll('script');
  scriptTags.forEach((script) => script.remove());

  return doc.body.innerHTML;
};
