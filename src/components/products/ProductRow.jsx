/**
 * Ligne produit un tableau a deux lignes (nom / prix)
 * @param {{name: string, price: string, stocked: boolean}} product
 * @constructor
 */

function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: "red"};

    return (
        <tr className="product-row">
            <td style={style}> {product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;