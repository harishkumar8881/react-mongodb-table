import 'axios';
import axios from 'axios';
import { Constants } from '../constants';

export const getAllProducts = async () => {
    let result;
    try{
        result = await axios.get(Constants.product_base_url);
        if(result.status !== 200){
            result.error = "something wrong";
            return null; 
        }
    } catch (error) {
        console.log("Error Occured in getAllProducts ", error);
    }
    return result.data;
}

export const createProductByFormData = async (formData, cb) => {
    try {
        axios({
            url: Constants.product_base_url,
            method: 'post',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            } 
        }).then((res) => {
            cb(res);
        })
    } catch (error) {

    }
}