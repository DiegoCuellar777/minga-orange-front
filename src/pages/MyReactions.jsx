import { useEffect, useState } from "react"
import BrowserMangas from '../components/BrowserMangas.jsx'
import { BiSortAlt2 } from 'react-icons/bi'
import apiUrl from "../../api.js"
import axios from "axios"

function MyReactions() {

  const [order, setOrder] = useState(1)
  const [sort, setSort] = useState(false)
  const [reactions, setReactions] = useState(null)

  function SORT(boolean) {
    if (sort == false) {
      setSort(true)
      return setOrder(1)
    }
    if (boolean == true) {
      setSort(false)
      return setOrder(-1)
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const token = localStorage.getItem("token");
    const headers = { headers: { "Authorization": `Bearer ${token}` } };

    axios.get(`${apiUrl}reactions?name=like&sort=${order}`, headers, userId)
      .then((res) => {
        console.log(res.data.reaction);
        setReactions(res.data.reaction);
      })
      .catch(err => {
        console.log(err);
      });
  }, [sort]);

  return (
    <>
      <div className="w-full h-screen">
        <div className="md:right-1 md:bottom-[-2rem] md:opacity-60 z-0 md:h-[60%] md:w-[50%] md:absolute rounded-full md:bg-gradient-to-r from-black to-indigo-700 animate-pulse-md md:blur-[115px]"></div>
        <div className="flex text-white w-full h-full flex-col items-center relative">
          <h1 className="mt-[4rem] text-lg md:text-3xl">Favourites</h1>
          <BrowserMangas />
          <div className="flex flex-col w-full h-full items-center justify-evenly">
            <div className="flex gap-2 text-xs">
              <div className="">comic shojo seinen shonen</div>
              <span className="w-6 h-6 bg-[#616161] text-lg flex items-center justify-center"><BiSortAlt2 onClick={() => SORT(true)} /></span>
            </div>
            <div className="gap-2 flex items-center flex-col w-full">

              {reactions?.length > 0 ? reactions.map((eachReaction, index) => (
                <div className="bg-white flex w-[15rem] justify-between text-sm text-black rounded-md h-[6rem]" key={index}>
                  <div className="w-[70%]">
                    <h2>{eachReaction.title}</h2>
                    <p>{eachReaction.category_id}</p>
                  </div>
                  <img className="h-full w-[30%] object-cover rounded-l-[70%] rounded-r-md" src={eachReaction.cover_photo} alt="" />
                </div>
              )) : null}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyReactions