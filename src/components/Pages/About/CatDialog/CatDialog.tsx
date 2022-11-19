import React, { useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog';

import styles from './CatDialog.module.scss';
import { CatsAPIContext } from '../../../../context/CatsAPIFetch';
import Image from 'next/image';
import { Button } from '../../../../layout/components/Button/Button';
import { Cat, CircleNotch, DiceFive } from 'phosphor-react';
import Link from 'next/link';

export function CatDialog() {

  const {catAPIData, handleRandomizeImage} = useContext(CatsAPIContext)

  return (
    <>
      <Dialog.Overlay className={styles.DialogOverlay}/>
      <Dialog.Content className={styles.DialogContent}>
        <header className={styles.DialogHeader}>
          <span>Humm... Você é dos exigentes né?</span>
          <p>Toma aqui a foto de um gatinho pra te convencer.</p>
        </header>
        <div>
          {
            catAPIData.length === 0 ?
            <Image src={'/catPlaceholder.jpg'} width={350} height={380} alt="" placeholder='blur' blurDataURL='/catPlaceholder.jpg' />
            : 
            <Image src={catAPIData[0]?.url} width={350} height={380} alt="" placeholder='blur' blurDataURL='/catPlaceholder.jpg' />
          }
          <span>Content provided by <a href='https://thecatapi.com' target='blank'>TheCatApi</a></span>
        </div>
        <footer>
          {catAPIData.length === 0 ? 
            <CircleNotch size={14} className={styles.loadingIcon} />
            : 
            <button 
              onClick={() => handleRandomizeImage()} 
              className={styles.randomImageButton}
            >
                <DiceFive size={14} /> 
                Aleatorizar imagem
            </button>}
            <Link href={'/projects'} className={styles.convincedMeButton}>
              <Button icon={<Cat size={22}/>} title={'Me convenceu'} variant={'primary'}  />
            </Link>
        </footer>
      </Dialog.Content>
    </>
  )
}
