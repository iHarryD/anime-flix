import { Variants } from "framer-motion";

const textAnimationDelay: number = 0.5;
const textAnimationDuration: number = 1;

export const textVariant: Variants = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: textAnimationDelay,
      duration: textAnimationDuration,
    },
  },
};

export const footerVairant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: textAnimationDelay + textAnimationDuration,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const footerButtonVairant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};
