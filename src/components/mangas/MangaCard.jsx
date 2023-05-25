import { Link as Anchor } from "react-router-dom"

function MangaCard(props) {

  const {
    mangas,
    imageMangaNoFound
  } = props

  return (
    <>
      {mangas.length > 0 ? mangas.map((eachManga, index) => (
        <Anchor to={`/manga/${eachManga._id}`} key={index} className="w-[22vw] md:w-[10rem] z-10 lg:w-[12rem] text-[#979797] hover:text-white hover:drop-shadow-[0_0_5px_rgba(250,250,250,0.4)] hover:font-bold md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem] duration-50 ease-in">
          <div className="h-full flex-col flex justify-between hover:scale-[1.05] hover:-translate hover:drop-shadow-[0_0_90px_rgba(0,0,250,0.5)] duration-100 ease-in">
            <img className="sm:h-[3rem] h-[8rem] md:h-[14rem] cursor-pointer md:w-[10rem] lg:w-full lg:h-[19rem] border-[1.5px] border-transparent hover:border-[#ffbb00] hover:border-[1.5px] hover:shadow-[0_4px_0px_rgba(250,250,250,0.7)] hover:drop-shadow-[0_0_10px_rgba(80,80,250,0.5)] object-cover rounded-lg duration-100 ease-in" src={eachManga.cover_photo} alt={eachManga.title} />
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