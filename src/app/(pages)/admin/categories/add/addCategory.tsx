import React, { useEffect, useState } from 'react'
import { CustomComponents } from '@/ui-component';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Grid } from '@mui/material';
import { useAppDispatch } from '@/lib/store/hooks';
import { setTaskLoader } from '@/lib/store/features/loader/loaderSlice';
import { createCategoryAction, updateCategoryAction } from '@/lib/store/thunks/categoryAction';

const initialFormValues = {
    id: '',
    category_name: '',
    description: '',
    is_active: true,
};

export default function AddCategory(props:any) {
    const dispatch = useAppDispatch();
    const CustomInput = CustomComponents.CustomInput;
    const CustomForm = CustomComponents.CustomForm;
    const UseForm = CustomComponents.UseForm;
    const DialogActionButton = CustomComponents.DialogActionButton;
    const FormDialogContent = CustomComponents.FormDialogContent;

    // validation
    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('category_name' in fieldValues) {
            temp.category_name = fieldValues.category_name ? "" : "Category Name is required!"
        }

        if ('description' in fieldValues) {
            temp.description = fieldValues.description ? "" : "Description is required!"
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

        let _id = values.id;

        if (validate()) {
            const formData = new FormData();
            formData.append('id', _id);
            formData.append('category_name', values.category_name);
            formData.append('description', values.description);
            formData.append('is_active', values.is_active);
            
            dispatch(setTaskLoader(true));
            if (_id) {                
                dispatch(updateCategoryAction(formData));
            }else{
                dispatch(createCategoryAction(formData));
            }
        }
    }

    useEffect(() => {
        if (props.recordForEdit) {            
            setValues({
                id: props.recordForEdit._id,
                category_name: props.recordForEdit.category_name,
                description: props.recordForEdit.description,
                is_active: props.recordForEdit.is_active,
            })
            setButtonText('Update');
        }else{
            setButtonText('Submit');
        }
    }, [props.recordForEdit]);

    return (
        <>
            <CustomForm onSubmit={saveRecord} id="CATEGORY_FORM">
                <FormDialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CustomInput
                                autoFocus
                                name="category_name"
                                label="Category Name"
                                value={values.category_name}
                                onChange={handleInput}
                                error={errors.category_name}
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
                                multiline
                                rows={2}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </FormDialogContent>
                <DialogActionButton
                    buttonText={buttonText}
                />
            </CustomForm>
        </>
    )
}
