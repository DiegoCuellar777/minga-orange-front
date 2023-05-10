
function SelectCategories({category,cat}) {
    return (
    <select
        ref={cat}
        name="select"
        className="text-white border-b-[1px] outline-none bg-transparent text-[2px] font-montserrat"
        id=""
    >
        <option className='text-black' disabled value="">Insert category</option>
        {category?.map((category) => (
            <option className='text-black' id={category._id} value={category._id} key={category._id}>
                {category.name}
            </option>
        ))}
    </select> 
    )
}

export default SelectCategories

/*     const [category, setCategory] = useState([])

    const fetchData = () => {
        return axios.get(apiUrl + "categories")
            .then((res) => setCategory(res.data.categories))
    }
    useEffect(() => {
        fetchData()

    }, []) */

  