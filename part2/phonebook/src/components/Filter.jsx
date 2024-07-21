const Filter = ({searchItem, setSearchItem}) => {
    return (
        <div>
            filter shown with <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
        </div>
    )
}

export default Filter