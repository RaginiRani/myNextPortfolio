import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-[#8b9f6a] text-white px-6 py-12 md:px-16">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
            {/*left branding*/}
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">Ragini Rani</h3>
                <p className="mt-1 text-sm text-white/80">Full-Stack Developer | Mern Stack</p>
            </div>
            {/*//center-contact*/}
            <div>
                <h4 className="font-semibold text-white">Contact</h4>
                <p>Email: <a href="mailto:raginirani214@gmail.com" className='underline hover:text-gray-200'>raginirani214@gmail.com</a></p>
                <p>Phone: <a href="tel:+919905730149" className="underline hover:text-gray-200">+91 99057 30149</a></p>
            </div>
            {/* Right: Social Links */}
            <div className="flex flex-col items-center md:items-end gap-2">
                <h4 className="font-semibold text-white">Connect</h4>
                <div className="flex gap-4 mt-1">
                    <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-200">
                    GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-200">
                    LinkedIn
                    </a>
                    <a href="https://leetcode.com/u/ragini214/" target="_blank" className="hover:text-gray-200">
                    LeetCode
                    </a>
                </div>
            </div>
             <div className="mt-12 text-center text-sm text-white/60">
                © {new Date().getFullYear()} Ragini Rani. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer