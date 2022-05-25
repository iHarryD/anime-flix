export interface backdropProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  backdropOnClickFunction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
