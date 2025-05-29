import React from 'react'

export default function TeamMemberCard(props) {
    const {selectedTeamMember, selectTeamMember} = props
  return (
    <div className={`flex flex-col items-center max-w-[800px] w-full bg-white rounded text-black transition-all duration-500 ease-in-out pt-6 team-member-card
     overflow-hidden ${selectedTeamMember ? " max-h-[40vh] " : " max-h-[0vh] "} `}>
        <i className="fa-solid fa-xmark text-xl transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 cursor-pointer absolute self-end "
        onClick={() => selectTeamMember("")}></i>
        <div className={`flex justify-center items-center h-35 w-35 border-white rounded-full border-4 z-3 relative ml-[-15px] cursor-pointer
            transition-duration-300 `}>
            <img src='avatars/Multiavatar-Alik.png'  alt='misho_avatar'/>
        </div>
        <h2> {selectedTeamMember} </h2> 
        <div>
            <h2> pp </h2> 
            <h2> PFF </h2> 
        </div>
      </div>
  )
}
