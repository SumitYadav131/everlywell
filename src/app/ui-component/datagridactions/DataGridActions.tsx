import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const ITEM_HEIGHT = 48;

export default function DataGridActions(props: any) {
    const {
        params,
        setDialogContent,
        setRecordForEdit,
        deleteFunction,
        setCRUD,
        title="",
    } = props;
    
    const isSetCRUD = (setCRUD)? true: false;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const editRecord = ()=>{
        props.ToggleCustomFormDialogAction({ isOpen: true, title: title});
        setRecordForEdit(params.row);
        if(isSetCRUD){
            setCRUD(true);
        }
        // 
        setAnchorEl(null);
    }

    const deleteRecord = () =>{
        setDialogContent({
            isOpen: true,
            title: 'Are you sure, you want to delete ?',
            subTitle: 'You will not be able to retrive it.',
            onConfirm: () => { deleteFunction(params.row._id) }
        })
        // 
        setAnchorEl(null);
    }
    
    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={editRecord} disableRipple>
                    <Edit /> Edit
                </MenuItem>
                <MenuItem onClick={deleteRecord} disableRipple>
                    <Delete /> Delete
                </MenuItem>
            </Menu>
        </>
    )
}
