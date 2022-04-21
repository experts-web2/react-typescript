
import { ProductSearchProps } from '../../../models/interface';
const ProductSearch = (props: ProductSearchProps) => {
    return (
        <>
            <input className='border-solid border-gray-200 rounded-md p-2 border-2 w-full text-base font-bold outline-0'
                type="text" placeholder="Apple Watch Samsung521 MachBook Pro...."
                value={props.searchValue} onChange={props.searchHandle} />

        </>
    )
}

export default ProductSearch