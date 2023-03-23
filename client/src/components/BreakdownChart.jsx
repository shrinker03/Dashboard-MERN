import { Box } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react'
import { useGetSalesQuery } from 'redux/api'

const BreakdownChart = ({isDashboard=false}) => {
  const {data, isLoading} = useGetSalesQuery();
  const theme = useTheme();

  if(!data || isLoading) return 'Loading...';

  const colors = [
    theme.palette.secondary[500],
    theme.palette.secondary[300],
    theme.palette.secondary[300],
    theme.palette.secondary[500],
  ]

  const formattedData = Object.entries(data.salesByCategory).map(([category, sales], i) => ({
    id: category, 
    label: category,
    value: sales,
    color: colors[i]
  }))

  return (
    <Box 
      height={isDashboard}
      width={undefined}
      minHeight={isDashboard ? "325px" : undefined}
      minWidth={isDashboard ? "325px" : undefined}
      position="relative"
    >
      
    </Box>
  )
}

export default BreakdownChart