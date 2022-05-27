import React from 'react';

// 
import { SectionHero } from './sections/SectionHero';
import { SectionProducts } from './sections/SectionProducts';
import { SectionServices } from './sections/SectionServices';
import { SectionNews } from './sections/SectionNews';
function HomePage(){
  return (
    <>
      <SectionHero />
      <SectionProducts />
      <SectionServices />
      <SectionNews />
    </>

  );
}

export {HomePage};