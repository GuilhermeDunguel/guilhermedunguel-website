import * as Popover from '@radix-ui/react-popover';
import { Phone } from 'phosphor-react';
import React from 'react'
import ContactContent from '../ContactContent/ContactContent';

import styles from './ContactWidget.module.scss';

export default function ContactWidget() {
  return (
    <Popover.Root>
      <Popover.Trigger className={styles.popoverButton}>
        <Phone size={32} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <ContactContent />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
