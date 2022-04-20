import { useNavigate } from 'react-router-dom';
import { ProductPageProps } from '../../../models/interface'

const ProductTile = (props: ProductPageProps) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="w-full md:w-1/4 px-3 mb-10" key={props.products.id}
                onClick={() => navigate(`/product/${props.products.id}`)}>
                <div className="bg-white-300 border-solid border-8 border-white rounded-xl drop-shadow-md">
                    <img src={props.products.avatar} alt={props.products.name}
                        className="h-72" />
                </div>
                <div className="mt-2 ml-3 pt-1">
                    <div className="text-base text-center font-semibold mb-1">{props.products.name}</div>
                    <div className="text-base text-center font-semibold  mt-2">$ {props.products.price}</div>
                </div>
            </div>
        </>
    )
}

export default ProductTile