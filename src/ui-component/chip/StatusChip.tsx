import { Chip } from '@mui/material';
import React from 'react';

export default function StatusChip(props: any) {    
    const is_active: boolean = props.params.row.is_active;

    const label = is_active === true ? 'Active' : 'Inactive';
    const color = is_active === true ? 'success' : 'error';
    const bgcolor = is_active === true ? '#e8f5e9' : '#ffebee';

    return (
        <>
            <Chip
                label={label}
                variant="outlined"
                color={color}
                sx={{ bgcolor: bgcolor }}
                size="small" />
        </>
    )
}