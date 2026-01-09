import { div } from 'framer-motion/client'
import React from 'react'

function ProjectCard({title,description,tech,github,live}:{title:string, description:string, tech:string[], github: string, live:string}){
    return(
        <div className="group rounded-2xl border border-[#617a39]/30 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-xl font-semibold text-[#617a39]">
                {title}
            </h3>

            <p className="mt-3 text-gray-700">
                {description}
            </p>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((item) => (
                <span
                    key={item}
                    className="rounded-full bg-[#617a39]/10 px-3 py-1 text-sm font-medium text-[#617a39]"
                >
                    {item}
                </span>
                ))}
            </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
            <a
            href={github}
            target="_blank"
            className="text-sm font-medium text-[#617a39] hover:underline"
            >
            GitHub →
            </a>
            <a
            href={live}
            target="_blank"
            className="text-sm font-medium text-[#617a39] hover:underline"
            >
            Live Demo →
            </a>
        </div>
            </div>
        )
    }
function Projects() {
  return (
    <section
    id="projects"
    className='w-full bg-white px-6 py-24 md:px-16'>
        <div className='mx-auto max-w-6xl'>
            <div className='inline block'>
                <h2 className='text-3xl font-bold text-[#617a39]'>Projects</h2>
                <div className='mt-2 h-1 w-16 bg-[#617a39]'/>
            </div>
            {/*Projects Grid*/}
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
                <ProjectCard
                    title="AI-Enhanced College Placement System"
                    description="A smart placement platform integrating AI-based matching, blockchain verification, and gamification to improve student-recruiter matching."
                    tech={[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AI",
                    "Blockchain",
                    ]}
                    github="#"
                    live="#"
                />
                <ProjectCard
                    title="AI-Enhanced College Placement System"
                    description="A smart placement platform integrating AI-based matching, blockchain verification, and gamification to improve student-recruiter matching."
                    tech={[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AI",
                    "Blockchain",
                    ]}
                    github="#"
                    live="#"
                />
                <ProjectCard
                    title="AI-Enhanced College Placement System"
                    description="A smart placement platform integrating AI-based matching, blockchain verification, and gamification to improve student-recruiter matching."
                    tech={[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AI",
                    "Blockchain",
                    ]}
                    github="#"
                    live="#"
                />
                <ProjectCard
                    title="AI-Enhanced College Placement System"
                    description="A smart placement platform integrating AI-based matching, blockchain verification, and gamification to improve student-recruiter matching."
                    tech={[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AI",
                    "Blockchain",
                    ]}
                    github="#"
                    live="#"
                />
            </div>
        </div>
    </section>
  )
}

export default Projects