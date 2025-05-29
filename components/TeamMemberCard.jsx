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
  return (
    <div className={`flex flex-col items-center w-full bg-white rounded text-black transition-all duration-500 ease-in-out pt-6 team-member-card
     overflow-hidden `}>
        <i className="fa-solid fa-xmark text-xl transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 cursor-pointer absolute self-end team-member-xmark "
        onClick={() => selectTeamMember("")}></i>
        <div className={`flex justify-center items-center h-35 w-35 border-white rounded-full border-4 z-3 relative cursor-pointer
            transition-duration-300 `}>
            <img src='avatars/Multiavatar-Alik.png'  alt='misho_avatar'/>
        </div>
        <div className='flex flex-col items-center my-2'>
            <h2 className="text-xl font-semibold text-gray-800">
                {selectedTeamMember}
                <span> <i className='fa-solid fa-rocket text-red-500 text-lg '></i> </span>
            </h2>
            <p className="text-sm text-gray-500">Frontend Developer</p>
        </div>

        <div>
            <h2> pp </h2> 
            <h2> PFF </h2> 
        </div>
      </div>
  )
}
