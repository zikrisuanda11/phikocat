import { useState } from "react"
import { TextField } from "@mui/material"
import { Inertia } from "@inertiajs/inertia"
import { useEffect } from "react"

export default function SearchFilter(){

  const [query, setQuery] = useState('test')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    Inertia.get(route(route().current()), { remember: 'forget' }, {
      replace: true,
      preserveState: true
    });
  }, [query])



  return (
    <div>
      <TextField sx={{
          width: '50%',
          marginX: 'auto',
          marginTop: 3,
          outline: 'none',
          border: 'none'
        }} size="small" placeholder="Cari produk"
          onChange={handleQuery}
        />
    </div>
  )
}