export default function Dropdown({ getSong }) {
    return(
        <div className="dropdown">
            <h3>Search By</h3>
            <select>
                <option>Albums</option>
                <option>Tracks</option>
                <option>Artists</option>
            </select>
        </div>
    )
}