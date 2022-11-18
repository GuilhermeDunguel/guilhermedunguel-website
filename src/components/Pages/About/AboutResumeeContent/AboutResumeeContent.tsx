import React from 'react'

// Components & Utils
import Image from 'next/image';
import { DownloadSimple, SmileyWink } from 'phosphor-react';
import AboutSectionsHeader from '../AboutSectionsHeader/AboutSectionsHeader';

import { SocialIcon } from '../../../SocialIcon/SocialIcon';

// Styles
import styles from './AboutResumeeContent.module.scss';
import { Button } from '../../../../layout/components/Button/Button';


export function AboutResumeeContent() {
  return (
    <section className={styles.ResumeeContentSection}>
      <AboutSectionsHeader icon={<SmileyWink size={22} />} title={'Quem sou eu'} />
      <div className={styles.ResumeeContentWrapper}>
        <Image src={'/myPhoto.svg'} width={254} height={356} alt={''} />
        <div className={styles.ResumeeTextAndButtons}>
          <p className={styles.ResumeeParagraph}>
            <strong className={styles.HelloSpan}>Olá!</strong> Me chamo Guilherme Dunguel mas pode me chamar de “Gui”, moro no Rio de Janeiro e sou Desenvolvedor Web Front-End apaixonado pelo que faço desde 2021.
          </p>
          <p className={styles.ResumeeParagraph}>
            Desde que comecei tenho estado em constante aprendizado, sempre me colocando a disposição para aprender uma nova tecnologia ou ferramenta, porque acredito que na programação não existe um limite, sempre há um próximo nível e eu estou sempre em busca dele.
          </p>
          <p className={styles.ResumeeParagraph}>
            Hoje em dia atuo no mercado como Freelancer, desenvolvendo aplicações do Figma ao código, e escrevo posts no Medium para transmitir conhecimento a outras pessoas.
          </p>
          <div className={styles.CVAndSocialLinks}>
            <a href={'/guilhermedunguelcurriculum.pdf'} download={'guilhermedunguelcurriculum.pdf'}>
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
