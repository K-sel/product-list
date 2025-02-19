/**
 * @param name: String
 * @constructor
 */

function ProductCategoryRow({name}) {
    return <tr>
        <td colSpan={2}><strong>{name}</strong></td>
    </tr>
}

export default ProductCategoryRow;