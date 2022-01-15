import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Navbar } from "./Navbar"
import { FaMusic } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

function Songs(){
    let {id} = useParams()
    const [play, setPlay] = useState([])

    useEffect(()=>{
        getSongs()
    },[])
    const getSongs = async() =>{
        const res = await fetch(`http://localhost:3010/album/${id}`)
        const data = await res.json()
        const albumData = data.data.songs.songs
        setPlay(albumData)
    }

    return (
        <>
        <Navbar />
        <div id="songs">
            <h1>All Song</h1>
            {play.map((e,i)=>(
                <div key={i} className="songsItem">
                    <h4><FaMusic /></h4>
                    <h4>Song Name -{e.name}</h4>
                    <h4>Duration  - {e.duration}:00</h4>
                    <h4>
                        <button><FaPlay /></button>
                    </h4>
                </div>
            ))}
        </div>
        </>
    )
}

export {Songs}