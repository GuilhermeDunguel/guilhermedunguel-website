import React from 'react';

// Components
import AboutSectionsHeader from '../AboutSectionsHeader/AboutSectionsHeader';

// Styles
import styles from './AboutVideoSection.module.scss';

// Icons 
import { CaretDown, CircleNotch, VideoCamera } from 'phosphor-react';

export function AboutVideoSection() {
  return (
    <section className={styles.VideoSection}>
        <AboutSectionsHeader 
          icon={<VideoCamera size={22} />} 
          title={'Um vídeo sobre mim'} 
        />
        <div className={styles.VideoDiv}>
          <iframe 
            src="https://player.vimeo.com/video/772242457?h=e176429cf6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen 
            frameBorder="0" 
          >
          </iframe>
          <div className={styles.VideoWhileLoading}>
            <CircleNotch size={70} />
          </div>
        </div>
        <script src="https://player.vimeo.com/api/player.js" defer></script>
        <p className={styles.VideoDescription}>
          Nesse vídeo conto um pouco sobre quem eu sou, o que eu faço, com quais tecnologias trabalho e onde tudo começou.
        </p>
        <a href="#ResumeeSection">
          <button className={styles.ContentFlareButton}>
            <CaretDown size={22} />
          </button>
        </a>
      </section>
  )
}
