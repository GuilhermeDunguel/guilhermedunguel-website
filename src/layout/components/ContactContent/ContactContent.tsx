
import { ArrowSquareIn, Envelope, GithubLogo, LinkedinLogo, WhatsappLogo} from 'phosphor-react'
import React from 'react'

import styles from './ContactContent.module.scss'
export default function ContactContent() {
  return (
    <div className={styles.contactContentWrapper}>
      <header className={styles.widgetHeader}>
        <span>Entrar em contato</span>
        </header>
        <div className={styles.methodsWrapper}>
          <div className={styles.contactMethod}>
            <div className={`${styles.whatsappMethod} ${styles.contactIconDiv}`}>
              <WhatsappLogo size={32} weight="light" />
              <span>(21) 98794-3315</span>
            </div>
            <a href='tel:21987943315' target="_blank" rel="noreferrer">
              <ArrowSquareIn size={18} />
            </a>
          </div>
          <div className={styles.contactMethod}>
            <div className={`${styles.emailMethod} ${styles.contactIconDiv}`}>
              <Envelope size={32} weight="light" />
              <span>guilhermedunguel@gmail.com</span>
            </div>
            <a href='mailto:guilhermedunguel@gmail.com' target="_blank" rel="noreferrer">
              <ArrowSquareIn size={18} />
            </a>
          </div>
          <div className={styles.contactMethod}>
            <div className={`${styles.linkedinMethod} ${styles.contactIconDiv}`}>
              <LinkedinLogo size={32} weight="light" />
              <span>linkedin.com/in/guilhermedunguel</span>
            </div>
            <a href='https://linkedin.com/in/guilhermedunguel' target="_blank" rel="noreferrer">
              <ArrowSquareIn size={18} />
            </a>
          </div>
          <div className={styles.contactMethod}>
            <div className={`${styles.githubMethod} ${styles.contactIconDiv}`}>
              <GithubLogo size={32} weight="light" />
              <span>github.com/GuilhermeDunguel</span>
            </div>
            <a href='https://github.com/GuilhermeDunguel' target="_blank" rel="noreferrer">
              <ArrowSquareIn size={18} />
            </a>
          </div>
        </div>
    </div>
  )
}
