import React, { useState } from 'react'
import { CustomComponents } from '@/app/ui-component';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import { Box, Dialog, Grid, Paper, Typography } from '@mui/material';
import MultiSelect from '@/app/ui-component/controls/select/MultiSelect';
import { useAppDispatch, useAppSelector } from '@/app/_lib/store/hooks';
import { DialogTitle } from '@mui/material';
import { Close } from '@mui/icons-material';
import { setFormDialogOpen } from '@/app/_lib/store/features/dialog/formDialogSlice';


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
    const formDialogData = useAppSelector((state)=>state.formDialog);
    const dispatch = useAppDispatch();

    const CustomInput = CustomComponents.CustomInput;
    const CustomSelect = CustomComponents.CustomSelect;
    // const CustomButton = CustomComponents.CustomButton;
    const CustomForm = CustomComponents.CustomForm;
    const UseForm = CustomComponents.UseForm;
    const CustomIconButton = CustomComponents.CustomIconButton;

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
            temp.product_name = fieldValues.product_name ? "" : "product_name is required!"
        }

        if ('description' in fieldValues) {
            temp.description = fieldValues.description ? "" : "Description is required!"
        }

        if ('categories' in fieldValues) {
            temp.categories = fieldValues.categories ? "" : "categories is required!"
        }

        if ('barcode' in fieldValues) {
            temp.barcode = fieldValues.barcode ? "" : "barcode is required!"
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
        //     const formData = new FormData();
        //     formData.append('id', group_id);
        //     formData.append('name', values.group_name);
        //     formData.append('is_active', 1);
        //     formData.append('group_type', 'Manual');

        //     if (group_id) {
        //         const updateGroupApi = 'api/groups/'+group_id;
        //         let data = {
        //             "id":group_id,
        //             "name":values.group_name,
        //             "is_active":1,
        //             "group_type":"Manual"
        //         }
        //         props.UpdateRecordCommonAction(updateGroupApi, data, CONFIRMED_UPDATE_GROUP, resetForm);
        //     }else{
        //         props.InsertRecordCommonAction(createGroupApi, formData, CONFIRMED_CREATE_GROUP, resetForm);
        //     }
        }
    }

    return (
        <>
            <CustomForm onSubmit={saveRecord} id="CATEGORY_FORM">
                <DialogContent dividers>
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
                            {/* <CustomSelect
                                id="categories_id"
                                name="categories"
                                label="Select Categories"
                                label_id="categories_id"
                                value={values.categories}
                                // error={props.error}
                                onChange={handleInput}
                                options={names}
                            >
                            </CustomSelect> */}

                            <MultiSelect
                                id="categories_id"
                                name="categories"
                                label="Select Categories"
                                label_id="categories_id"
                                value={values.categories}
                                error={errors.categories}
                                onChange={handleInput}
                                options={names}
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
                                error={errors.tags}
                                fullWidth
                            />
                        </Grid>
                        {/* product_image
                        is_active */}
                    </Grid>
                </DialogContent>

                <CustomComponents.DialogActionButton
                    text={buttonText}
                />
            </CustomForm>
        </>
    )
}