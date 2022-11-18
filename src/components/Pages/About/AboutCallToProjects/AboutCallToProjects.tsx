import React from 'react'

// Components & Utils
  import * as Dialog from '@radix-ui/react-dialog';
  import { Button } from '../../../../layout/components/Button/Button';
  import AboutSectionsHeader from '../AboutSectionsHeader/AboutSectionsHeader';
  import { Bug, HandsClapping, RocketLaunch } from 'phosphor-react';
  import Link from 'next/link';

// Styles
  import styles from './AboutCallToProjects.module.scss';
import { CatDialog } from '../CatDialog/CatDialog';

export function AboutCallToProjects() {
  return (
    <section className={styles.CallToProjectWrapper}>
      <AboutSectionsHeader icon={<HandsClapping size={22} />} title={'Me conta de você!'} />
      <div className={styles.SpanAndParagraphDiv}>
        <span>Pronto para construirmos o futuro juntos?</span>
        <p>Mal posso esperar pra ver onde podemos chegar!</p>
      </div>
      <div className={styles.ButtonsDiv}>
        <Dialog.Root>
          <Dialog.Trigger className={styles.ModalTriggerButton}>
            <Bug size={22} />
            <span>Não estou</span>
          </Dialog.Trigger>
          <Dialog.Portal>
            <CatDialog />
          </Dialog.Portal>
        </Dialog.Root>
        <Link href={'/projects'}>
          <Button icon={<RocketLaunch size={22}/>} title={'Ver meus projetos'} variant={'primary'} />
        </Link>
      </div>
    </section>
  )
}