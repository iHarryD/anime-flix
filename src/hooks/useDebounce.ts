export default function useDebounce(
  callback: () => void,
  delayInMilliSeconds: number
) {
  let timeoutID: any;
  return (...args: []) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), delayInMilliSeconds);
  };
}
