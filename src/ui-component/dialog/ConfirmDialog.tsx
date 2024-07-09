import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { CustomComponents } from '..';


export default function ConfirmDialog(props:any) {
    const { dialogContent, setDialogContent } = props;

    const CustomButton = CustomComponents.CustomButton;

    return (
        <Dialog open={dialogContent.isOpen}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
            </DialogTitle>
            <DialogContent>
                <Typography variant='h6'>
                    {dialogContent.title}
                </Typography>
                <Typography variant='subtitle2'>
                    {dialogContent.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions>
                <CustomButton
                    sx={{ background: '#f44336', borderRadius: '10px' }}
                    text="Yes"
                    color="error"
                    size="medium"
                    variant="contained"
                    onClick={() => (setDialogContent({ ...dialogContent, isOpen: false }), dialogContent.onConfirm())}
                />
                <CustomButton
                    sx={{ color: '#fff', background: '#000', borderRadius: '10px' }}
                    text="No"
                    size="medium"
                    variant="outlined"
                    onClick={() => setDialogContent({ ...dialogContent, isOpen: false })}
                />
            </DialogActions>
        </Dialog>
    )
}
