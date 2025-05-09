import { useEffect, useRef } from "react";
import Card from "../components/Card"
import gsap from "gsap";


function Home() {

  const TitleRef = useRef(null)


  useEffect (() => {
    if (TitleRef) {
      gsap.to(TitleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "expo.out"
      })
    }
  })

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-background text-white overflow-hidden">
        <h1
          ref={TitleRef}
          className="text-header italic font-dm-sans font-light  tracking-header opacity-0 scale-0"
        >
          Aurai
        </h1>
        <Card
          Title="Stillness"
          Background="/Stillness/2.png"
          Width={150}
          Height={150}
          bottom={5}
          right={10}
          link="/src/Pages/Theme Pages/Stillness.tsx" 
        />
        <Card
          Title="Obsidian"
          Background="/Obsidian/4.png"
          Width={150}
          Height={250}
          top={5}
          left={10}
          link="/src/Pages/Theme Pages/Obsidian.tsx" 
        />
        <Card
          Title="Verdant"
          Background="/Verdant/2.png"
          Width={300}
          Height={150}
          bottom={5}
          left={10}
          link="/src/Pages/Theme Pages/Verdant.tsx"
        />
        <Card
          Title="Dreamy"
          Background="/Dreamy/1.png"
          Width={220}
          Height={180}
          top={5}
          right={15}
          link="/src/Pages/Theme Pages/Dreamy.tsx"
        />
      </div>
    </>
  );
}

export default Home