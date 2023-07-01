import IndexLayout from "@/Layouts/IndexLayout"
import { usePage } from "@inertiajs/react"
import { Card, CardActions, CardContent, CardMedia, IconButton, TextField } from "@mui/material"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import RupiahFormat from "@/Helper/RupiahFormat"
import { useState } from "react"
import { useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import SearchFilter from "@/Shared/SearchFilter"

function Product({product, flash}){
  const {auth} = usePage().props
  console.log(flash)

  const handleCart = (id) => {
    Inertia.post('/cart', {
      product_id: id
    })
  }

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (flash.message) {
      setIsOpen(true);
    }
  }, [
    flash.message
  ]);

  return (
    <IndexLayout auth={auth}>
      <div className="flex flex-col mt-10">
        <p className="text-center text-3xl font-semibold">Produk Pet</p>
        <SearchFilter url={'product'} />
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
                  <IconShoppingCartPlus onClick={() => handleCart(data.id)} />
                </IconButton>            
              </CardActions>
            </Card>
          )): 
          ''
        }
      </div>

      {flash.message && <Popup
          icon={(
            <span className="text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          )}
          title={"Success"}
          message={flash.message}
          isOpen={isOpen}
          onClose={handleOnClose}
      />}
    </IndexLayout>
  )
}

export default Product