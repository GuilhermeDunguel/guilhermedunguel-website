import React from 'react';

// Components & Utils
import Image from 'next/image';
import { Button } from '../layout/components/Button/Button';
import { HandWaving, Swatches } from 'phosphor-react';

// Styles
import styles from '../styles/pages/Home.module.scss'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.homeContentWrapper}>
        <div className={styles.smallPhotoDiv}>
          <Image src={'/smallPhoto.png'} width='124' height='124' quality={100} alt={'A small photo of myself'} />
        </div>
        <div className={styles.mainPhrasesDiv}>
          <h1>
            Desenvolvendo produtos incríveis com tecnologias incríveis
          </h1>
          <p>
            Sou um Desenvolvedor Front-End focado em tecnologias do ecossistema JavaScript
          </p>
        </div>
        <div className={styles.buttonsDiv}>
          <Link href={'/projects'} >
            <Button 
              icon={<Swatches size={22} />} 
              title={'Ver projetos'} 
              variant={'secondary'} 
            />
          </Link>
          <Link href={'/about'}>
            <Button 
              icon={<HandWaving size={22} />} 
              title={'Conhecer'} 
              variant={'primary'} 
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
