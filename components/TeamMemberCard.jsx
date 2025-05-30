import { Exo_2, Urbanist } from 'next/font/google';
import React from 'react'


const exo2 = Exo_2({subsets: ["latin"],weight: ["400", "700"]});
const urbanist = Urbanist({ subsets: ['latin'], weight: ['400', '700'] });

export default function TeamMemberCard(props) {
    const {selectedTeamMember, selectTeamMember, selectedMemberInfo} = props
    
  return (
    <div className={`flex flex-col items-start rounded text-black transition-all duration-500 ease-in-out pt-6 overflow-hidden ` + selectTeamMember == ''? "bg-red-500" : "team-member-card"}>
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg w-full max-w-md relative border-2">
        <i
        className="fa-solid fa-xmark text-xl transition-all duration-300 text-red-500 hover:text-red-400 hover:scale-105 cursor-pointer absolute top-4 right-4 "
        onClick={() => selectTeamMember("")}
        ></i>

        <div className="h-[90px] w-[90px] border-4 border-white rounded-full z-10 shadow-md overflow-hidden -mt-10">
        <img
            src={selectedMemberInfo?.avatar}
            alt={selectedTeamMember + "_avatar"}
            className="h-full w-full object-cover"
            />
        </div>
        <p className='text-red-500'>SMASH</p>

        <div className="text-center mt-4">
        <h2 className={"text-2xl font-bold text-gray-800 flex items-center gap-2 justify-center " +  exo2.className}>
            {selectedTeamMember}
        </h2>
            <span className={"mt-1 inline-block px-3 py-1 text-sm border rounded-full shadow-sm " + (selectedMemberInfo.nickTheme) + exo2.className}>
             {selectedMemberInfo?.nickname} {selectedMemberInfo?.icon}
            </span>
        <p className="text-sm text-gray-500 mt-1">{selectedMemberInfo?.role}</p>
        </div>

        <div className={"mt-4 text-start text-sm " + (selectedMemberInfo?.bioTheme) }>
        <p>{selectedMemberInfo?.bio}</p>
        </div>

        <div className="mt-5 w-full">
        <h3 className={"text-md font-semibold text-gray-700 mb-2 " + urbanist.className}>Strong Sides
            <i className="fa-solid fa-dumbbell ml-2 text-gray-700 text-lg"></i>
        </h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            {selectedMemberInfo?.strongSides?.map((side, index) => (
                <li key={index} className='text-gray-700 '>{side}</li>
            ))}
        </ul>
        </div>

        <div className="mt-5 w-full">
        <h3 className={"text-md font-semibold text-gray-700 mb-2 " + urbanist.className}>Facts
            <i className="fa-solid fa-wand-magic-sparkles ml-2 text-purple-500 text-lg"></i>
        </h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            {selectedMemberInfo?.facts?.map((fact, index) => (
                <li key={index} className='text-gray-700 '>{fact}</li>
            ))}
        </ul>
        </div>

        <div className="flex self-start gap-4 mt-8">
        <a
            title={selectedMemberInfo?.email}
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full text-sm transition cursor-not-allowed"
        >
            <i className="fa-solid fa-envelope text-xl text-white"></i>
        </a>

        <a
            href={selectedMemberInfo?.contacts?.linkedIn}
            title="Linkedin"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm transition cursor-pointer"
        >
            <i className="fa-brands fa-linkedin text-xl "></i>
        </a>

        <a
            href={selectedMemberInfo?.contacts?.gitHub}
            title="Github"
            target="_blank"
            className="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition cursor-pointer"
        >
            <i className="fa-brands fa-github text-xl "></i>
        </a>
        </div>
    </div>
    </div>

  )
}
