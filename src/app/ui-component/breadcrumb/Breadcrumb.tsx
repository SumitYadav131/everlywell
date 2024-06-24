import { Breadcrumbs, Container, Link, Typography } from '@mui/material'
import React from 'react';

export default function Breadcrumb({props}:any) {
    const { pageName } = props;

    return (
        <>
            <Container maxWidth="xl" sx={{ pb: 2 }}>
                <Breadcrumbs>
                    <Link
                        underline="hover"
                        color="inherit"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                        // onClick={() => navigate("/admin")}
                        >
                        Home
                    </Link>
                    <Typography color="text.primary">{pageName}</Typography>
                </Breadcrumbs>
            </Container>
        </>
    )
}
