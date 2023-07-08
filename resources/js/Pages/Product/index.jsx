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

  console.log(flash);

  useEffect(() => {
    if (flash.message) {
      toast(flash.message, {
        icon: '✅'
      })
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
    <IndexLayout auth={auth} count_product={count_product}>
      <div className="flex flex-col mt-10">
        <p className="text-center text-3xl font-semibold">Produk Pet</p>
        <SearchFilter url={'product'} />
        <Toaster/>
      </div>
      <div className="px-10 py-10 flex flex-wrap gap-10 justify-center">
        {product ?
          product.map((data, index) => (
            <Card sx={{
              width: 250,
              boxShadow: 0,
              border: 1,
              borderColor: '#e2e8f0'
            }}
              key={data.id}
            >

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
                {auth.user != null &&
                  // <Link as="button" onClick={() => handleCart(data.id)} >
                  //   <IconShoppingCartPlus />
                  // </Link>
                  <form onSubmit={(e) => handleCart(e, data.id)}>
                    <button type="submit">
                      <IconShoppingCartPlus />
                    </button>
                  </form>
                }
              </CardActions>
            </Card>
          )) :
          ''
        }
      </div>
      {/* {flash.message && <Toaster />} */}
    </IndexLayout>
  )
}