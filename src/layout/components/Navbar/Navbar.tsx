import React, { useState } from 'react'

import { CaretDown, Gear, Minus, Swatches, User } from 'phosphor-react';

import styles from './Navbar.module.scss'
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Popover from '@radix-ui/react-popover';

export function Navbar() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [isButtonBeingHover, setIsButtonBeingHover] = useState(false)

  const NavBarVariants = {
    open: {y: '0px'},
    closed: {y: '-80px'} 
  }

  return (
    <motion.nav 
      className={styles.NavbarWrapper}
      animate={
        isNavOpen ? NavBarVariants.open : NavBarVariants.closed
      }
      initial={false}
    >
      <div className={styles.LeftSide}>
        <Link href="/about">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={styles.LinkButton}
          >
            <User size={24} />
          </motion.button>
        </Link>    
        <Link href="/projects">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={styles.LinkButton}
          >
            <Swatches size={24} />
          </motion.button>
        </Link>
        {/* <Link href="/contact">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={styles.LinkButton}
          >
            <Phone size={24} />
          </motion.button>
        </Link> */}
      </div>
      <div className={styles.RightSide}>
        <Popover.Root>
          <Popover.Trigger className={styles.SettingsButton}>
            <Gear size={24} />
          </Popover.Trigger>
          <Popover.Anchor />
          <Popover.Portal>
            <Popover.Content className={styles.PopoverContent}>
              Ainda não implementado.
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
      <motion.button 
        className={styles.OpenNavbarButton}
        whileHover={isNavOpen ? { scale: 1.2, rotate: 180} : { scale: 1.2 }}
        onHoverStart={() => {setIsButtonBeingHover(true)}}
        onHoverEnd={() => {setIsButtonBeingHover(false)}}
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
      {
        isButtonBeingHover ? <CaretDown weight='bold' size={22} /> : <Minus weight='bold' size={22} />
      }
      </motion.button>
    </motion.nav>
  )
}
