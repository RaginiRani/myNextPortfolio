'use client'

import React from 'react'
function SkillBlock({title,skills}:{title: string, skills: string[]}){
    return(
        <div className="group rounded-2xl border border-[#617a39]/30 bg-white/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-lg font-semibold text-[#617a39]">
                {title}
            </h3>
            <div>
                {skills.map((skill) => (
                    <span
                    key={skill}
                    className='rounded-full border border-[#617a39]/4 bg-[#617a39]/10 px-4 py-1 text-sm font-medium text-[#617a39]'>{skill}</span>
                ))}
            </div>
        </div>
    )
}
function Skills() {
  return (
    <section
    id="skills"
    className='w-full bg-[#f8faf5] px-6 py-24 md:px-16'>
        <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#617a39]">Tech Stack</h2>
        </div>
        <div className='mt-2 h-1 w-1/3 bg-[#617a39]'/>
        {/*Skills Grid*/}
        <div>
            <SkillBlock
            title="Frontend"
            skills={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
            ]}/>

            <SkillBlock
            title="Backend"
            skills={[
              "Node.js",
              "Express",
              "REST APIs",
            ]}
          />

          <SkillBlock
            title="Database"
            skills={["MongoDB"]}
          />

           <SkillBlock
            title="Tools"
            skills={[
              "Git",
              "GitHub",
              "Postman",
              "Vercel",
            ]}
          />

          <SkillBlock
            title="Problem Solving"
            skills={[
              "Data Structures",
              "Algorithms",
              "LeetCode",
            ]}
          />
        </div>
    </section>
  )
}

export default Skills