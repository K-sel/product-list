import Input from "./Input.jsx";
import CheckBox from "./CheckBox.jsx";


function SearchBar({search, onSearchChange, stocked, onStockedOnlyChange}) {

    return <>
        <div className="mb-3">
            <Input value={search} placeholder={"Rechercher..."} onChange={onSearchChange}/>
            <CheckBox checked={stocked} label={"N'afficher que les produits en stock"} onChange={onStockedOnlyChange}/>
        </div>
    </>
}

export default SearchBar;