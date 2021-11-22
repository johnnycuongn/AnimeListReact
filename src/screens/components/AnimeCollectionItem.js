import { useEffect } from "react"

export function AnimeCollectionItem({ anime }) {

    useEffect(() => {
    })

    function onItemClicked(e) {
        e.preventDefault()

        console.log('Click anime' + anime.mal_id)
    }

    return (
        <div onClick={onItemClicked} className="max-w-sm my-5 rounded-md shadow-md justify-center align-middle overflow-hidden flex items-center relative">

            < img className="object-fill min-w-full min-h-full flex-shrink-0" src={anime.image_url} alt={anime.title} />

            <div className="text-sm text-center w-5 content-center text-white bg-black bg-opacity-40 rounded-full absolute top-1 right-1">{anime.rank}</div>
            <div className="text-sm font-medium w-4/5 text-white bg-black bg-opacity-40 rounded-md p-1 absolute top-1 left-1">{anime.title}</div>


            <div className="h-11 w-full bg-black bg-opacity-50 absolute bottom-0" >
                <div className="text-sm text-center w-5 content-center text-white  rounded-ful absolute top-0.5 left-1">{anime.score}</div>
                <div className="text-sm text-center w-5 content-center text-white rounded-ful absolute bottom-0.5 left-1">{anime.members}</div>
                <div className="text-sm text-center content-center text-white rounded-ful absolute right-1">{anime.type}({anime.episodes})</div>
            </div >

        </div >
    )
}