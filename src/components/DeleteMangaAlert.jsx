
function DeleteMangaAlert(props) {
  const { message, onConfirm, onCancel } = props
  return (
    <>
      <div className="bg-[#14c69c5f] absolute flex justify-center z-30 h-[128vw] w-full">
        <div className="bg-[#010101cf] mt-8 w-[25rem] h-[30rem] flex flex-col justify-evenly fixed rounded-md shadow-[0_10px_0_rgba(256,250,250,1)]">
          <h2 className="text-white mt-8 font-bold text-center">{message}</h2>
          <button className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold" onClick={onConfirm}>Sí</button>
          <button className="bg-[#ffffff] w-[15rem] h-10 rounded-[4px] font-montserrat font-extrabold" onClick={onCancel}>No</button>
        </div>
      </div>
    </>
  )
}

export default DeleteMangaAlert
