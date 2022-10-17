import type { NextPage } from 'next'

import Image from "next/image";

import { Navbar } from '../containers/Navbar'
import Section from '../containers/Section'
import { Skill, SkillCategory } from '../data'

const Home: NextPage = () => {
  const skillSets: Array<Skill> = [
    {
      id: 0,
      name: 'HTML5',
      imageUrl: "html",
      category: SkillCategory.FRONTEND
    },
    {
      id: 1,
      name: "CSS/CSS3",
      imageUrl: "css",
      category: SkillCategory.FRONTEND
    },
    {
      id: 2,
      name: 'React',
      imageUrl: '',
      category: SkillCategory.FRONTEND
    },
    {
      id: 3,
      name: 'JavaScript',
      imageUrl: '',
      category: SkillCategory.FRONTEND
    },
    {
      id: 4,
      name: 'Node',
      imageUrl: "node",
      category: SkillCategory.BACKEND
    },
    {
      id: 5,
      name: 'Twig',
      imageUrl: "twig",
      category: SkillCategory.FRONTEND
    },
    {
      id: 6,
      name: 'Bootstrap',
      imageUrl: "bootstrap",
      category: SkillCategory.FRONTEND
    },
    {
      id: 7,
      name: "VueJS",
      imageUrl: "vuejs",
      category: SkillCategory.FRONTEND
    },
    {
      id: 8,
      name: "Express",
      imageUrl: "express",
      category: SkillCategory.BACKEND
    },
    {
      id: 9,
      name: "MongoDB",
      imageUrl: "mongo",
      category: SkillCategory.BACKEND
    },
    {
      id: 10,
      name: "MSSQL",
      imageUrl: "mssql",
      category: SkillCategory.BACKEND
    },
    {
      id: 11,
      name: "PostgreSQL",
      imageUrl: "psql",
      category: SkillCategory.BACKEND
    },
    {
      id: 12,
      name: "Git",
      imageUrl: "git",
      category: SkillCategory.OTHER
    },
    {
      id: 13,
      name: "Prestashop",
      imageUrl: "presta",
      category: SkillCategory.OTHER
    },
    {
      id: 14,
      name: "Smarty",
      imageUrl: "smarty",
      category: SkillCategory.FRONTEND
    },
    {
      id: 15,
      name: "Photoshop",
      imageUrl: "ps",
      category: SkillCategory.OTHER
    },
    {
      id: 16,
      name: "Docker",
      imageUrl: "docker",
      category: SkillCategory.OTHER
    }
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Section title="About" className="bg-slate-700">
          <div className="flex flex-col">
            <h3 className="text-xl text-bold">
              Hi, my name is Nikola!
            </h3>
            <p className="text-base">
              I am a JavaScript Web Developer. I offer a complete Web Application solution, includes development and design. Creating beautiful and dynamic custom-built Applications for clients ranging from individuals to small-businesses.
            </p>
          </div>
        </Section>
        <Section title='Skill set'>
          <div className="flex flex-wrap">
            {skillSets.length > 0 && skillSets.map((skill, index) => (
              <div className="w-1/3 px-4 mb-6" key={skill.id}>
                <div className="flex flex-row bg-white text-slate-900 shadow items-center">
                  <div className="p-6">
                    <Image src="/vercel.svg" alt={skill.name} width={120} height={120} className='p-6' />
                  </div>
                  <h4 className="w-full p-6 text-base uppercase text-center">
                    {skill.name}
                  </h4>
                </div>
              </div>
            ))
            }

          </div>
        </Section>
        <Section title="Projects" />
        <Section title="Contact" />
      </main>
    </>
  )
}

export default Home
