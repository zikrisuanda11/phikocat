import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";
import Layout from "@/Layouts/Default"
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Input from "@/Components/Input/Index";
import Select from "@/Components/Select/Index"
import WarningMessage from "@/Components/Alert/WarningMessage";

const status = [
  { name: 'Active', value: true },
  { name: 'Non-Active', value: false },
]

export default function Create({ user, errors }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [is_active, setIsActive] = useState(user.is_active);
  const [selected, setSelected] = useState(status[0]);

  useEffect(() => {
    if (selected){
      setIsActive(selected.value)
    }
  }, [selected])

  const handleSubmit = async (e) => {
    e.preventDefault();

    Inertia.put(`/admin/users/${user.id}`, {
      name: name,
      email: email,
      is_active: is_active,
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
                    { name: 'Users', href: '/admin/users', key: '1' },
                    { name: 'Table', href: '/admin/users', key: '2' },
                    { name: 'Create User', key: '3' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 min-w-full border rounded-md p-5 ">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2  flex flex-col">
                    <label htmlFor="name_product" className=" text-right my-3 text-gray-500 flex justify-end">
                      Name
                      <p className={`mx-1 text-sm text-red-700`}>*</p>
                    </label>
                    <label htmlFor="name_product" className=" text-right my-6 text-gray-500 flex justify-end">
                      Email
                      <p className={`mx-1 text-sm text-red-700`}>*</p>
                    </label>
                    <label htmlFor="name_product" className=" text-right my-4 text-gray-500 flex justify-end">
                      Status
                      <p className={`mx-1 text-sm text-red-700`}>*</p>
                    </label>
                  </div>
                  <div className="col-span-4  gap-3">
                    <Input
                      type={"text"}
                      id={"name"}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      customClass={errors.name ? "mb-0" : "mb-5"}
                    />
                    {errors.name &&
                      <WarningMessage
                        message={errors.name}
                        // customClass={"invisible"}
                      />}
                    <Input
                      type={"text"}
                      id={"email"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      customClass={errors.email ? "mb-0" : "mb-5"}
                    />
                    {errors.name &&
                      <WarningMessage
                        message={errors.email}
                        // customClass={"invisible"}
                      />}
                    <Select
                      datas={status}
                      selected={selected}
                      setSelected={setSelected}
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
                          href={'/admin/users'}
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