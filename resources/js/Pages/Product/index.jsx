import IndexLayout from "@/Layouts/IndexLayout"
import { usePage } from "@inertiajs/inertia-react"
import { Card, CardActions, CardContent, Divider } from "@mui/material"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import RupiahFormat from "@/Helper/RupiahFormat"
import { useEffect } from "react"
import { Inertia } from "@inertiajs/inertia"
import SearchFilter from "@/Shared/SearchFilter"
import toast, { Toaster } from 'react-hot-toast';
import BasicPopover from "@/Components/Popover"
import { useState } from "react"
import FilterCheckbox from "@/Components/Checkbox/FilterCheckbox"
import ProductFilter from "@/Components/RadioButton/ProductFilter"

export default function Product({ product, flash, typeProduct }) {
  const { auth } = usePage().props
  const [selectedPrice, setSelectedPrice] = useState('asc');
  const [selectedType, setSelectedType] = useState([]);
  console.log(selectedType);

  const handleChange = (event) => {
    const { value } = event.target;

    if (!selectedType.includes(value)) {
      setSelectedType((prevSelectedType) => [...prevSelectedType, value]);
    } else {
      setSelectedType((prevSelectedType) =>
        prevSelectedType.filter((type) => type !== value)
      );
    }
  };

  useEffect(() => {
    Inertia.put('/product', {
      sort_price: selectedPrice,
      type_product_id: selectedType
    })
  }, [selectedPrice, selectedType])

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
        <div className="w-full  flex h-fit justify-center ">
          <div className="">
            <BasicPopover>
              <div className="flex gap-10">
                <div className="">
                  <h4 className="font-medium">Harga</h4>
                  <ProductFilter value={selectedPrice} setValue={setSelectedPrice} />
                </div>
              </div>
            </BasicPopover>
          </div>
          <div className="w-6/12">
            <SearchFilter url={'product.index'} />
          </div>
        </div>
        <Toaster position="center-bottom" />
      </div>
      <div className=" flex mt-5 mx-5 ">
        <div className=" px-5">
          <div className="flex w-full  gap-4">
            <h4 className="text-gray-500 mb-3">Tipe Produk</h4>
          </div>
          <FilterCheckbox typeProducts={typeProduct} handleChange={handleChange} value={selectedType} />
        </div>
        <div className="flex flex-wrap gap-10 justify-center h-full mb-10">
          {product ?
            product.map((data, index) => (
              <div className="shadow-md" key={data.id}>
                <Card sx={{
                  width: 250,
                  boxShadow: 0,
                  border: 1,
                  borderColor: '#e2e8f0',
                  height: '100%'
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
                      <p className="">{data.description_product}</p>
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
      </div>
    </IndexLayout>
  )
}