export interface Product{
         id: number,
        name: string,
        price: number,
        avatar: string,
        category: number,
        description: string,
        created_at: string,
        updated_at: string,
}

export interface  ProductPageProps  {
    products: Product,
}

export interface ProductSearchProps {
    searchHandle:(event: React.ChangeEvent<HTMLInputElement>) => void
    searchValue: string,
}


export interface Category{
    id:string,
    name:string,
}

export interface ProductCatagoryProps {
    setCatagory: (catagory: Category | null) => void
}
