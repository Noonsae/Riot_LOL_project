import ContentCardList from "@/components/home/ContentCardList";
import CinematicBackground from "@/components/ui/CinematicBackground";

const Home = () => {
  
  return (
    <section className="grid justify-items-center m-auto h-full">

      <CinematicBackground />

      <article className="min-h-[calc(100vh-280px)] flex items-center flex-row justify-center">

        <div className="w-full relative z-10 max-w-[1200px] flex flex-col justify-center -mt-10 gap-10 text-center">
          <p className="text-[26px] dark:font-medium font-bold mb-[0px] mx-auto lg:w-full">
            Riot Games API를 통해 챔피언과 아이템 정보를 쉽고 빠르게
            제공해드립니다.
          </p>
          <ContentCardList/>
        </div>

      </article>

    </section>
  );
}

export default Home;
