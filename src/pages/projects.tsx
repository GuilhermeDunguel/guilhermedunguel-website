import React from 'react'

// Styles
import styles from '../styles/pages/Projects.module.scss';

// Components & Utils
import 'keen-slider/keen-slider.min.css'
import ProjectsSlider from '../components/Pages/Projects/ProjectsSlider/ProjectsSlider';
import CallToContacts from '../components/Pages/Projects/CallToContacts/CallToContacts';
import { GetStaticProps } from 'next';
import { hygraph, PROJECTS } from '../lib/hygraph';

export interface ProjectsDataType {
  projects: {
    createdAt: string;
    id: string;
    description: string;
    technologies: string[];
    title: string;
    banner: string;
    github: string;
    deploy: string;
  }[]
}

export default function projects({projects}: ProjectsDataType) {
  return (
    <main className={styles.projectsWrapper}>
      <ProjectsSlider projects={projects} />
      <CallToContacts />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const projects = await hygraph.query({
    query: PROJECTS,
  }).then(response => response.data.projects)

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 48
  }
}