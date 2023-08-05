import React from 'react'

// Components & Utils
import Image from 'next/image'
import { DownloadSimple, SmileyWink } from 'phosphor-react'
import AboutSectionsHeader from '../AboutSectionsHeader/AboutSectionsHeader'

import { SocialIcon } from '../../../SocialIcon/SocialIcon'

// Styles
import styles from './AboutResumeeContent.module.scss'
import { Button } from '../../../../layout/components/Button/Button'

export function AboutResumeeContent() {
  return (
    <section className={styles.ResumeeContentSection}>
      <AboutSectionsHeader
        whiteMode
        icon={<SmileyWink size={22} />}
        title={'Quem sou eu'}
      />
      <div className={styles.ResumeeContentWrapper}>
        <Image src={'/myPhoto.svg'} width={254} height={356} alt={''} />
        <div className={styles.ResumeeTextAndButtons}>
          <p className={styles.ResumeeParagraph}>
            <strong className={styles.HelloSpan}>Olá!</strong> Eu sou o
            Guilherme, mas pode me chamar de “Gui”, moro no Rio de Janeiro e sou
            Desenvolvedor Front-End apaixonado pelo que faço desde 2021.
          </p>

          <p className={styles.ResumeeParagraph}>
            Desde que comecei tenho estado em constante aprendizado, não meço
            esforços para aprender algo novo. Essa mentalidade me possibilitou
            resolver problemas complexos e desafiadores no meu dia a dia.
          </p>

          <p className={styles.ResumeeParagraph}>
            Hoje em dia trabalho na{' '}
            <a
              href="https://www.hypesoft.com.br/"
              target="blank"
              className={styles.actualWork}
            >
              Hypesoft
            </a>
            , onde sou responsável por criar, manter e aprimorar aplicações Web
            e Mobile, utilizando principalmente NextJS e Flutter.
          </p>

          <div className={styles.CVAndSocialLinks}>
            <a
              href={'/guilhermedunguelcurriculum.pdf'}
              download={'guilhermedunguelcurriculum.pdf'}
            >
              <Button
                icon={<DownloadSimple size={22} />}
                title={'Baixar CV'}
                variant={'primary'}
              />
            </a>
            <div className={styles.SocialButtonsDiv}>
              <SocialIcon
                href={'https://www.linkedin.com/in/guilhermedunguel/'}
                icon={'/socialLogos/linkedin_icon.svg'}
              />
              <SocialIcon
                href={'https://github.com/GuilhermeDunguel'}
                icon={'/socialLogos/github_icon.svg'}
              />
              <SocialIcon
                href={'mailto:guilhermedunguel@gmail.com'}
                icon={'/socialLogos/gmail_icon.svg'}
              />
              <SocialIcon
                href={'https://medium.com/@guilhermedunguel'}
                icon={'/socialLogos/medium_icon.svg'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
