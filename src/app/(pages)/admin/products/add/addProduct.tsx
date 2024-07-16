import React, { useEffect, useState } from 'react'
import { CustomComponents } from '@/ui-component';
import { Grid } from '@mui/material';
import MultiSelect from '@/ui-component/controls/select/MultiSelect';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { createProductAction, updateProductAction } from '@/lib/store/thunks/productAction';
import { setTaskLoader } from '@/lib/store/features/loader/loaderSlice';


const initialFormValues = {
    id: '',
    product_name: '',
    description: '',
    categories:[],
    barcode:'',
    sku:'',
    price:0,
    discount:0,
    brand:'',
    product_image:[],
    tags:[],
    is_active: true,
};

export default function AddProduct(props:any) {
    const dispatch = useAppDispatch();

    const CustomInput = CustomComponents.CustomInput;
    const CustomForm = CustomComponents.CustomForm;
    const UseForm = CustomComponents.UseForm;

    const names = [
        {id:1, name:'Oliver Hansen'},
        {id:2, name:'Van Henry'},
        {id:3, name:'April Tucker'},
        {id:4, name:'Ralph Hubbard'},
        {id:5, name:'Omar Alexander'},
        {id:6, name:'Carlos Abbott'},
    ];

    // validation
    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('product_name' in fieldValues) {
            temp.product_name = fieldValues.product_name ? "" : "Product name is required!"
        }

        if ('description' in fieldValues) {
            temp.description = fieldValues.description ? "" : "Description is required!"
        }

        if ('categories' in fieldValues) {
            temp.categories = fieldValues.categories.length ? "" : "Category is required!"
        }

        if ('barcode' in fieldValues) {
            temp.barcode = fieldValues.barcode ? "" : "Barcode is required!"
        }

        if ('sku' in fieldValues) {
            temp.sku = fieldValues.sku ? "" : "sku is required!"
        }

        if ('price' in fieldValues) {
            temp.price = fieldValues.price ? "" : "price is required!"
        }

        if ('discount' in fieldValues) {
            temp.discount = fieldValues.discount ? "" : "discount is required!"
        }

        if ('brand' in fieldValues) {
            temp.brand = fieldValues.brand ? "" : "brand is required!"
        }

        // if ('tags' in fieldValues) {
        //     temp.tags = fieldValues.tags ? "" : "Tag is required!"
        // }

        setErrors({
            ...temp
        })

        if (fieldValues == values) {
            return Object.values(temp).every(x => x == "")
        }
    }
    const { values, setValues, errors, setErrors, handleInput, resetForm } = UseForm(initialFormValues, true, validate);
    const [buttonText, setButtonText] = useState('Submit');

    // insert
    const saveRecord = (e:any) => {
        e.preventDefault();        

        let _id = values.id;

        if (validate()) {
            const formData = new FormData();
            formData.append('id', _id);
            formData.append('product_name', values.product_name);
            formData.append('description', values.description);
            formData.append('barcode', values.barcode);
            formData.append('brand', values.brand);
            formData.append('categories', JSON.stringify(values.categories));
            formData.append('discount', values.discount);
            formData.append('price', values.price);
            formData.append('product_image', values.product_image);
            formData.append('sku', values.sku);
            formData.append('tags', values.tags);
            formData.append('is_active', values.is_active);
            
            dispatch(setTaskLoader(true));
            if (_id) {                
                dispatch(updateProductAction(formData));
            }else{
                dispatch(createProductAction(formData));
            }
        }
    }

    useEffect(() => {
        if (props.recordForEdit) {            
            setValues({
                id: props.recordForEdit._id,
                product_name: props.recordForEdit.product_name,
                description: props.recordForEdit.description,
                barcode: props.recordForEdit.barcode,
                brand: props.recordForEdit.brand,
                categories: props.recordForEdit.categories,
                discount: props.recordForEdit.discount,
                price: props.recordForEdit.price,
                // product_image: props.recordForEdit,
                sku: props.recordForEdit.sku,
                tags: props.recordForEdit.tags,
                is_active: props.recordForEdit.is_active,
            })
            setButtonText('Update');
        }else{
            setButtonText('Submit');
        }
    }, [props.recordForEdit]);

    return (
        <>
            <CustomForm onSubmit={saveRecord} id="PRODUCT_FORM" encType="multipart/form-data">
                <CustomComponents.FormDialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CustomInput
                                autoFocus
                                name="product_name"
                                label="Product Name"
                                value={values.product_name}
                                onChange={handleInput}
                                error={errors.product_name}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomInput
                                name="description"
                                label="Description"
                                value={values.description}
                                onChange={handleInput}
                                error={errors.description}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MultiSelect
                                id="categories_id"
                                name="categories"
                                label="Select Categories"
                                label_id="categories_id"
                                value={values.categories}
                                error={errors.categories}
                                onChange={handleInput}
                                options={names}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="barcode"
                                label="Barcode"
                                value={values.barcode}
                                onChange={handleInput}
                                error={errors.barcode}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="sku"
                                label="SKU"
                                value={values.sku}
                                onChange={handleInput}
                                error={errors.sku}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="price"
                                label="Price"
                                value={values.price}
                                onChange={handleInput}
                                error={errors.price}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                name="discount"
                                label="Discount"
                                value={values.discount}
                                onChange={handleInput}
                                error={errors.discount}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                label="Brand"
                                name="brand"
                                value={values.brand}
                                onChange={handleInput}
                                error={errors.brand}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomInput
                                label="Tags"
                                name="tags"
                                value={values.tags}
                                onChange={handleInput}
                                // error={errors.tags}
                                fullWidth
                            />
                        </Grid>
                        {/* product_image
                        is_active */}
                    </Grid>
                </CustomComponents.FormDialogContent>

                <CustomComponents.DialogActionButton
                    buttonText={buttonText}
                />
            </CustomForm>
        </>
    )
}
