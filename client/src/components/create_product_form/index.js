import React, { useEffect, useState } from 'react';
import { createProductByFormData } from '../../utilities';

export default function CreateProductForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (error !== '') {
            window.alert(error);
            setError('');
        }
    }, [error]);
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (validateInputs()) {
            //no error found
            let formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            if(imageFile !== null){
                formData.append('productImage', imageFile);
            }

            createProductByFormData(formData, (res)=> {
                props.updateProductsCallBack();
            });
        }
    }

    const validateInputs = () => {
        if (name === '') {
            setError('Name should not be empty');
            return false;
        }
        if (description === '') {
            setError('Description should not be empty');
            return false;
        }
        if (price <= 0) {
            setError('Price should be higher than 0');
            return false;
        }

        return true;
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="enter name here" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="enter description here" onChange={(e) => setDescription(e.target.value)} />
            <input type="number" placeholder="enter price here" onChange={(e) => setPrice(e.target.value)} />
            <input type='file' onChange={(e) => setImageFile(e.target.files[0])}/>
            <button type="submit">Submit</button>
        </form>
    )
}
