import React from 'react'
import { useLocation } from 'wouter'
import useForm from './hook'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating }) {
    const [, pushLocation] = useLocation()

    // const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))

    // const [rating, setRating] = useState(initialRating)

    // const [times, setTimes] = useState(0)



    const {keyword, rating, times, updateKeyword, updateRating} = useForm({initialKeyword,initialRating })

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }



    const handleChange = (e) => {
        updateKeyword(e.target.value)
       
    }


    const handleChangeRating = (e) => {
        updateRating(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <select
                onChange={handleChangeRating} value={rating}
            >
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <small>{times}</small>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Search a gif..."
                value={keyword}
            />
            <button type="submit">Buscar</button>
        </form>
    )
}

export default React.memo(SearchForm)

