import React from 'react'

export default function TeamMemberCard(props) {
    const {selectedTeamMember, selectTeamMember} = props
  return (
    <div className={`flex flex-col items-center max-w-[800px] w-full bg-white rounded text-black transition-all duration-500 ease-in-out pt-6 team-member-card
     overflow-hidden ${selectedTeamMember ? " max-h-[40vh] " : " max-h-[0vh] "} `}>
        <i className="fa-solid fa-xmark text-lg transition-all duration-300 text-red-500 relative z-5 hover:text-red-400 hover:scale-105 cursor-pointer absolute self-end "
        onClick={() => selectTeamMember("")}
        ></i>
        Selected: {selectedTeamMember}
      </div>
  )
}
