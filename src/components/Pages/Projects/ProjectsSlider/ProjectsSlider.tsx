import { ArrowUpRight, Browsers, GithubLogo, LinkedinLogo } from 'phosphor-react'
import React from 'react'
import AboutSectionsHeader from '../../About/AboutSectionsHeader/AboutSectionsHeader'
import Image from 'next/image';
import styles from './ProjectsSlider.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import { ProjectsDataType } from '../../../../pages/projects';



export default function ProjectsSlider({projects}: ProjectsDataType) {

  const [sliderRef] = useKeenSlider({
    mode: "snap",
    rtl: false,
    slides: {
      origin: "center",
      perView: 'auto',
      spacing: 15,
    },
  })

  return (
    <section className={styles.projectsSection}>
      <AboutSectionsHeader icon={<Browsers size={22} />} title={'Meus projetos'} />
      <div ref={sliderRef} className={`${styles.projectsSlider} ${'keen-slider'}`}>
        {projects.map(project => (
          <div key={project.id} className={`${styles.projectDiv} ${"keen-slider__slide"}`}>
            <Image src={project.banner} width={450} height={520} quality={100} alt={''} layout='responsive' />
            <footer>
              <div className={styles.projectDetails}> 
                <span>{project.title}</span>
                <div className={styles.redirectButtons}>
                  <button className={styles.redirectToGithub}>
                    <a href={project.github} target="blank"><GithubLogo size={32} /></a>
                  </button>
                  <button className={styles.redirectToDeploy}>
                    <a href={project.deploy} target="blank"><ArrowUpRight size={32} /></a>
                  </button>
                </div>
              </div>
              <div className={styles.projectTechs}>
                {project.technologies.map(tech => {
                  return <span key={tech}>{tech}</span>
                })}
              </div>
            </footer>
          </div>
        ))}
        <div className={`${styles.LastCardInSlider} ${"keen-slider__slide"}`}>
          <span>
            Mais em breve...
          </span>
          <p>
            Me siga no Github e Linkedin para ficar por dentro!
          </p>
          <div className={styles.SocialButtons}>
            <a 
              href='https://www.linkedin.com/in/guilhermedunguel/' 
              rel="noreferrer" 
              target={'_blank'} 
              className={styles.LinkedinButton}
            >
              <LinkedinLogo size={22} weight="fill" />
              LinkedIn
            </a>
            <a 
              href='https://www.github.com/GuilhermeDunguel' 
              rel="noreferrer" 
              target={'_blank'} 
              className={styles.GithubButton}
            >
              <GithubLogo size={22} weight="fill" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
