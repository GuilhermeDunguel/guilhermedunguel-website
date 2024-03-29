import React from 'react'

// Components & Utils
import Image from 'next/image'
import { Button } from '../layout/components/Button/Button'
import { HandWaving, Swatches } from 'phosphor-react'

// Styles
import styles from '../styles/pages/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.homeContentWrapper}>
        <div className={styles.smallPhotoDiv}>
          <Image
            src={'/smallPhoto.png'}
            width="124"
            height="124"
            quality={100}
            alt={'A small photo of myself'}
          />
        </div>
        <div className={styles.mainPhrasesDiv}>
          <h1>
            Desenvolvedor Front-End <span>especialista</span> em produtos de{' '}
            <span>alta qualidade</span>.
          </h1>
          <p>
            Sou um Desenvolvedor Web Front-End & Mobile com conhecimentos de
            UI/UX Design.
          </p>
        </div>
        <div className={styles.buttonsDiv}>
          <Link href={'/about'}>
            <Button
              icon={<HandWaving weight={'fill'} size={22} />}
              title={'Me conhecer'}
              variant={'primary'}
            />
          </Link>
        </div>
      </section>
    </div>
  )
}
