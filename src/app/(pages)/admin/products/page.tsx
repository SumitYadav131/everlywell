"use client"

import { useEffect, useMemo, useState } from 'react';
import { CustomComponents } from '@/app/ui-component';
import { Box, Button, IconButton, Tooltip, Grid, Container } from '@mui/material';
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
    const DataGridActions = CustomComponents.DataGridActions;
    const ConfirmDialog = CustomComponents.ConfirmDialog;

    const [recordForEdit, setRecordForEdit] = useState(null);
    const [is_crud, setCRUD] = useState(true);
    const [allProducts, setProducts] = useState(Array<any>);
    const [dialogContent, setDialogContent] = useState({ isOpen: false, title: '', subTitle: '' });

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
    
    // useEffect(() => {
    //   console.log(allProducts);
    // }, [allProducts])

    // delete
    const deleteRecord = (id: any) => {
        alert(id);
        // const deleteRecordApi = "api/groups/" + id;
        // props.DeleteRecordCommonAction(deleteRecordApi, id, CONFIRMED_DELETE_GROUP_ACTION);
    }
    

    const columns: any = useMemo(
        () => [
            {
                field: 'product_name',
                headerName: 'Product Name',
                sortable: true,
                width: 400,
            },
            {
                field: 'price',
                headerName: 'Price',
                sortable: true,
                width: 200
            },
            {
                field: 'categories',
                headerName: 'Categories',
                sortable: false,
                width: 400
            },
            {
                field: 'actions',
                headerName: 'Actions',
                type: 'actions',
                sortable: false,
                // flex: 1,
                width:150,
                renderCell: (params:any) => {
                    return (
                        <>
                            <DataGridActions
                                params={params}
                                setRecordForEdit={setRecordForEdit}
                                deleteFunction={deleteRecord}
                                setDialogContent={setDialogContent}
                                setCRUD={setCRUD}
                                title="Update Group"
                            />
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

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box sx={{ height: 400 }}
                                maxWidth={{xs:280, sm:400, md:'100%', lg:1200}}
                            >
                                {
                                    allProducts.length > 0 &&
                                    <DataGrid
                                        columns={columns}
                                        rows={allProducts}
                                        // sx={{ borderColor: 'transparent' }}
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
                                        pageSizeOptions={[5, 10, 20]}
                                        disableRowSelectionOnClick />
                                }
                            </Box>
                        </Grid>
                    </ListPageCard>

                    <ConfirmDialog
                        dialogContent={dialogContent}
                        setDialogContent={setDialogContent}
                    ></ConfirmDialog>

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