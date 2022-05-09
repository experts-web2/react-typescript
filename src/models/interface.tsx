export interface Product {
    id: number,
    name: string,
    price: number,
    avatar: string,
    category: number | string,
    description: string,
    createdAt: string,
    updated_at: string,
    email: string
}

export interface ProductPageProps {
    products: Product,
}

export interface Category {
    id: string,
    name: string,
}

export interface ProductCatagoryProps {
    setCatagory: (catagory: Category | null) => void
}

export interface ProductSearchPropsValue {
    searchValue: string
    setsearchValue: any
}




export interface GetCategoriesMap {
    name: string,
    id: number
}


export interface TableRangeHandle{
    setDateRange: (date: any) => void,
    startDate:Date,
    endDate:Date
}




















// export interface ProductSearchProps {
//     searchHandle: (event: React.ChangeEvent<HTMLInputElement>) => void
//     searchValue: string,
// }