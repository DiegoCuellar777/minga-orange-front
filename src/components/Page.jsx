import Nav from './Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import chapterDataAction from "../../src/redux/actions/chapterData"  // Es un objeto con todas las acciones que se configuraron 

const {chapterData} = chapterDataAction

export default function Page() {
  const store =useSelector(store=> console.log(store.dataChapter))
  const dispatch = useDispatch()

  const { id, page } = useParams();
  const [chapters, setChapters] = useState([]);
  const [currentPage, setPage] = useState(parseInt(page));
  const navigate = useNavigate();
  const currentChapter = chapters.findIndex((chapter) => chapter._id === id);

  useEffect(() => {
    let token = localStorage.getItem('token');
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios(apiUrl + `chapters/${id}`)
      .then((res) => {
        setChapters(res.data.chapters)
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    navigate(`/chapters/${id}/${currentPage}`);
  }, [currentPage, navigate, id]);

  function handleClick(event) {
    const { clientX } = event;
    const { left, right } = event.target.getBoundingClientRect();

    if (clientX < (left + right) / 2) {
      if (currentPage > 0) {
        setPage(currentPage - 1);
      } else {
        const currentChapter = chapters.find((chapter) => chapter._id === id);
        if (currentChapter && currentChapter.pages.length > 0) {
          const mangaId = currentChapter.manga_id;
          console.log(mangaId)
          navigate(`/manga/${mangaId}`);
          return;
        }
      }
    } else {
      if (currentPage === chapters[currentChapter].pages.length - 1) {
        const nextChapterIndex = currentChapter + 1;
        if (nextChapterIndex < chapters.length) {
          const nextChapterId = chapters[nextChapterIndex]._id;
          setPage(0);
          navigate(`/chapters/${nextChapterId}/0`);
          return;
        }
      }
      setPage(currentPage + 1);
    }
    dispatch(chapterData({
      title: chapters[currentChapter].title,
      pageRef: currentPage+1,
      _id: chapters[currentChapter]._id,
      manga_id: chapters[currentChapter].manga_id
    }))
  }

  console.log(currentChapter)

  return (
    <div style={{ position: 'relative' }}>
      <Nav />
      <div style={{ position: 'absolute', top: '4%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <h1 className='text-white'>
            Chapter #{currentChapter + 1} - {chapters[currentChapter].title}
          </h1>
        )}
      </div>
      <div className="w-screen h-screen bg-[url('/images/Ellipse.png')] bg-cover flex flex-col items-center p-[5%]">
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <img
            onClick={handleClick}
            src={chapters[currentChapter].pages[currentPage]}
            className="h-[90%]"
            alt=""
          />
        )}
      <div className='w-screen flex justify-end mr-[20%]'>
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <h2 className='text-white '> {currentPage+1}/{chapters[currentChapter].pages.length} </h2>
        )}
      </div>
      </div>
    </div>
  );
}
