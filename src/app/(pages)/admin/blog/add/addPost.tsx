import React, { useEffect, useRef, useState } from 'react';
import { CustomComponents } from '@/ui-component';
import { Grid } from '@mui/material';
import { useAppDispatch } from '@/lib/store/hooks';
import { setTaskLoader } from '@/lib/store/features/loader/loaderSlice';
import { createBlogPostAction, updateBlogPostAction } from '@/lib/store/thunks/blogPostAction';

const initialFormValues = {
    id: '',
    title: '',
    description: '',
    is_active: true,
};

export default function AddPost(props:any) {
    const dispatch = useAppDispatch();

    const CustomInput = CustomComponents.CustomInput;
    const CustomForm = CustomComponents.CustomForm;
    const UseForm = CustomComponents.UseForm;
    const DialogActionButton = CustomComponents.DialogActionButton;
    const FormDialogContent = CustomComponents.FormDialogContent;
    // const InputFile = CustomComponents.InputFile;

    // validation
    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ('title' in fieldValues) {
            temp.title = fieldValues.title ? "" : "Title Name is required!"
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

    // const inputImageRef = useRef(null);
    // const [picture, setPicture] = useState({logo:''});
    const { values, setValues, errors, setErrors, handleInput, resetForm } = UseForm(initialFormValues, true, validate);
    const [buttonText, setButtonText] = useState('Submit');

    // image change event
    // const handleImageChange = (e: any) => {
    //     e.persist();

    //     setErrors({
    //         ...errors,
    //         [e.target.name]: ""
    //     })
    //     setPicture({
    //         ...picture,
    //         [e.target.name]: e.target.files[0]
    //     });
    // }

    // insert
    const saveRecord = (e:any) => {
        e.preventDefault();        

        let _id = values.id;

        if (validate()) {
            const formData = new FormData();
            formData.append('id', _id);
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('is_active', values.is_active);
            // formData.append('image_data', picture.logo);
            
            dispatch(setTaskLoader(true));
            if (_id) {                
                dispatch(updateBlogPostAction(formData));
            }else{
                dispatch(createBlogPostAction(formData));
            }
        }
    }

    useEffect(() => {
        if (props.recordForEdit) {
            setValues({
                id: props.recordForEdit._id,
                title: props.recordForEdit.title,
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
            <CustomForm onSubmit={saveRecord} id="BLOG_POST_FORM">
                <FormDialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <CustomInput
                                autoFocus
                                name="title"
                                label="Post Title"
                                value={values.title}
                                onChange={handleInput}
                                error={errors.title}
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
                        {/* <Grid item xs={12}>
                            <InputFile
                                type="file"
                                name="logo"
                                onChange={handleImageChange}
                                inputImageRef={inputImageRef}
                            />
                        </Grid> */}
                    </Grid>
                </FormDialogContent>
                <DialogActionButton
                    buttonText={buttonText}
                />
            </CustomForm>
        </>
    )
}
