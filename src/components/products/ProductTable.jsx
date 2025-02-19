import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow from "./ProductRow.jsx";

/**
 *
 * @param {{name: string, price: string, stocked: boolean}} product
 * @constructor
 */

function ProductTable({products}) {

    const rows = [];
    let lastCat = null;

    for (let product of products){
        if(product.category !== lastCat){
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        lastCat = product.category;
        rows.push(<ProductRow key={product.name} product={product} />)
    }

    return <table className={"table"}>
        <thead>
        <tr>
            <th>Nom</th>
            <th>Prix</th>
        </tr>
        </thead>

        <tbody>
        {rows}
        </tbody>

    </table>
}

export default ProductTable;