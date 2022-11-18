import React, { ReactNode } from 'react'

interface AboutSectionHeader {
  icon: ReactNode;
  title: string;
}

import styles from './AboutSectionsHeader.module.scss'

export default function AboutSectionsHeader({icon, title}: AboutSectionHeader) {

  return (
    <header
      className={styles.Wrapper}
    >
      {icon}
      <span>{title}</span>
    </header>
  )
}
