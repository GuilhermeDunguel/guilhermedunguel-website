import {
  AndroidLogo,
  Layout,
  SelectionForeground,
  SelectionPlus,
} from 'phosphor-react'
import React from 'react'
import { WhatIDoCard } from '../../../WhatIDoCard/WhatIDoCard'
import AboutSectionsHeader from '../AboutSectionsHeader/AboutSectionsHeader'

import styles from './AboutWhatIDo.module.scss'

export function AboutWhatIDo() {
  return (
    <section className={styles.Wrapper}>
      <AboutSectionsHeader
        icon={<SelectionForeground size={22} />}
        title={'O que eu faço?'}
        whiteMode
      />
      <div className={styles.CardContainer}>
        <WhatIDoCard
          icon={<SelectionPlus size={48} weight="fill" />}
          title={'UI/UX Design'}
          description={
            'Crio layouts de forte apelo visual tanto para Web quanto para Mobile, sempre focado em manter uma boa experiência e usabilidade para o usuário final.'
          }
        />
        <WhatIDoCard
          icon={<Layout size={48} weight="fill" />}
          title={'Web Development'}
          description={
            'Utilizando as tecnologias mais recentes do mercado, desenvolvo o layout proposto para Web, me preocupando com os mínimos detalhes e responsividade.'
          }
        />
        <WhatIDoCard
          icon={<AndroidLogo size={48} weight="fill" />}
          title={'Mobile Development'}
          description={
            'Seguindo o layout proposto, dou vida ao seu aplicativo para Android prezando pela otimização e funcionamento em todos os dispositivos.'
          }
        />
      </div>
    </section>
  )
}
