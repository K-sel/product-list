import SearchBar from "./components/searching/SearchBar.jsx";
import ProductTable from "./components/products/ProductTable.jsx";
import {useState} from "react";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function App() {

    const [stockedOnly, setStockedOnly] = useState(false);
    const [search, setSearch] = useState("");

    const visibleProducts = PRODUCTS.filter((el) => {
        if (stockedOnly && !el.stocked) {
            return false

        }

        if(search && !el.name.includes(search)){
            return false;
        }

        return true
    });


    return <>
        <SearchBar
            search={search}
            onSearchChange={setSearch}
            stocked={stockedOnly}
            onStockedOnlyChange={setStockedOnly}/>

        <ProductTable products={visibleProducts} stocked={stockedOnly}/>
    </>;

}


export default App;