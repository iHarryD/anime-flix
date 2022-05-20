export const verticallyExpandingVariant = {
  initial: { height: 0, opacity: 0, transformOrigin: "top" },
  animate: {
    height: "fit-content",
    opacity: 1,
    transformOrigin: "top",
    transition: {
      stiffness: 0,
    },
  },
  exit: { height: 0, opacity: 0, transformOrigin: "top" },
};
