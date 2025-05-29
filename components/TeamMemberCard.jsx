import React from 'react'

export default function TeamMemberCard(props) {
    const {selectedTeamMember} = props
  return (
    <div className={`flex flex-col items-center h-[40vh] max-w-[800px] w-full bg-white rounded p-4 text-black transition-all duration-500 ease-in-out pt-6
     overflow-hidden ${selectedTeamMember ? " max-h-[40vh] " : " max-h-[0vh] " } `}>
        Selected: {selectedTeamMember}
      </div>
  )
}
