import React, { useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";
import Layout from "@/Layouts/Default"
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Input from "@/Components/Input/Index";
import ComboBox from "@/Components/ComboBox/Index"
import File from "@/Components/Input/File";
import Alert from "@/Components/Alert";

export default function Create({ typeProductPets, errors }) {
  const [name_product, setNameProduct] = useState();
  const [description_product, setDescriptionProduct] = useState();
  const [price_product, setPriceProduct] = useState();
  const [stock_product, setStockProduct] = useState();
  const [type_product_id, setTypeProductId] = useState();
  const [selected, setSelected] = useState(typeProductPets[0]);
  const [query, setQuery] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    setTypeProductId(selected.id)
  }, [selected]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Inertia.post('/admin/products', {
      name_product: name_product,
      description_product: description_product,
      price_product: price_product,
      stock_product: stock_product,
      type_product_id: type_product_id,
      photo_product: file
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
                    { name: 'Product', href: '/admin/products', key: '1' },
                    { name: 'Table', href: '/admin/products', key: '2' },
                    { name: 'Create Product', key: '3' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 min-w-full border rounded-md p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2  flex flex-col">
                    <label htmlFor="name_product" className="text-right my-3 text-gray-500">
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
                    <label className="text-right my-2 text-gray-500">
                      Photo Product
                    </label>
                    {errors.photo_product && (
                      <Alert customClass="-mt-4 invisible" />
                    )}
                    <label htmlFor="type_product" className=" text-right my-7 text-gray-500">
                      Type Product
                    </label>
                  </div>
                  <div className="col-span-4  gap-3">
                    <Input
                      type={"text"}
                      id={"name_product"}
                      onChange={(e) => {
                        setNameProduct(e.target.value)
                      }}
                      customClass="mb-5"
                    />
                    <Input
                      type={"text"}
                      id={"description_product"}
                      onChange={(e) => {
                        setDescriptionProduct(e.target.value)
                      }}
                      customClass="mb-5"
                    />
                    <Input
                      type={"number"}
                      id={"price_product"}
                      onChange={(e) => {
                        setPriceProduct(e.target.value)
                      }}
                      customClass="mb-5"
                    />
                    <Input
                      type={"number"}
                      id={"stock_product"}
                      onChange={(e) => {
                        setStockProduct(e.target.value)
                      }}
                      customClass="mb-5"
                    />
                    <File
                      id={"file"}
                      value={file}
                      onChange={(e) => {
                        setFile(e.target.files[0])
                      }}
                      customClass={errors.photo_product ? "" : "mb-5"}
                    />
                    {errors.photo_product && (
                      <Alert message={errors.photo_product} />
                    )}
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
                          href={'/admin/products'}
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