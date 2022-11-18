import Image from 'next/image';
import React from 'react'

import styles from './TechnologieContainer.module.scss';

interface TechnologieContainerProps {
  icon: string;
  title: string;
  width: number;
  height: number;
}

export function TechnologieContainer({icon, title, width, height}: TechnologieContainerProps) {

  return (
    <div>
      <div className={`${styles.TechnologieWrapper} ${styles[title]} ${"keen-slider__slide"}`}>
        <Image 
          src={icon} 
          width={width} height={height} 
          alt={'Logo do ' + title} 
        />
        {title}
      </div>
    </div>
  )
}
