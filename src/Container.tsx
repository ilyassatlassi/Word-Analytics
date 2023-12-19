import { useState } from "react";
import Stats from "./components/Stats"
import Textarea from "./components/Textarea"

const Container = () => {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 280,
    facebookCharactersLeft: 2200,
  });
  return (
    <main className="max-w-5xl h-[520px] bg-white rounded-xl shadow-md mt-[55px] flex overflow-hidden relative">
       <Textarea setStats={setStats}/>
       <Stats stats={stats}/>
    </main>
  )
}

export default Container