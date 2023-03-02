import { Link } from "react-router-dom";

export default function Display({song}) {
    return(
        <>
        <h1>Tracks: </h1>
        {song.tracks.items.map((x) => (
            <>
                <h3 key={x.id} className="">{x.data.name}</h3>
                <Link key={x.data.albumOfTrack.id} to={`/trackinfo/${x.data.albumOfTrack.id}`}>
                    <img key={x.data.albumOfTrack.id} src={x.data.albumOfTrack.coverArt.sources[0].url} alt={x.data.albumOfTrack.coverArt.name}/>
                </Link>
            </>
        ))}
        </>
    )
}