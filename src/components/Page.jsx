import { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function Page() {
  const { id, page } = useParams();
  const [chapters, setChapters] = useState([]);
  const [currentPage, setPage] = useState(parseInt(page));
  const navigate = useNavigate();
  const currentChapter = chapters.findIndex((chapter) => chapter._id === id);

  useEffect(() => {
    let token = localStorage.getItem('token');
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    axios(apiUrl + `chapters/${id}`)
      .then((res) => setChapters(res.data.chapters))
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
      }
    } else {
      if (currentPage === chapters[currentChapter].pages.length - 1) {
        const nextChapterIndex = currentChapter + 1;
        if (nextChapterIndex < chapters.length) {
          const nextChapterId = chapters[nextChapterIndex]._id;
          setPage(0); // Establecer la página en 0
          navigate(`/chapters/${nextChapterId}/0`);
          return; // Salir de la función para evitar la actualización adicional de currentPage
        }
      }
      setPage(currentPage + 1);
    }
  }

  console.log(chapters);

  return (
    <div>
      <h1>hola</h1>
      <div className="w-screen h-screen bg-[url('/images/Ellipse.png')] bg-cover flex justify-center">
        {chapters.length > 0 && currentChapter >= 0 && currentPage < chapters[currentChapter].pages.length && (
          <img
            onClick={handleClick}
            src={chapters[currentChapter].pages[currentPage]}
            className=""
            alt=""
          />
        )}
      </div>
    </div>
  );
}