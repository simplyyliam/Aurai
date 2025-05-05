import Card from "../components/Card"


function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-background text-white overflow-hidden ">
        <h1 className="text-header italic font-dm-sans font-light  tracking-header">
          Aurai
        </h1>
        <Card
          Title="Stillness"
          Background="/Stillness/2.png"
          Width={150}
          Height={150}
          bottom={5}
          right={10}
          link="./Theme Pages/Stillness.tsx"
        />
        <Card
          Title="Obsidian"
          Background="/Obsidian/4.png"
          Width={150}
          Height={250}
          top={5}
          left={10}
          link="./Theme Pages/Obsidian.tsx"
        />
        <Card
          Title="Verdant"
          Background="/Verdant/2.png"
          Width={300}
          Height={150}
          bottom={5}
          left={10}
          link="./Theme Pages/Verdant.tsx"
        />
        <Card
          Title="Dreamy"
          Background="/Dreamy/1.png"
          Width={220}
          Height={180}
          top={5}
          right={15}
          link="./Theme Pages/Dreamy.tsx"
        />
      </div>
    </>
  );
}

export default Home