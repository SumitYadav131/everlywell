import React, { useEffect, useState } from 'react'
import { CustomComponents } from '@/app/ui-component';
import { Grid } from '@mui/material';
import MultiSelect from '@/app/ui-component/controls/select/MultiSelect';
import { useAppDispatch, useAppSelector } from '@/app/_lib/store/hooks';
import { createProductAction } from '@/app/_lib/store/thunks/productAction';


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
    const isTaskLoading = useAppSelector((state)=> state.product.taskLoader);

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

        alert('add product form');
        

        // let group_id = values.id;

        if (validate()) {
            const formData = new FormData();
            // formData.append('id', group_id);
            formData.append('product_name', values.product_name);
            formData.append('description', values.description);
            formData.append('barcode', values.barcode);
            formData.append('brand', values.brand);
            formData.append('categories', values.categories);
            formData.append('discount', values.discount);
            formData.append('price', values.price);
            formData.append('product_image', values.product_image);
            formData.append('sku', values.sku);
            formData.append('tags', values.tags);
            formData.append('is_active', values.is_active);
            

        //     if (group_id) {
        //         const updateGroupApi = 'api/groups/'+group_id;
                // let data = {
                //     "product_name":"Food Sensitivity Test2",
                //     "description":"This at-home lab test moeasures your body’s immune response to 96 common foods to help guide your food selection in a two-part elimination diet1.",
                //     "categories":["Nutritional", "Health"],
                //     "barcode":"45645465465465",
                //     "sku":"dfdsa54545",
                //     "price":20000,
                //     "discount":10,
                //     "brand":"dfsadsf",
                //     "is_active":true
                // }
                dispatch(createProductAction(formData));
                // props.UpdateRecordCommonAction(updateGroupApi, data, CONFIRMED_UPDATE_GROUP, resetForm);
        //     }else{
        //         props.InsertRecordCommonAction(createGroupApi, formData, CONFIRMED_CREATE_GROUP, resetForm);
        //     }
        }
    }

    useEffect(() => {
        if (props.recordForEdit) {
            // setValues({
            //     id: props.recordForEdit.id,
            //     group_name: props.recordForEdit.name,
            //     group_type: "Manual",
            //     is_active: props.recordForEdit.is_active,
            // })
            setButtonText('Update');
        }else{
            setButtonText('Submit');
        }
    }, [props.recordForEdit]);

    return (
        <>
            <CustomForm onSubmit={saveRecord} id="CATEGORY_FORM">
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

                <CustomComponents.DialogActionButton>
                    <CustomComponents.CustomButton
                        text={buttonText}
                        variant="contained"
                        color="primary"
                        type="submit"
                        isTaskLoading={isTaskLoading}
                    />
                </CustomComponents.DialogActionButton>
            </CustomForm>
        </>
    )
}
