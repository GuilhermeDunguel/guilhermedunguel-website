import React, { ReactNode } from 'react'
import styles from './WhatIDoCard.module.scss'

interface WhatIDoCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function WhatIDoCard({ icon, title, description }: WhatIDoCardProps) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.CardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
