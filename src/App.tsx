import './App.css'
import Logo from './assets/flamechoke-logo.webp'

function App() {
  return (
    <div className="min-h-screen bg-[#1c1c1c]">
      {/* Header */}
      <div className="flex justify-center position-relative items-center h-[5rem] bg-linear-to-bl from-[#39287B] to-black border-b-2 border-[#4f4f4f]">
        <img src={Logo} alt="Flamechoke Logo" className="transform scale-50" />
        <button className="absolute right-0 mr-4 bg-[#2b2b2b] text-white px-4 py-2 rounded-full border border-[#4f4f4f] active:bg-[#3e3e3e]">?</button>
      </div>

      {/* Main Content */}
      <main className="p-4 flex flex-col items-center min-h-screen">
        <p className="text-gray-400 pb-10">Resource for quick lookup of optimal flamechoke followups</p>
        <input type="text" placeholder="Search..." className="w-full max-w-md p-2 h-14 rounded-lg border border-gray-500 bg-[#2b2b2b] text-white text-lg focus:outline-1.5 focus:outline-[#39287B]" />
      
        {/* Footer */}
        <p className="text-gray-400 pt-10">Made by redux | <a href="https://x.com/Ganonberg" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a> | <a href="https://github.com/rileyglot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
        <p className="text-gray-400 pt-1">HEAVILY inspired by <a href="https://monke.gg/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Monke.gg</a>, check it out </p>
      </main>
      
    </div>

  )
}

export default App
