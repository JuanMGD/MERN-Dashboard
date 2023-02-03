import { useState } from 'react'
import { Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme } from '@mui/material'

const Product = ({product}) => {
    const theme = useTheme()
    const [isExpanded, setIsExpanded] = useState(false)

    const { _id, name, description, price, rating, category, supply, stat } = product

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem"
            }}
        >
            <CardContent>
                <Typography 
                    sx={{ fontSize: 14 }}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                    {category}
                </Typography>
                <Typography variant='h5' component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly />

                <Typography variant='body2'>{description}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant='primary'
                    size='small'
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    See more
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300]
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply left: {supply}</Typography>
                    <Typography>Yearly sales for this year: {stat.yearlySalesTotal}</Typography>
                    <Typography>Yearly units sold this year: {stat.yearlyTotalSoldUnits}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default Product