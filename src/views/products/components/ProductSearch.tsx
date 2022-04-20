import { ProductSearchProps } from '../../../models/interface'

const ProductSearch = (props: ProductSearchProps) => {
    return (
        <div>
            <input className='border-solid border-gray-200 rounded-md p-2 border-2 w-96 text-base font-bold'
                type="text" placeholder="Apple Watch Samsung521 MachBook Pro...."
                value={props.searchValue} onChange={props.searchHandle} />
        </div>
    )
}

export default ProductSearch