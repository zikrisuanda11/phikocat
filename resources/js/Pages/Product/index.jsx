import IndexLayout from "@/Layouts/IndexLayout"
import { usePage } from "@inertiajs/inertia-react"
import { Card, CardActions, CardContent, CardMedia } from "@mui/material"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import RupiahFormat from "@/Helper/RupiahFormat"
import { useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import SearchFilter from "@/Shared/SearchFilter"
import toast, { Toaster } from 'react-hot-toast';

export default function Product({ product, flash, count_product }) {
  const { auth } = usePage().props

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
    }
    Inertia.post('/clear-flash')
  }, [flash.message])


  const handleCart = (e, id) => {
    e.preventDefault();

    Inertia.post('/cart', {
      product_id: id
    }, { preserveScroll: true })
  }

  return (
    <IndexLayout>
      <div className="flex flex-col mt-10  justify-center items-center">
        <h4 className="text-3xl my-4">Produk Pet</h4>
        <SearchFilter url={'product.index'} />
        <Toaster position="center-bottom"/>
      </div>
      <div className="px-10 py-10 flex flex-wrap gap-10 justify-center">
        {product ?
          product.map((data, index) => (
            <div className="shadow-md" key={data.id}>
              <Card sx={{
                width: 250,
                boxShadow: 0,
                border: 1,
                borderColor: '#e2e8f0'
              }}
                key={data.id}
              >
                <div className="flex justify-center m-4">
                  <img src={data.photo_product} className="h-44 w-auto" alt="" />
                </div>
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
                  {auth.user != null &&
                    <form onSubmit={(e) => handleCart(e, data.id)}>
                      <button type="submit">
                        <IconShoppingCartPlus />
                      </button>
                    </form>
                  }
                </CardActions>
              </Card>
            </div>
          )) :
          ''
        }
      </div>
      {/* {flash.message && <Toaster />} */}
    </IndexLayout>
  )
}