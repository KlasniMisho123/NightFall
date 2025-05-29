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
    <div className={`flex flex-col items-start rounded text-black transition-all duration-500 ease-in-out pt-6 team-member-card
     overflow-hidden `}>
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <i className="fa-solid fa-xmark text-xl transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 cursor-pointer absolute self-end team-member-xmark "
        onClick={() => selectTeamMember("")}></i>
        {/* Avatar */}
        <div className="h-[90px] w-[90px] border-4 border-white rounded-full z-10 relative -mt-12 shadow-md overflow-hidden ">
            <img
            src="avatars/Multiavatar-Alik.png"
            alt="misho_avatar"
            className="h-full w-full object-cover"
            />
        </div>

        {/* Name & Title */}
        <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 justify-center">
            {selectedTeamMember}
            <i className="fa-solid fa-rocket text-red-500 text-lg"></i>
            </h2>
            <p className="text-sm text-gray-500 mt-1">Frontend Developer</p>
        </div>

        {/* Additional Info */}
        <div className="mt-6 space-y-1 text-center text-gray-600">
            <p>🚀 Passionate about clean UI</p>
            <p>🛠️ Skilled in React & Tailwind</p>
        </div>
        </div>

      </div>
  )
}
