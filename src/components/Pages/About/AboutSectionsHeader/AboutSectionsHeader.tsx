import React, { ReactNode } from 'react'

interface AboutSectionHeader {
  icon: ReactNode
  title: string
  whiteMode?: boolean
}

import styles from './AboutSectionsHeader.module.scss'

export default function AboutSectionsHeader({
  icon,
  title,
  whiteMode = false,
}: AboutSectionHeader) {
  return (
    <header className={whiteMode ? styles.WrapperWhite : styles.WrapperDark}>
      {icon}
      <span>{title}</span>
    </header>
  )
}
