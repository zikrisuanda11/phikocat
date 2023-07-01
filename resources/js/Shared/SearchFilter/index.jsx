import { useState } from "react"
import { InputAdornment, TextField } from "@mui/material"
import { Inertia } from "@inertiajs/inertia"
import { useEffect } from "react"
import { IconSearch } from "@tabler/icons-react"

export default function SearchFilter({url}){

  const [query, setQuery] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    if(e.key == 'Enter'){
      Inertia.get(route(url), { keywords: query }, {
        replace: true,
        preserveState: true
      });
    }
  }

  return (
    <>
    <TextField sx={{
      width: '50%',
        marginX: 'auto',
        marginTop: 3,
        outline: 'none',
        border: 'none'
      }} size="small" placeholder="Cari produk"
        onChange={handleQuery}
        onKeyDown={handleSearch}
        />
    {/* <p className="text-center mt-10">Menampilkan hasil pencarian dari <strong>{query}</strong></p> */}
    </>
  )
}