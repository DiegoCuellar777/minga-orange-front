import { BiArrowToTop } from "react-icons/bi"

function ScrollTop() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div onClick={scrollToTop} className="text-white text-2xl cursor-pointer flex items-center justify-center rounded-lg w-8 h-8 bg-[#f632327a] bottom-12 right-12 fixed z-10"><BiArrowToTop /></div>
        </>
    )
}

export default ScrollTop