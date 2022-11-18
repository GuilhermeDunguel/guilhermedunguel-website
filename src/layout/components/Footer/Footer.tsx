import React from 'react';

// Components
import Image from 'next/image';

// Styles 
import styles from './Footer.module.scss';

// Lib
import { SocialIcon } from '../../../components/SocialIcon/SocialIcon';

export function Footer() {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.SocialDiv}>
        <span>Minhas redes</span>
        <div className={styles.SocialIconsWrapper}>
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
      <div className={styles.TechsDiv}>
        <span>App construido com:</span>
        <div className={styles.TechsIconsWrapper}>
          <div>
            <Image 
              src={'/technologies/techs_nextjs.svg'} 
              width="22" height="22" 
              alt={'Logo do NextJS'} 
            />
            <span>NextJS</span>
          </div>
          <div>
            <Image 
              src={'/technologies/techs_sass.svg'}
              width="22" height="22" 
              alt={'Logo do SASS/SCSS'} 
            />
            <span>Sass</span>
          </div>
          <div>
            <Image 
              src={'/technologies/techs_radix.svg'} 
              width="22" height="22" 
              alt={'Logo do RadixUI'} 
            />
            <span>RadixUI</span>
          </div>
          <div>
            <Image 
              src={'/technologies/techs_framermotion.svg'} 
              width="22" height="22" 
              alt={'Logo do RadixUI'} 
            />
            <span>Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
