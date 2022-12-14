import React from 'react'

// Styles
import styles from '../styles/pages/About.module.scss'

import { AboutResumeeHeader } from '../components/Pages/About/AboutResumeeHeader/AboutResumeeHeader'

import { AboutResumeeContent } from '../components/Pages/About/AboutResumeeContent/AboutResumeeContent'

import { AboutVideoSection } from '../components/Pages/About/AboutVideoSection/AboutVideoSection'

import { AboutCallToProjects } from '../components/Pages/About/AboutCallToProjects/AboutCallToProjects'
import { AboutWhatIDo } from '../components/Pages/About/AboutWhatIDo/AboutWhatIDo'

export default function about() {
  return (
    <main className={styles.AboutPageWrapper}>
      <AboutVideoSection />
      <section id="ResumeeSection" className={styles.ResumeeSection}>
        <AboutResumeeHeader />
        <AboutResumeeContent />
      </section>
      <AboutWhatIDo />
      <AboutCallToProjects />
    </main>
  )
}
