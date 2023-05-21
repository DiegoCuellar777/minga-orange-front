
function CategoriesListMymangas(props) {

    const {categories, cates, setCats} = props

    return (
        <>
            {categories ? categories.map((eachCategory, index) => (
                <button className={`text-start ${cates?.includes(eachCategory._id) ? 'text-white' : 'text-[#9d9d9d]'}`} data-valor={eachCategory._id} key={index} id={eachCategory._id} onClick={() => setCats(eachCategory._id)}>
                    {eachCategory.name}
                </button>
            )) : <p className="text-[#9d9d9d]">No categories found</p>}
        </>
    )
}

export default CategoriesListMymangas