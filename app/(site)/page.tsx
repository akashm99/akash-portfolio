"use client";

import { useState, useEffect } from 'react';
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { getExperience, getPage, getProjects } from "@/sanity/sanity-utils";
import { ExperienceType, PageType, ProjectType } from '@/lib/types';

export default async function Home() {
  
  // const experiences = await getExperience();
  // const projects = await getProjects();
  // const pageContent = await getPage();

  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [pageContent, setPageContent] = useState<PageType[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const exp = await getExperience();
      const proj = await getProjects();
      const page = await getPage();
      setExperiences(exp);
      setProjects(proj);
      setPageContent(page);
    };
    fetchData();
  }, []);

  if (!pageContent.length) return null;

  const { about } = pageContent[0];
  const { skills } = pageContent[0];
  const { contact } = pageContent[0];

  return (
    <main className="flex flex-col items-center px-4">
        <Intro intro={pageContent} />
        <SectionDivider />
        <About about={about} />
        <Projects projectsData={projects} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Contact contact={contact} />
    </main>
  )
}
