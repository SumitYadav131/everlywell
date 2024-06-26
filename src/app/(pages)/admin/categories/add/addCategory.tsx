import React, { useState } from 'react'
import { CustomComponents } from '@/app/ui-component';

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

        // if ('group_name' in fieldValues) {
        //     temp.group_name = fieldValues.group_name ? "" : "Group Name is required!"
        // }

        setErrors({
            ...temp
        })

        if (fieldValues == values) {
            return Object.values(temp).every(x => x == "")
        }
    }
    const { values, setValues, errors, setErrors, handleInput, resetForm } = UseForm(initialFormValues, true, validate);
    const [buttonText, setButtonText] = useState('');

    return (
        <div>addCategory</div>
    )
}
