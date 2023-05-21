import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import categories_actions from "../redux/actions/mangasGet"
const { read_categories } = categories_actions

function SelectCategories({ cat, classInput }) {

    const categories = useSelector(store => store.mangasGet_reducer.categories)
    const dispatch = useDispatch()
    useEffect(
        () => {
            if (categories.length === 0) {
                dispatch(read_categories())
            }
        },
        []
    )

    return (

        <select
            ref={cat}
            name="select"
            className={classInput}
            id=""
        >
            <option disabled value="0">Insert category</option>
            {categories?.map((category) => (
                <option id={category._id} value={category._id} key={category._id}>
                    {category.name}
                </option>
            ))}
        </select>
    )
}

export default SelectCategories