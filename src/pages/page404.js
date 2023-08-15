import { Box, Container } from '@mui/material';
import React from 'react';

function Page404() {
    return (
        <Container>
            <Box mt={3} mb={4} sx={{minHeight:"30vh"}}>
                <h1>404 - page not found</h1>
            </Box>
        </Container>
    );
}

export default Page404;