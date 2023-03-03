import { useNavigate, useParams } from "react-router-dom"


export default function Trackinfo({ song }) {
    let navigate = useNavigate();
console.log(song)
    function goBack() {
        navigate('/');
    }

    let { id } = useParams();
    
    let track = song?.tracks?.items
    .filter((track) => {
    // console.log(track.data.id)
    return track.data.id === id
    })
    .map((track) => {
        console.log(track)

        return (
            <div>
                <h1 key='track.data.id'>Track Details</h1>
                <h3>Track Name: {track.data.name}</h3>
                <h3>Album Name: {track.data.albumOfTrack.name}</h3>
                <img src={track.data.albumOfTrack.coverArt.sources[0].url} alt={track.data.albumOfTrack.name}/>
                <h3>Artist: {track.data.artists.items[0].profile.name}</h3>
                <h3>Click on the logo bellow to play music!</h3>
                <a href={track.data.albumOfTrack.sharingInfo.shareUrl}>
                    <img className="logo" src='https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png?v=637903118310000000'
                    alt='Spotify logo'
                    />
                </a>
            </div>
        )
    })

    return(
        <div className="trackinfo">
            <button onClick={goBack}>Back</button>
            {track || <h1>Go to the home page to search for songs.</h1>}
        </div>
    )
}