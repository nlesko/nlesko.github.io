import type { NextPage } from 'next'
import Image from "next/image";
import { DevicePhoneMobileIcon, HeartIcon } from '@heroicons/react/20/solid';
import { AdobePhotoshop, Bootstrap, Docker, DotNet, ExpressJs, Git, JavaScript, MicrosoftSQLServer, MongoDB, NCloudScale, NodeJs, PostgreSQL, Prestashop, ReactJs, Rocket, Tailwind, TypeScript, VueJs } from '../components/icons';
import SkillCard from '../components/SkillCard';
import Banner from '../containers/Banner';

import { Navbar } from '../containers/Navbar'
import Section from '../containers/Section'
import { Feature, Project, ProjectCategory, Skill, SkillCategory } from '../data'

import profilePic from '../../public/profile_540px.jpg';
import FeatureCard from '../components/FeatureCard';

const Home: NextPage = () => {
  const skillSets: Array<Skill> = [
    {
      id: 1,
      name: 'React',
      icon: ReactJs,
      category: SkillCategory.FRONTEND
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: JavaScript,
      category: SkillCategory.FRONTEND
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: TypeScript,
      category: SkillCategory.FRONTEND
    },
    {
      id: 4,
      name: 'Node',
      icon: NodeJs,
      category: SkillCategory.BACKEND
    },
    {
      id: 5,
      name: 'Tailwind',
      icon: Tailwind,
      category: SkillCategory.FRONTEND
    },
    {
      id: 6,
      name: 'Bootstrap',
      icon: Bootstrap,
      category: SkillCategory.FRONTEND
    },
    {
      id: 7,
      name: "VueJS",
      icon: VueJs,
      category: SkillCategory.FRONTEND
    },
    {
      id: 8,
      name: "Express",
      icon: ExpressJs,
      category: SkillCategory.BACKEND
    },
    {
      id: 9,
      name: "MongoDB",
      icon: MongoDB,
      category: SkillCategory.BACKEND
    },
    {
      id: 10,
      name: "MSSQL",
      icon: MicrosoftSQLServer,
      category: SkillCategory.BACKEND
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: PostgreSQL,
      category: SkillCategory.BACKEND
    },
    {
      id: 12,
      name: "Git",
      icon: Git,
      category: SkillCategory.OTHER
    },
    {
      id: 13,
      name: "Prestashop",
      icon: Prestashop,
      category: SkillCategory.OTHER
    },
    {
      id: 14,
      name: "Photoshop",
      icon: AdobePhotoshop,
      category: SkillCategory.OTHER
    },
    {
      id: 16,
      name: "Docker",
      icon: Docker,
      category: SkillCategory.OTHER
    }
  ];

  const projects: Array<Project> = [
    {
      id: 1,
      name: "Mountain Climber",
      description: "Landing page for Travel Agency. Built with CSS Flexbox",
      imageUrl: "mountain_climber.jpg",
      repository: null,
      demoUrl: "http://nytprojects.dx.am/mountain/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 2,
      name: "Guess the Color Game",
      description: "Simple Guess the Color Game made with JavaScript. The Game asks you to guess colour of RGB value shown in header.",
      imageUrl: "Guess-the-color-game.jpg",
      repository: "https://github.com/nlesko/Guess_the_Color_Portfolio",
      demoUrl: "http://nytprojects.dx.am/guess-the-color/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 3,
      name: "Christmas Countdown Clock",
      description: "In the mood for holidays decided to put together this simple Christmas countdown clock It contains countdown timer that is counting how much time is left till December 25, 2018, 00:00:01 in the night. (will be updated for 2019). Besides timer added simple snow-like background using canvas. Also what kind of Christmas it would be without some Christmas lights? :)",
      imageUrl: "countdown-clock.jpg",
      repository: "https://github.com/nlesko/christmas-countdown-clock",
      demoUrl: "https://nlesko.github.io/projects/christmas-countdown-clock/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 4,
      name: "Cryptocurrency Tracker",
      description: "Cryptocurrency Tracker built with vanilla JS using Coinranking API. Web application will list 50 Cryptocurrencies and show their Icon, name, current worth US dollars and change in last 24h.",
      imageUrl: "cryptocurrency-tracker.jpg",
      repository: "https://github.com/nlesko/cryptocurrency-vanilla-js-tracker",
      demoUrl: "https://nlesko.github.io/projects/cryptocurrency-tracker/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 5,
      name: "Vue Smoothies",
      description: "A simple CRUD Smoothie recipe website using Vue.js, Axios for AJAX calls and Firebase for storing data.",
      imageUrl: "vue-smoothies.jpg",
      repository: null,
      demoUrl: "https://serene-shore-38026.herokuapp.com/",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 6,
      name: "Build a Robot",
      description: "A Robot builder web application that uses Vue.js, Vuex for state managment, Axios for AJAX calls and Express for serving application.",
      imageUrl: "build-a-bot.jpg",
      repository: "https://github.com/nlesko/build-a-bot",
      demoUrl: "https://dry-taiga-74990.herokuapp.com/build",
      tags: ['React', 'Node', 'CSS'],
      projectCategory: ProjectCategory.PERSONAL
    },
    {
      id: 7,
      name: "Web template",
      description: "Modular, component-based website template built with TWIG template engine, bootstrap, jQuery, SCSS, slick, webpack and more. The template contains configurator for displaying different options on different pages.",
      imageUrl: "dm_t1.jpg",
      repository: null,
      demoUrl: "http://t1.dimedia.hr/",
      tags: ['React', 'Node', 'CSS'],
      projectCategroy: ProjectCategory.PROFESSIONAL
    },
    {
      id: 8,
      name: "Begamont Gradjenje",
      description: "Website targeted for the residential building market, built with TWIG template engine, bootstrap, sass, webpack, jQuery, and more. The website has features like SVG ground plan hover and clicks events, fullscreen lightbox gallery and more.",
      imageUrl: "begamont.jpg",
      repository: null,
      demoUrl: "https://www.begamont-gradjenje.hr/",
      projectCategory: ProjectCategory.PROFESSIONAL
    },
    {
      id: 9,
      name: "Library webshop",
      description: "Library webshop build with Prestashop e-commerce solution with custom theme and modules.",
      imageUrl: "ljevak_hr.jpg",
      repository: null,
      demoUrl: "https://www.ljevak.hr/",
      projectCategory: ProjectCategory.PROFESSIONAL
    }
  ];

  const features: Array<Feature> = [
    {
      id: 1,
      name: 'Performance',
      description: 'Optimizing fast on load and lag free interactions',
      icon: NCloudScale,
    },
    {
      id: 2,
      name: 'Responsive',
      description: 'Mobile-first approach, built for any device',
      icon: DevicePhoneMobileIcon
    },
    {
      id: 3,
      name: 'Dynamic',
      description: 'Alive Web Applications, dynamic content, not plain old static',
      icon: Rocket
    },
    {
      id: 4,
      name: 'Built With Love',
      description: 'Most important, build from bottom to top of my heart.',
      icon: HeartIcon
    }
  ]
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Section title="About" className="">
          <div className="flex flex-row flex-wrap items-center">
            {features.length > 0 && features.map(feature => (
              <FeatureCard feature={feature} key={feature.id} />
            ))}
          </div>
          <div className="my-20" />
          <div className="flex flex-row px-4">
            <div className="w-full p-10">
              <h3 className="text-4xl mb-4">Who am I?</h3>
              <p className="text-xl">
                Hello! My name is Nikola Leško, and  I am a Software engineer. I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps, focusing on fast, elegant, and accessible user experiences.
                <br />
                <br />
                In building applications, I'm equipped with just the right tools and can function independently of them to deliver fast, resilient solutions optimized for scale - performance, scalability, and accessibility are priorities while building the best possible solution.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Toolbox">
          <div className="flex flex-row px-4">
            <div className="w-full p-10">
              <p className="text-xl">
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {skillSets.length > 0 && skillSets.map((skill, index) => (
              <SkillCard skill={skill} key={skill.id} icon={(props) => skill.icon ? <skill.icon {...props} /> : undefined} />
            ))
            }

          </div>
        </Section>
        <Section title="Projects" className=''>
          {projects.length > 0 && projects.map((project, index) => (
            <div className="flex flex-row mb-6 relative" key={project.id}>
              <div className="w-1/2 relative z-10">
                <Image src={'/cryptocurrency-tracker.jpg'} alt={project.name} layout="fill" />
              </div>
              <div className="w-1/2 flex flex-col justify-between relative z-20">
                <h3 className="text-2xl uppercase pl-8 pt-2">
                  {project.name}
                </h3>
                <div className="mb-6" />
                <div className="bg-steel-blue-800/90 -ml-20 text-large p-8">
                  {project.description}
                </div>
                <ul className="flex flex-wrap justify-end pl-8 pb-2">
                  {project.tags && project.tags.map((tag, index) => (
                    <li key={index} className="first:ml-0 ml-6 mb-1">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>
        <Section title="Projects" className=''>
          <div className="grid gap-7 grid-cols-3">
            {projects.length > 0 && projects.map((project, index) => (
              <div key={project.id} className="flex flex-col p-6 bg-steel-blue-800/90">
                <h3 className="text-2xl uppercase">
                  {project.name}
                </h3>
                <div className=" text-large">
                  {project.description}
                </div>
                <ul className="flex flex-wrap justify-start">
                  {project.tags && project.tags.map((tag, index) => (
                    <li key={index} className="first:ml-0 ml-6 mb-1">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Contact" className='' />
      </main>
    </>
  )
}

export default Home
