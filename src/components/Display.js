export default function Display({song}) {
    return(
        <>
        <h1>Tracks: </h1>
        {song.tracks.items.map((x) => (
            <>
                <h3 className="">{x.data.name}</h3>
                <img src={x.data.albumOfTrack.coverArt.sources[0].url} alt={x.data.albumOfTrack.coverArt.name}/>
            </>
        ))}

        {/* <h3>Year: {movie.Year}</h3>
        <h3>Plot: {movie.Plot}</h3> */}
        </>
    )
}