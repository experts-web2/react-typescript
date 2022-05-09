import * as yup from 'yup';
export  const productValidation = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email('Invalid email format').required('Email is Required'),
    avatar: yup.string().required("avatar is required"),
    description: yup.string().required("description is required"),    
    price: yup.string().required("price is required"),
    category: yup.string().required("catagory is required"),
});

