import React from "react";
import Layout from "@/Layouts/Default"
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import { useState } from "react";
import Input from "@/Components/Input/Index";
import ComboBox from "@/Components/ComboBox/Index"
import { Inertia } from "@inertiajs/inertia";
import { useEffect } from "react";


export default function Edit({productPet, typeProductPets}) {
  const [name_product, setNameProduct] = useState(productPet.name_product);
  const [description_product, setDescriptionProduct] = useState(productPet.description_product);
  const [price_product, setPriceProduct] = useState(productPet.price_product);
  const [stock_product, setStockProduct] = useState(productPet.stock_product);
  const [type_product_id, setTypeProductId] = useState(productPet.type_product_id);
  const [selected, setSelected] = useState(typeProductPets.find(item => item.id === productPet.type_product_id));
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTypeProductId(selected.id)
  }, [selected]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Inertia.put(`/products/${productPet.id}`, {
      name_product: name_product,
      description_product: description_product,
      price_product: price_product,
      stock_product: stock_product,
      type_product_id: type_product_id
    })
  }

  return (
    <>
      <Layout>
        <div className="container m-5">
          <div className="flex-col mr-8">
            <div className="flex justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-semibold text-gray-900">Product</h1>
                <Breadcrumb
                  breadcrumbs={[
                    { name: 'Product', href: '/products' ,key: '1' },
                    { name: 'Table', href: '/products', key: '1' },
                    { name: 'Create Product', key: '2' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 min-w-full border rounded-md p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2  flex flex-col">
                    <label htmlFor="name_product" className=" text-right my-3 text-gray-500">
                      Product Name
                    </label>
                    <label htmlFor="description_product" className=" text-right my-6 text-gray-500">
                      Description Product
                    </label>
                    <label htmlFor="price_product" className=" text-right my-3 text-gray-500">
                      Price Product
                    </label>
                    <label htmlFor="stock_product" className=" text-right my-7 text-gray-500">
                      Stock Product
                    </label>
                    <label htmlFor="type_product" className=" text-right my-2 text-gray-500">
                      Type Product
                    </label>
                  </div>
                  <div className="col-span-4  gap-3">
                    <Input
                      type={"text"}
                      id={"name_product"}
                      value={name_product}
                      onChange={(e) => {
                        setNameProduct(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <Input
                      type={"text"}
                      id={"description_product"}
                      value={description_product}
                      onChange={(e) => {
                        setDescriptionProduct(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <Input
                      type={"number"}
                      id={"price_product"}
                      value={price_product}
                      onChange={(e) => {
                        setPriceProduct(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <Input
                      type={"number"}
                      id={"stock_product"}
                      value={stock_product}
                      onChange={(e) => {
                        setStockProduct(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <div className="relative z-10">
                      <ComboBox
                        id={"type_product"}
                        items={typeProductPets}
                        selected={selected}
                        query={query}
                        setSelected={setSelected}
                        setQuery={setQuery}
                        
                      />
                    </div>
                    <div className="mt-7 flex gap-5">
                      <div>
                        <Buttons
                          variant={'contained'}
                          size={'medium'}
                          title={'Simpan'}
                          backgroundColor={'#124C5F'}
                          type={'submit'}
                        />
                      </div>
                      <div>
                        <Buttons
                          variant={'contained'}
                          size={'medium'}
                          title={'Cancel'}
                          backgroundColor={'#C7E7E1'}
                          textColor={'#124C5F'}
                          href={'/products'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}