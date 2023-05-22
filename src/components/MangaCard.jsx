import { Link as Anchor } from "react-router-dom"

function MangaCard(props) {

  const {
    mangas,
    imageMangaNoFound
  } = props

  return (
    <>
      {mangas.length > 0 ? mangas.map((eachManga, index) => (
        <Anchor to={`/manga/${eachManga._id}`} key={index} className="w-[22vw] md:w-[10rem] z-10 lg:w-[12rem] text-[#979797] hover:text-white hover:font-semibold md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem]">
          <div className="h-full flex-col flex justify-between hover:scale-[1.05] hover:-translate hover:drop-shadow-[0_0_100px_rgba(0,0,250,0.5)] duration-100 ease-in">
            <img className="sm:h-[3rem] h-[8rem] md:h-[14rem] cursor-pointer md:w-[10rem] lg:w-full lg:h-[19rem] object-cover rounded-lg " src={eachManga.cover_photo} alt={eachManga.title} />
            <p className="text-[2px] font-[200] sm:font-[300] cursor-pointer0.0..0. sm:text-sm md:text-md">{eachManga.title}</p>
          </div>
        </Anchor>
      )) : <div className="flex items-center justify-center w-full">
        {imageMangaNoFound}
        <p className="text-[#ffffff] relative text-4xl bottom-20  font-black">¡Ups! No Mangas found</p>
      </div>}
    </>
  )
}

export default MangaCard 