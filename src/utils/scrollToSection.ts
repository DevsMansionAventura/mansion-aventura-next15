"use client";

export const scrollToSection = (
  id: string,
  offset: number = 30,
  callback?: () => void
) => {
  const element = document.getElementById(id);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      behavior: "smooth",
      top: offsetPosition,
    });

    if (callback) {
      callback();
    }
  }
};
