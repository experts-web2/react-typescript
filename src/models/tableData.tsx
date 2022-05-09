export const options = {
    search: true,
    actionsColumnIndex: -1,
    pageSize: 7,
    filtering: true,
    pageSizeOptions: [10, 20, 30, 40, 50],
    showTitle: false,
    exportButton: true,
    exportAllData:true,
    headerStyle: {
        backgroundColor: '#01579b',
        color: '#FFF'
    },
    rowStyle: {
        backgroundColor: '#EEE',
        color: '#000',
        fontSize: '0.8rem',
        fontWeight: 'medium',
        fontFamily: 'Roboto',
        boxShadow: '0px 0px 5px 0px #000'  
    },
   
}

export const productColData = [
    { title: 'Product_Id', field: 'id',width:'11%',filtering:false },
    { title: 'Product Name', field: 'name',width:'14%'},
    { title: 'Price', field: 'price',width:'12%'},
    { title: 'Image', field: 'avatar', render: (rowData: any) =><a href={rowData.avatar}>
    <img src={rowData.avatar} alt="avatar" width="70px" className="border-2 drop-shadow rounded" height="50px" /></a>,filtering:false  },
    { title: 'Category', field: 'category',width:'18%',},
    { title: 'Description', field: 'description',filtering:false }
]
