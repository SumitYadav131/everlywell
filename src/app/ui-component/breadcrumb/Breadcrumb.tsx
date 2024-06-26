import React from 'react';
import { Breadcrumbs, Card, Container, Link, Typography } from '@mui/material'
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumb(props:any) {
    const { pageName } = props;    

    return (
        <>
            <Box sx={{paddingBottom: 3}}>
                <Card sx={{p: 2, boxShadow: 0, borderRadius: '9px'}}>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    >
                    <div>{pageName}</div>
                    <Breadcrumbs aria-label="breadcrumb" separator="›">
                        <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/admin/dashboard"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        </Link>
                        <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                        >
                            {pageName}
                        </Typography>
                    </Breadcrumbs>
                    </Box>
                </Card>
            </Box>
        </>
    )
}
