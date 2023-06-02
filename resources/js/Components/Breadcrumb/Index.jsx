import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const Breadcrumb = ({ breadcrumbs }) => {  
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb" fontSize="small">
        {breadcrumbs.map((item) => (
          <Link key={item.key} underline="none" color='inherit' href={item.href}>{item.name}</Link>
        ))}
      </Breadcrumbs>
    </Stack>
  )
}

export default Breadcrumb;