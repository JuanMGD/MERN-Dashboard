import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useGetProductsQuery } from '@/state/api'
import Header from '@/components/Header'
import Product from './Product'

const Products = () => {
    const { data, isLoading } = useGetProductsQuery()
    const isNonMobile = useMediaQuery("(min-width: 1000px)")

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="PRODUCTS" subtitle="See your list of products."/>
            {data || !isLoading ? (
                <Box 
                    mt="20px" 
                    display="grid" 
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
                    }}
                >
                    {data.map((product) => <Product key={product._id} product={product}/>)}
                </Box>
            ) : <>Loading...</> }
        </Box>
    )
}

export default Products