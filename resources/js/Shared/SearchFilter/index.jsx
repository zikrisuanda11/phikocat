import { useState } from "react"
import { InputAdornment, TextField } from "@mui/material"
import { Inertia } from "@inertiajs/inertia"
import { useEffect } from "react"
import { IconSearch } from "@tabler/icons-react"
import SearchIcon from '@mui/icons-material/Search';
import { TfiSearch } from 'react-icons/tfi';

export default function SearchFilter({ url }) {

  const [query, setQuery] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    if (e.key == 'Enter') {
      Inertia.get(route(url), { keywords: query }, {
        replace: true,
        preserveState: true
      });
    }
  }

  return (
    <>
      <div className="flex w-full justify-center ">
        <div className="flex w-full border border-gray-300 rounded-md px-3">
          <div className=" flex items-center">
            <TfiSearch size={24} className="text-gray-500"/>
          </div>
          <input
            id="search"
            type="text"
            className="border-none rounded-md w-full focus:ring-0 appearance-none"
            onChange={handleQuery}
            onKeyDown={handleSearch}
            placeholder="Cari Produk"
          />
        </div>
      </div>
      {/* <p className="text-center mt-10">Menampilkan hasil pencarian dari <strong>{query}</strong></p> */}
    </>
  )
}