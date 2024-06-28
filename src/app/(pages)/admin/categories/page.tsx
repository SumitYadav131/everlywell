"use client"

import { useMemo, useState } from 'react';
import { CustomComponents } from '@/app/ui-component';
import { Box, Button, Card, IconButton, Tooltip } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { AddCircleRounded } from '@mui/icons-material';
import AddCategory from './add/addCategory';
import { useAppDispatch } from '@/app/_lib/store/hooks';
import { setFormDialogOpen } from '@/app/_lib/store/features/dialog/formDialogSlice';


export default function Categories() {
  const dispatch = useAppDispatch();

  const CustomFormDialog = CustomComponents.CustomFormDialog;
  const Breadcrumb = CustomComponents.Breadcrumb;
  const ListPageCard = CustomComponents.ListPageCard;

  const [recordForEdit, setRecordForEdit] = useState(null);

  const columns = useMemo(
    () => [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'name',
            headerName: 'Group',
            width: 250,
            editable: true,
        },
        {
            field: 'group_type',
            headerName: 'Group Type',
            sortable: false,
            width: 150,
            editable: false,
        },
        {
            field: 'members',
            headerName: 'Members',
            sortable: false,
            width: 150,
            renderCell: (params: any) => {
                return (
                    <Box>{params.row.employees.length}</Box>
                )
            }
        },
        {
            field: 'manage_members_action',
            headerName: 'Manage Members',
            type: 'actions',
            sortable: false,
            flex: 1,
            renderCell: (params: any) => {
                return (
                    <Tooltip title='Manage Members'>
                        <IconButton
                            onClick={
                                ()=>{
                                    // manageMembersAction(params);
                                }
                            }>
                            <GroupAddIcon />
                        </IconButton>
                    </Tooltip>
                )
            }
        },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            sortable: false,
            flex: 1,
            renderCell: (params) => {
                return (
                    <Box>
                        {/* <DataGridActions
                            params={params}
                            setRecordForEdit={setRecordForEdit}
                            deleteFunction={deleteRecord}
                            setDialogContent={setDialogContent}
                            setCRUD={setCRUD}
                            title="Update Group"
                        /> */}
                    </Box>
                )
            }
        },
    ],
    []
  )

  return (
    <>
        <Breadcrumb pageName="Categories"/>
        <ListPageCard>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button
                    variant="contained"
                    endIcon={< AddCircleRounded />}
                    onClick={() => {
                        dispatch(setFormDialogOpen({ isOpen: true, title: "Add Category"}));
                        setRecordForEdit(null);
                        // setCRUD(true);
                    }}
                    sx={{ borderRadius: '10px' }}>
                    Add
                </Button>
            </Box>

            {/* <Grid container spacing={1}>
                <Box style={{ width: '100%' }}>
                    {
                        props.groups.length > 0 &&
                        <DataGrid
                            autoHeight
                            columns={columns}
                            rows={props.groups}
                            sx={{ borderColor: 'transparent' }}
                            slots={{ toolbar: GridToolbar }}

                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    quickFilterProps: { debounceMs: 500 },
                                },
                            }}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            disableRowSelectionOnClick />
                    }
                </Box>
            </Grid> */}
        </ListPageCard>
        <CustomFormDialog
            size='sm'
            isFullWidth={true}>
            <AddCategory
            recordForEdit={recordForEdit}/>
        </CustomFormDialog>
    </>
  )
}