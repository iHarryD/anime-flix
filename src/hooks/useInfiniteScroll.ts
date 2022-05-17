import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

interface hookProps {
  axiosCall: AxiosInstance;
  elementsToBeObserved: HTMLElement[];
  pageNumber: number;
}

export default function useInfiniteScroll({
  axiosCall,
  elementsToBeObserved,
  pageNumber,
}: hookProps) {
  const [items, setItems] = useState<any[]>([]);
  //   useEffect()
  //   const observer = new IntersectionObserver()
}
