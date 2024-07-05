"use client"

import { useEffect, useMemo, useState } from 'react';
import { CustomComponents } from '@/app/ui-component';
import { Box, Button, IconButton, Tooltip, Grid } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { AddCircleRounded } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '@/app/_lib/store/hooks';
import { setFormDialogOpen } from '@/app/_lib/store/features/dialog/formDialogSlice';
import AddProduct from './add/addProduct';
import { getProductsAction } from '@/app/_lib/store/thunks/productAction';


export default function Products() {
    const dispatch = useAppDispatch();
    const productsDataLoading = useAppSelector((state)=>state.product.productsDataLoading);
    const getallProducts = useAppSelector((state)=> state.product.products);

    const CustomFormDialog = CustomComponents.CustomFormDialog;
    const Breadcrumb = CustomComponents.Breadcrumb;
    const ListPageCard = CustomComponents.ListPageCard;
    const SnackbarNotification = CustomComponents.SnackbarNotification;
    const CustomLinearLoader = CustomComponents.CustomLinearLoader;

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [is_crud, setCRUD] = useState(true);
    const [allProducts, setProducts] = useState(Array<any>);

    useEffect(() => {
        dispatch(getProductsAction(""));
    }, []);

    useEffect(() => {
        if (Array.isArray(getallProducts)) {
            setProducts(getallProducts); 
        }else{
            setProducts([]);
        }
    }, [getallProducts])
    
    useEffect(() => {
      console.log(allProducts);
    }, [allProducts])
    

    const columns:any = useMemo(
        () => [
            {
                field: '_id',
                headerName: 'ID',
                width: 150,
            },
            {
                field: 'product_name',
                headerName: 'Product Name',
                sortable: true,
                width: 200,
            },
            {
                field: 'price',
                headerName: 'Price',
                sortable: true,
            },
            // {
            //     field: 'categories',
            //     headerName: 'Categories',
            //     width: 150,
            //     renderCell: (params: any) => {
            //         return (
            //             <Box>{params}</Box>
            //         )
            //     }
            // },
            // {
            //     field: 'manage_members_action',
            //     headerName: 'Manage Members',
            //     type: 'actions',
            //     sortable: false,
            //     flex: 1,
            //     renderCell: (params: any) => {
            //         return (
            //             <Tooltip title='Manage Members'>
            //                 <IconButton
            //                     onClick={
            //                         ()=>{
            //                             // manageMembersAction(params);
            //                         }
            //                     }>
            //                     <GroupAddIcon />
            //                 </IconButton>
            //             </Tooltip>
            //         )
            //     }
            // },
            {
                field: 'actions',
                headerName: 'Actions',
                type: 'actions',
                sortable: false,
                flex: 1,
                renderCell: (params:any) => {
                    return (
                        <>
                            {/* <DataGridActions
                                params={params}
                                setRecordForEdit={setRecordForEdit}
                                deleteFunction={deleteRecord}
                                setDialogContent={setDialogContent}
                                setCRUD={setCRUD}
                                title="Update Group"
                            /> */}
                        </>
                    )
                }
            },
        ],
        []
    )

    return (
        <>
            {
                productsDataLoading ? 
                <>
                    <CustomLinearLoader />
                </>
                :
                <>
                    <Breadcrumb pageName="Products"/>
                    <ListPageCard>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button
                                variant="contained"
                                endIcon={< AddCircleRounded />}
                                onClick={() => {
                                    dispatch(setFormDialogOpen({ isOpen: true, title: "Add Product"}));
                                    setRecordForEdit(null);
                                    setCRUD(true);
                                }}
                                sx={{ borderRadius: '10px' }}>
                                Add
                            </Button>
                        </Box>

                        <Grid container spacing={1}>
                            <Box style={{ width: '100%' }}>
                                {
                                    allProducts.length > 0 &&
                                    <DataGrid
                                        autoHeight
                                        columns={columns}
                                        rows={allProducts}
                                        sx={{ borderColor: 'transparent' }}
                                        slots={{ toolbar: GridToolbar }}
                                        getRowId={(row) => row._id} 

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
                        </Grid>
                    </ListPageCard>

                    <CustomFormDialog
                        size='md'
                        isFullWidth={true}>
                        <AddProduct
                        recordForEdit={recordForEdit}/>
                    </CustomFormDialog>

                    <SnackbarNotification/>
                </>
            }  
        </>
    )
}