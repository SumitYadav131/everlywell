import React, { useState } from 'react'
import { CustomComponents } from '@/app/ui-component';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Grid } from '@mui/material';

const initialFormValues = {
    id: '',
    category_name: '',
    description: '',
    slug: '',
    is_active: true,
};

export default function AddCategory(props:any) {
    const CustomInput = CustomComponents.CustomInput;
    const CustomButton = CustomComponents.CustomButton;
    const CustomForm = CustomComponents.CustomForm;
    const UseForm = CustomComponents.UseForm;

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
                </DialogContent>
                <DialogActions>
                    <CustomButton
                        variant="contained"
                        color="primary"
                        text={buttonText}
                        type="submit"
                    />
                </DialogActions>
            </CustomForm>
        </>
    )
}
