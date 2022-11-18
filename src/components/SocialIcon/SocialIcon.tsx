import React from 'react'

// Libs 
import { motion } from 'framer-motion'

// Components
import Image from 'next/image';

// import styles from './SocialIcon.module.scss';

interface SocialIconProps {
  href: string;
  icon: string;
}

export function SocialIcon({href, icon}: SocialIconProps) {
  return (
    <motion.a 
      href={href}
      target={'blank'}
      whileHover={{scale: 1.1}}
    >
      <Image src={icon} width={18} height={18} alt={''} />
    </motion.a>
  )
}
