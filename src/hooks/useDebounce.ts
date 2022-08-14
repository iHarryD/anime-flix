import { useEffect, useState } from "react";

export default function useDebounce(initialValue: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<any>(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(initialValue), delay);
    return () => clearTimeout(timeout);
  }, [initialValue, delay]);

  return debouncedValue;
}
