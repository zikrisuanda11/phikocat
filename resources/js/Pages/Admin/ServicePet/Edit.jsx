import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import Layout from "@/Layouts/Default"
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Input from "@/Components/Input/Index";
import Select from "@/Components/Select/Index";
import TextArea from "@/Components/TextArea/Index";

export default function Create({servicePet}) {
  const typeService = [
    { name: "Grooming", value: "grooming" },
    { name: "Pet Hotel", value: "pet_hotel" }
  ]
  const [name_service, setNameService] = useState(servicePet.name_service);
  const [price_service, setPriceService] = useState(servicePet.price_service);
  const [type_service, setTypeService] = useState(servicePet.type_service);
  const [description_service, setDescriptionService] = useState(servicePet.description_service);
  const [selected, setSelected] = useState(typeService[0])

  const handleSubmit = async (e) => {
    setTypeService(selected.value)

    e.preventDefault();

    Inertia.put(`/services/${servicePet.id}`, {
      name_service: name_service,
      price_service: price_service,
      type_service: type_service,
      description_service: description_service,
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
                    { name: 'Services', href: '/services', key: '1' },
                    { name: 'Table', href: '/services', key: '2' },
                    { name: 'Create Service', key: '3' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 min-w-full border rounded-md p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2  flex flex-col">
                    <label htmlFor="name_service" className=" text-right my-3 text-gray-500">
                      Service Name
                    </label>
                    <label htmlFor="price_service" className=" text-right my-6 text-gray-500">
                      Price Service
                    </label>
                    <label htmlFor="type_service" className=" text-right my-3 text-gray-500">
                      Type Service
                    </label>
                    <label htmlFor="description_service" className=" text-right my-7 text-gray-500">
                      Description Service
                    </label>
                  </div>
                  <div className="col-span-4  gap-3">
                    <Input
                      type={"text"}
                      id={"name_service"}
                      value={name_service}
                      onChange={(e) => {
                        setNameService(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <Input
                      type={"number"}
                      id={"price_service"}
                      value={price_service}
                      onChange={(e) => {
                        setPriceService(e.target.value)
                      }}
                      customClass={"mb-5"}
                    />
                    <Select
                      datas={typeService}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    <TextArea
                      id={"description_service"}
                      value={description_service}
                      onChange={(e) => {
                        setDescriptionService(e.target.value)
                      }}
                      placeholder={"Masukkan deskripsi disini.."}
                    />
                    {/* <Input
                      type={"text"}
                      id={"description_service"}
                      value={description_service}
                      onChange={(e) => {
                        setDescriptionService(e.target.value)
                      }}
                      customClass={"mb-5"}
                    /> */}
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
                          href={'/services'}
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