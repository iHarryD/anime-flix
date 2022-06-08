export default function debounce(
  callback: () => void,
  delayInMilliSeconds: number
) {
  let timeoutID: any;
  return (...args: []) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), delayInMilliSeconds);
  };
}
