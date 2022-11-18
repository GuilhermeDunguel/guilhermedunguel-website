import * as Dialog from '@radix-ui/react-dialog';
import { Chats, PhoneOutgoing } from 'phosphor-react';
import React from 'react'
import ContactContent from '../../../../layout/components/ContactContent/ContactContent';
import AboutSectionsHeader from '../../About/AboutSectionsHeader/AboutSectionsHeader'

import styles from './CallToContacts.module.scss';

export default function CallToContacts() {
  return (
    <section className={styles.CallToContactSection}>
      <AboutSectionsHeader icon={<Chats size={22} />} title={'Eai, bora conversar?'} />
        <div className={styles.CallToContactDiv}>
          <div className={styles.CallToContactPhrasesDiv}>
            <h1>
              Estamos a uma mensagem de distância.
            </h1>
            <p>
              Estou esperando ansiosamente pelo seu contato!
            </p>
          </div>
          <Dialog.Root>
            <Dialog.Trigger className={styles.ContactModalButton}>
              <PhoneOutgoing size={22} />
              <span>Entrar em contato</span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.ContactModalOverlay}/>
              <Dialog.Content className={styles.ContactModalContent}>
                <ContactContent />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </section>
  )
}
