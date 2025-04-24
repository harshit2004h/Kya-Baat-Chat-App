export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    // Prevent default anchor link behavior
    window.history.pushState({}, "", `#${sectionId}`);
    
    // Smooth scroll to element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
