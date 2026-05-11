'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface CarouselTextWrapperProps {
  carousel: React.ReactNode;
  title: React.ReactNode;
}


export default function CarouselTextWrapper({ carousel, title }: CarouselTextWrapperProps) {

  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <>
      {isTabletOrDesktop ? (<>
        <div>
          {title}
        </div>
        <div>
          {carousel}
        </div>
      </>) : (<>
        <div>
          {carousel}
        </div>
        <div>
          {title}
        </div>
      </>
      )}
    </>
  );
}