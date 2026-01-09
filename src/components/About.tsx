
import React from 'react'

function Highlight({title}: {title: string}){
        return(
            <div className='rounded-xl border border-black px-5 py-4'>
                <p className='font-medium text-[#617a39]'>
                    {title}
                </p>
            </div>
        )
}
function StatCard({value,label}:{value:string, label:string}){
    return(
        <div className="rounded-xl border border-[#617a39]/30 bg-[#617a39]/5 p-6 text-center">
            <p className="text-3xl font-bold text-[#617a39]">
                {value}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-600">
                {label}
            </p>
        </div>
    )
}
function About() {
    
  return (
    <section
    id="about"
    className='w-full bg-white px-6 py-24 md:px-16'>
        <div className='mx-auto max-w-6xl'>
            <h2 className='text-3xl font-bold text-[#617a39]'>About Me</h2>
            <div className='mt-2 h-1 w-16 bg-[#617a39]'/>

            <div className="mt-10 max-w-4xl space-y-4 text-lg leading-8 text-gray-700">
                <p>
                    I’m <span className="font-semibold text-[#617a39]">Ragini Rani</span>, a
                    passionate full-stack developer who enjoys building scalable,
                    real-world web applications using React, Next.js, Node.js, and
                    MongoDB. I focus on writing clean, maintainable code while
                    delivering intuitive and visually appealing user experiences.
                </p>
                <p>
                    I have hands-on experience working on MERN stack projects, REST
                    APIs, authentication systems, database design, and modern
                    frontend workflows. I also enjoy solving data structures and
                    algorithm problems, which helps me write optimized and efficient
                    code.
                </p>
                <p>
                    I’m particularly interested in backend engineering and system
                    design, and I constantly explore new technologies to improve my
                    development skills. I enjoy turning complex problems into
                    simple, elegant solutions.
                </p>
                <p>
                    I’m currently looking for opportunities where I can learn,
                    contribute, and grow as a software developer while building
                    products that have real impact.
                </p>
            </div>
            {/* Highlights */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Highlight title="Full-Stack Development" />
                <Highlight title="MERN & REST APIs" />
                <Highlight title="System Design Mindset" />
                <Highlight title="Clean Code Practices" />
                <Highlight title="Problem Solving (DSA)" />
                <Highlight title="Continuous Learner" />
            </div>
            {/*Stats*/}
            <div  className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <StatCard value='10+' label="Projects"/>
                <StatCard value='5+' label="Technologies"/>
                <StatCard value='2+' label="Year Learning"/>
                <StatCard value='infinite' label="Curiosity"/>
            </div>
            {/*Links*/}
            <div className="mt-12 flex flex-wrap gap-6 text-base font-medium">
                <a href="https://github.com/RaginiRani"
                target='_blank'
                className='text-[#617a39] hover:underline'>GitHub</a>

                <a href="https://leetcode.com/u/ragini214/"
                target='_blank'
                className='text-[#617a39] hover:underline'>LeetCode</a>

                <a href="/resume.pdf"
                className='text-[#617a39] hover:underline'>Download Resume</a>
            </div>
        </div>
    </section>
  )
}

export default About