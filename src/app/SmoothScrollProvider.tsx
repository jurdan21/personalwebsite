'use client';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <div className="smooth-scroll-wrapper">
      {children}
    </div>
  );
} 