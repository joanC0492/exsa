import React from 'react';

import {SectionHero} from './sections/SectionHero';
import {SectionNegocio} from './sections/SectionNegocio';

function AboutPage(){
  return(
    <>
      <SectionHero />
      <SectionNegocio />
    </>
  );
}

export {AboutPage};