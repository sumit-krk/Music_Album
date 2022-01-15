import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaSearch } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';

function Album() {
    const [list, setList] = useState([])
    const [search, setSearch] = useState([])
    const [prev, setPrev] = useState(1)
    const [text, setText] = useState("")

    useEffect(() => {
        getAlbum()
    }, [prev])

    const getAlbum = async () => {
        const res = await fetch(`http://localhost:3010/album?page=${prev}`)
        const data = await res.json()
        const albumData = data.data.album
        setList(albumData)
        setSearch(albumData)
    }

    const handlePrev = () => {
        setPrev(p => p - 1)
    }

    const handleNext = () => {
        setPrev(p => p + 1)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSearch = () => {
        console.log(list);
        const update = list.filter((e) => e.albumName.toLowerCase().includes(text.toLowerCase()))
        console.log(update);
        setSearch(update)
        setText("")
    }

    return (
        <>
            <div id="nav">
                <div id="navbarButton">
                    <h1>My Music</h1>
                </div>
                <div id="search">
                    <input onChange={handleChange} value={text} placeholder="Enter Artist Name" />
                    <button id="btn2" onClick={handleSearch}><FaSearch /></button>
                </div>
            </div>

            <div id="data">
                {search.map((e, i) => (
                    <div key={i} className="Allsong">
                        <NavLink to={`/songs/${e._id}`} style={{ textDecoration: "none" }}>
                            <img src={e.coverImage} alt="cover" width="300px" height="300px" />
                            <h4>Singer Name :- {e.artistName}</h4>
                            <h4>Total Songs :- {e.songs.length}</h4>
                        </NavLink>
                    </div>
                ))}

            </div>
            <center id="button-1">
                <button onClick={handlePrev} disabled={prev == 1 ? true : false}><FaArrowAltCircleLeft /></button>
                <button onClick={handleNext} disabled={prev < 4 ? false : true}><FaArrowAltCircleRight /></button>
            </center>
        </>
    )
}

export { Album }