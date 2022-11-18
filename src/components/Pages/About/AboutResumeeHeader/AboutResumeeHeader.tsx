import React from 'react'

// Components
import { TechnologieContainer } from '../TechnologieContainer/TechnologieContainer'

// Styles
import styles from './AboutResumeeHeader.module.scss';

// Libs
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import { useQuery } from '@apollo/client';
// import { PROJECTS } from '../../../../lib/hygraph';

export function AboutResumeeHeader() {

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 960px)": {
        slides: {perView: 0, spacing: 8}
      },
      "(max-width: 960px)": {
        slides: {perView: 'auto', spacing: 8}
      },
    },
  })

  // function calculateDifferenceBetweenExperienceMonths() {
  //   const inicialDate = new Date('02/01/2022')
  //   const actualDate = new Date()

  //   return (
  //     actualDate.getMonth() - 
  //     inicialDate.getMonth() +
  //     12 * (actualDate.getFullYear() - inicialDate.getFullYear())
  //   )
  // }

  // const {data, loading} = useQuery(PROJECTS)

  return (
  <>
    <div className={`${styles.TechsCarouselDiv} ${"keen-slider"}`} ref={sliderRef}>
        <TechnologieContainer
          icon={'/technologies/techs_nextjs.svg'}
          title={'NextJS'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_react.svg'}
          title={'ReactJS'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_sass.svg'}
          title={'Sass'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_stitches.svg'}
          title={'StitchesJS'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_typescript.svg'}
          title={'TypeScript'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_javascript.svg'}
          title={'JavaScript'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_radix.svg'}
          title={'RadixUI'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_tailwind.svg'}
          title={'TailwindCSS'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_html.svg'}
          title={'HTML'} 
          width={22} height={22}
        />
        <TechnologieContainer
          icon={'/technologies/techs_css.svg'}
          title={'CSS'} 
          width={22} height={22}
        />
      </div>
   </>
  )
}