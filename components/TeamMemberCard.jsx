import React from 'react'

export default function TeamMemberCard(props) {
    const {selectedTeamMember, selectTeamMember} = props
    // Avatar image
    // Custom Icon
    // Theme Color
    // Name & position
    // Short bio or description
    // Contact buttons (like email or LinkedIn)
    // Nice visual spacing
    // Strong Sides ??
    // Fun Facts ??
  return (
    <div className={`flex flex-col items-start rounded text-black transition-all duration-500 ease-in-out pt-6 px-4 team-member-card overflow-hidden`}>
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative">

        <i
        className="fa-solid fa-xmark text-xl transition-all duration-300 text-red-500 hover:text-red-400 hover:scale-105 cursor-pointer absolute top-4 right-4 "
        onClick={() => selectTeamMember("")}
        ></i>

        <div className="h-[90px] w-[90px] border-4 border-white rounded-full z-10 shadow-md overflow-hidden -mt-10">
        <img
            src="avatars/Multiavatar-Alik.png"
            alt="misho_avatar"
            className="h-full w-full object-cover"
        />
        </div>

        <div className="text-center mt-4">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 justify-center">
            {selectedTeamMember}
            <i className="fa-solid fa-rocket text-red-500 text-lg"></i>
        </h2>
        <p className="text-sm text-gray-500 mt-1">Frontend Developer</p>
        </div>

        <div className="mt-4 text-center text-gray-600 text-sm">
        <p>Creative developer focused on clean, scalable UI with modern frontend stacks.</p>
        </div>

        <div className="mt-5 w-full">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Strong Sides
            <i className="fa-solid fa-dumbbell ml-2 text-blue-600 text-lg"></i>
        </h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Pixel-perfect design implementation</li>
            <li>Reusable component architecture</li>
            <li>Fast learning and team collaboration</li>
        </ul>
        </div>

        <div className="mt-5 w-full">
        <h3 className="text-md font-semibold text-gray-700 mb-2">Fun Facts
            <i className="fa-solid fa-face-laugh-beam ml-2 text-yellow-400 text-lg"></i>
        </h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Coffee-powered coding sessions ☕</li>
            <li>Speaks 3 languages fluently 🌍</li>
            <li>Loves building side projects 🚧</li>
        </ul>
        </div>

        <div className="flex gap-4 mt-6">
        <a
            href="mailto:misho@example.com"
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full text-sm transition"
        >
            Email
        </a>
        <a
            href="https://linkedin.com/in/misho"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm transition"
        >
            LinkedIn
        </a>
        </div>
    </div>
    </div>

  )
}
