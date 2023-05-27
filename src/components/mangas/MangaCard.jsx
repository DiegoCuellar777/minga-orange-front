import axios from "axios"
import { useEffect, useState } from "react"
import { AiOutlineDislike, AiOutlineLike, AiTwotoneDislike, AiTwotoneLike } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import apiUrl from "../../../api"

function MangaCard(props) {

  const {
    mangas,
    imageMangaNoFound
  } = props

  const [reactions, setReactions] = useState(null)
  const [category, setCategory] = useState(null)
  const [idD, setId] = useState(null);
  const [title, setTitle] = useState(null)
  const [photo, setPhoto] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isReactionPending, setIsReactionPending] = useState(false);

  const handleLike = (id, title, categories, reaction, photo) => {
    setCategory(categories)
    setTitle(title)
    setIsLiked(reaction)
    setId(id);
    setPhoto(photo);
    setIsReactionPending(true);
  };

  const handleDislike = (id, title, categories, reaction, photo) => {
    setCategory(categories)
    setTitle(title)
    setIsLiked(reaction)
    setId(id);
    setPhoto(photo);
    setIsReactionPending(true);
  };

  const sendReaction = (reaction) => {
    if (reaction !== null && idD !== null && photo !== null) {
      const data = {
        category_id: category,
        title: title,
        name: reaction,
        manga_id: idD,
        cover_photo: photo
      };

      const token = localStorage.getItem("token");
      const headers = { headers: { "Authorization": `Bearer ${token}` } };

      axios.post(`${apiUrl}reactions`, data, headers)
        .then((res) => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsReactionPending(false);
        });
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const token = localStorage.getItem("token");
    const headers = { headers: { "Authorization": `Bearer ${token}` } };

    axios.get(`${apiUrl}reactions`, headers, userId)
      .then((res) => {
        console.log(res.data.reaction[0]._id);
        setReactions(res.data.reaction);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isReactionPending) {
      sendReaction(isLiked);
    }
  }, [isReactionPending]);

  useEffect(() => {
    if (idD !== null && photo !== null) {
      setIsReactionPending(true);
    }
  }, [idD, photo]);

  console.log(reactions)

  const navigate = useNavigate()
  const mangaDetail = (id) => {
    navigate(`/manga/${id}`)
  }

  return (
    <>
      {mangas.length > 0 ? mangas.map((eachManga, index) => (
        <div key={index} className="w-[22vw] md:w-[10rem] z-10 lg:w-[12rem] text-[#979797] hover:text-white hover:drop-shadow-[0_0_5px_rgba(250,250,250,0.4)] hover:font-bold md:h-[16rem] lg:h-[21rem] lg:min-h-[21rem] duration-50 ease-in">
          <div className="h-full relative flex-col flex justify-between hover:scale-[1.05] hover:-translate hover:drop-shadow-[0_0_90px_rgba(0,0,250,0.5)] duration-100 ease-in">
            <img onClick={() => mangaDetail(eachManga._id)} className="sm:h-[3rem] h-[8rem] md:h-[14rem] cursor-pointer md:w-[10rem] lg:w-full lg:h-[19rem] border-[1.5px] border-transparent hover:border-[#ffbb00] hover:border-[1.5px] hover:shadow-[0_4px_0px_rgba(250,250,250,0.7)] hover:drop-shadow-[0_0_10px_rgba(80,80,250,0.5)] object-cover rounded-lg duration-100 ease-in" src={eachManga.cover_photo} alt={eachManga.title} />
            <p className="text-[2px] w-[80%] font-[200] sm:font-[300] cursor-pointer sm:text-sm md:text-md">{eachManga.title}</p>
            <div className="flex justify-evenly z-30 items-center absolute w-[20%] h-[1.2rem] right-0 bottom-0 text-white text-[.9rem]">
              {eachManga._id === reactions && isLiked === "like" ? (
                <AiTwotoneLike onClick={() => handleLike(eachManga._id, eachManga.title, eachManga.category_id, "like", eachManga.cover_photo)} />
              ) : (
                <AiOutlineLike onClick={() => handleLike(eachManga._id, eachManga.title, eachManga.category_id, "like", eachManga.cover_photo)} />
              )}
              {eachManga._id === reactions && isLiked === "dislike" ? (
                <AiTwotoneDislike onClick={() => handleDislike(eachManga._id, eachManga.title, eachManga.category_id, "dislike", eachManga.cover_photo)} />
              ) : (
                <AiOutlineDislike onClick={() => handleDislike(eachManga._id, eachManga.title, eachManga.category_id, "dislike", eachManga.cover_photo)} />
              )}
            </div>
          </div>
        </div>
      )) : <div className="flex items-center justify-center w-full">
        {imageMangaNoFound}
        <p className="text-[#ffffff] relative text-4xl bottom-20  font-black">¡Ups! No Mangas found</p>
      </div>}
    </>
  )
}

export default MangaCard 