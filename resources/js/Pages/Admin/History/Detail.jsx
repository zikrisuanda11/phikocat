import React, { useRef, useState } from "react";
import Layout from "@/Layouts/Default";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Card from "@/Components/Card/Type1";
import Type2 from "@/Components/Card/Type2";
import { MdDateRange, MdPayments, MdMiscellaneousServices, MdOutlineEmail } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FaRegAddressCard } from 'react-icons/fa';

export default function ProductPet({ transaction }) {

  console.log(transaction);

  // const total_price_service = 1 * transaction.detail_transaction.service_pet.price_service;
  // const total_price_product = transaction.detail_transaction.quantity * transaction.detail_transaction.product_pets.price_product;
  // const subtotal = total_price_product + total_price_service

  const dateTransaction = new Date(transaction.date_transaction)

  return (
    <>
      <Layout>
        <div className="container m-5">
          <div className="flex-col mr-8">
            <div className="flex justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-semibold text-gray-900">History</h1>
                <Breadcrumb
                  breadcrumbs={[
                    { name: 'History', href: '/histories', color: 'inherit', key: '1' },
                    { name: 'Table', href: '/histories', color: 'inherit', key: '2' },
                    { name: 'Detail', color: 'text.primary', key: '3' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 inline-block align-middle w-full">
              <div className="grid grid-cols-10 gap-6">
                <div className="col-span-5">
                  <Card
                    title={`Order Details #${transaction.id}`}
                    icon1={<MdDateRange className="m-1" />}
                    content1={"Date Transaction"}
                    information1={(<div className="text-end">{dateTransaction.toLocaleDateString('id-ID')}</div>)}

                    icon2={<MdPayments className="m-1" />}
                    content2={"Type Payment"}
                    information2={transaction.type_payment}

                    icon3={<MdMiscellaneousServices className="m-1" />}
                    content3={"Status Transaction"}
                    information3={(<div>{transaction.status_transaction}</div>)}

                  />
                </div>
                <div className="col-span-5">
                  <Card
                    title={"Customer Details"}
                    icon1={<HiOutlineUserCircle className="m-1" />}
                    content1={"Customer"}
                    information1={transaction.user.name}

                    icon2={<MdOutlineEmail className="m-1" />}
                    content2={"Email"}
                    information2={transaction.user.email}

                    icon3={<FaRegAddressCard className="m-1" />}
                    content3={"Phone"}
                    information3={(<div className="text-end">{transaction.user.phone}</div>)}


                  />
                </div>
              </div>
              <div className="min-w-full mt-5">
                {transaction.detail_transactions.map((item) => {
                  const price_product = item.product_pets.price_product;
                  const price_service = item.service_pet.price_service;
                  let IDR = new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                  })
                  
                  const total_price_service = 1 * item.service_pet.price_service
                  const total_price_product = item.quantity * item.product_pets.price_product;
                  const subtotal = total_price_product + total_price_service

                  return (
                    <Type2>
                      <div className="flex-col">
                        {/* title */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Order #{item.id}
                          </h3>
                        </div>
                        {/* table */}
                        <div className="w-full my-5">
                          <table className="table-fixed w-full">
                            <thead className="text-gray-400">
                              <tr>
                                <th className=" w-1/2 py-5 text-start">Product/Service</th>
                                <th className="w-1/4  py-5 text-center">Quantity</th>
                                <th className="w-1/4  py-5 text-end">Unit Price</th>
                                <th className="w-1/3  py-5 text-end">Total</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-600">
                              {/* start::service */}
                              <tr>
                                <td className=" text-start" >{item.service_pet.name_service}</td>
                                <td className=" py-5 text-center" >1</td>
                                <td className=" py-5 text-end" >{IDR.format(item.service_pet.price_service)}</td>
                                <td className=" py-5 text-end" >{IDR.format(item.service_pet.price_service)}</td>
                              </tr>
                              {/* end::service */}
                              {/* start::product */}
                              <tr>
                                <td className=" text-start" >{item.product_pets.name_product}</td>
                                <td className=" py-5 text-center" >{item.quantity}</td>
                                <td className=" py-5 text-end" >{IDR.format(price_product)}</td>
                                <td className=" py-5 text-end" >{IDR.format(item.quantity * item.product_pets.price_product)}</td>
                              </tr>
                              {/* end::product */}
                              <tr className="divide-y">
                                <td></td>
                                <td></td>
                            {/* <div className="col-span-3">
                  <Card
                    title={"Service"}
                    icon1={<MdMiscellaneousServices className="m-1" />}
                    content1={"Name Service"}
                    // information1={transaction.detail_transaction.service_pet.name_service}

                    icon2={<MdDateRange className="m-1" />}
                    content2={"Type Service"}
                    // information2={transaction.detail_transaction.service_pet.type_service}

                    icon3={<MdDateRange className="m-1" />}
                    content3={"Price Service"}
                    // information3={(<div>Rp. {transaction.detail_transaction.service_pet.price_service}</div>)}
                  />
                </div> */}    <td className="py-5 text-end text-xl font-bold">Sub total</td>
                                <td className="py-5 text-end text-xl font-bold">{IDR.format(subtotal)}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        {/* Total */}
                      </div>
                    </Type2>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
