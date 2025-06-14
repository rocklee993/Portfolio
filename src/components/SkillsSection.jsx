import React from "react";

const PlayerProfileRPG = () => {
  return (
    <section id="profile" className="min-h-[100vh] bg-gradient-to-b from-[#1F1F1F] to-[#0F0F0F] text-white font-pixel py-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#FFD700] drop-shadow-[0_0_5px_rgba(255,215,0,0.8)] font-pixel">Player Profile</h2>
      </div>

      <div className="flex justify-center items-center px-6">
        <div className="w-[1200px] bg-[#2A2D4A] p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.7)] border-4 border-gray-600 hover:border-yellow-400 transition duration-300 ease-in-out relative grid grid-cols-5 gap-8">

          {/* Character Portrait + Hobbies + Languages */}
          <div className="col-span-2 flex flex-col items-center">
            <img
              src="/images/photo_id.png"
              alt="Player"
              className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 shadow-[0_0_15px_rgba(255,255,0,0.6)] z-10"
            />

            <div className="text-center mt-6">
              <h3 className="text-3xl text-yellow-300 mb-1 drop-shadow-[0_0_4px_rgba(255,255,0,0.7)]">LYES GUEBGHID</h3>
              <p className="text-sm text-gray-300">Developer | Master of Informatics</p>
            </div>

            <div className="text-left mt-5 text-gray-300 text-sm space-y-1">
              <p><span className="text-yellow-300">Age:</span> 24</p>
              <p><span className="text-yellow-300">Location:</span> Mulhouse, France</p>
              <p><span className="text-yellow-300">Education:</span> Master's in Informatics Management</p>
            </div>

            

            {/* Languages */}
            <div className="text-left mt-5 text-gray-300 text-sm space-y-1">
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">Languages</h4>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>French: Fluent</li>
                <li>English: Professional Working Proficiency</li>
                <li>German: Beginner</li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="w-1 bg-gray-600 h-full mx-6 rounded-full"></div>
          </div>

          {/* About Me */}
          <div className="col-span-2 space-y-8">
            <div className="text-left text-gray-300">
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">About Me</h4>
              <p className="text-sm leading-relaxed">
                Enthusiastic developer with a strong foundation in software engineering and IT. Experienced in building web applications and solving complex problems. Seeking opportunities to contribute to innovative projects and grow professionally.
              </p>
            </div>
            {/* Hobbies */}
            <div className="text-left mt-5 text-gray-300 text-sm space-y-1">
              <h4 className="text-xl text-yellow-300 mb-3 drop-shadow-[0_0_3px_rgba(255,255,0,0.7)]">Hobbies</h4>
              <ul className="space-y-2 text-sm list-disc list-inside">
                <li>Exploring new technologies</li>
                

                <li>Playing video games</li>
                <li>Reading science fiction novels</li> 
                <li>Listening to music and learning how it's made</li>
                <li>Content Creation and Video Editing</li>
                
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlayerProfileRPG;