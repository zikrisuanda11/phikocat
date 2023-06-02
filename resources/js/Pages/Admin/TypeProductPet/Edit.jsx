import React from "react";
import Layout from "@/Layouts/Default"
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import { useState } from "react";
import Input from "@/Components/Input/Index";
import { Inertia } from "@inertiajs/inertia";


export default function Edit({typeProductPet}) {

  const [name_type, setNameType] = useState(typeProductPet.name_type);

  const handleSubmit = async (e) => {
    e.preventDefault();

    Inertia.put(`/type-products/${typeProductPet.id}`, {
      name_type: name_type,
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
                    { name: 'TypeProduct', href: '/type-products' ,key: '1' },
                    { name: 'Table', href: '/type-products', key: '2' },
                    { name: 'Edit TypeProduct', key: '3' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 min-w-full border rounded-md p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                <div className="col-span-2  flex flex-col">
                    <label htmlFor="name_product" className=" text-right my-3 text-gray-500">
                      Name
                    </label>
                  </div>
                  <div className="col-span-4  gap-3">
                    <Input
                      type={"text"}
                      id={"name_type"}
                      value={name_type}
                      onChange={(e) => {
                        setNameType(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <div className="mt-5 flex gap-5">
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
                          href={'/type-products'}
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