import { Box, useTheme } from "@mui/material"
import { useGetGeographyQuery } from "@/state/api"
import Header from "@/components/Header"
import InteractiveMap from "./InteractiveMap"

const Geography = () => {
    const theme = useTheme()
    const { data } = useGetGeographyQuery()
 
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
            <Box 
                mt="40px"
                height="75vh"
                border={`1px solid ${theme.palette.secondary[200]}`} 
                borderRadius="4px"
            >
                {data ? <InteractiveMap data={data}/> : <>Loading...</>}
            </Box>
        </Box>
    )
}

export default Geography