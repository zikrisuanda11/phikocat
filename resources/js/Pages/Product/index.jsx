import IndexLayout from "@/Layouts/IndexLayout"
import { usePage } from "@inertiajs/react"
import { Card, CardActions, CardContent, CardMedia, IconButton, TextField } from "@mui/material"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import RupiahFormat from "@/Helper/RupiahFormat"
import { useState } from "react"
import { useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import SearchFilter from "@/Shared/SearchFilter"

function Product({product}){
  const {auth} = usePage().props

  return (
    <IndexLayout auth={auth}>
      <div className="flex flex-col mt-10">
        <p className="text-center text-3xl font-semibold">Produk Pet</p>
        <SearchFilter />
      </div>
      <div className="px-10 py-10 flex flex-wrap gap-10 justify-center">
        {product ? 
          product.map((data, index) => (
            <Card sx={{
              width: 250,
              boxShadow: 0,
              border: 1,
              borderColor: '#e2e8f0'
            }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={data.photo_product}
              />
              <CardContent sx={{
                display: 'grid',
                gap: 1
              }}>
                <div>
                  <p className="font-semibold text-lg">Nama Produk :</p>
                  <p className="">{data.name_product}</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Deskripsi :</p>
                  <p className="">Example Name</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Harga :</p>
                  <p className="">{RupiahFormat(data.price_product)}</p>
                </div>
              </CardContent>
              <CardActions sx={{
                display: 'flex',
                justifyContent: 'end',
                padding: 3
              }}>
                <IconButton size="small" color="primary">
                  <IconShoppingCartPlus />
                </IconButton>            
              </CardActions>
            </Card>
          )): 
          ''
        }
      </div>
    </IndexLayout>
  )
}

export default Product