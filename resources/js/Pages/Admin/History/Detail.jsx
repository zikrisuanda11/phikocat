import React, { useRef, useState } from "react";
import Layout from "@/Layouts/Default";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Card from "@/Components/Card/Type1";
import Type2 from "@/Components/Card/Type2";
import { MdDateRange, MdPayments, MdMiscellaneousServices, MdOutlineEmail } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FaRegAddressCard } from 'react-icons/fa';

export default function ProductPet({ detail_transaction, transaction }) {

  const dateTransaction = new Date(detail_transaction.transaction.date_transaction)

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
              <div className="grid grid-cols-9 gap-6">
                <div className="col-span-3">
                  <Card
                    title={`Order Details #${transaction.id}`}
                    icon1={<MdDateRange className="m-1" />}
                    content1={"Date Transaction"}
                    information1={(<div className="text-end">{dateTransaction.toLocaleDateString('id-ID')}</div>)}

                    icon2={<MdPayments className="m-1" />}
                    content2={"Type Payment"}
                    information2={detail_transaction.transaction.type_payment}

                    icon3={<MdMiscellaneousServices className="m-1" />}
                    content3={"Amount"}
                    information3={(<div>Rp. {detail_transaction.amount}</div>)}

                  />
                </div>
                <div className="col-span-3">
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
                <div className="col-span-3">
                  <Card
                    title={"Service"}
                    icon1={<MdMiscellaneousServices className="m-1" />}
                    content1={"Name Service"}
                    information1={detail_transaction.service_pet.name_service}

                    icon2={<MdDateRange className="m-1" />}
                    content2={"Type Service"}
                    information2={detail_transaction.service_pet.type_service}

                    icon3={<MdDateRange className="m-1" />}
                    content3={"Price Service"}
                    information3={(<div>Rp. {detail_transaction.service_pet.price_service}</div>)}
                  />
                </div>
              </div>
              <div className="min-w-full mt-5">
                <Type2>
                  <div className="flex-col">
                    {/* title */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        Order #14123
                      </h3>
                    </div>
                    {/* table */}
                    <div className="w-full my-5">
                      <table className="table-fixed w-full">
                        <thead className="text-gray-400">
                          <tr>
                            <th className=" w-1/2 py-5 text-start">Product</th>
                            <th className="w-1/4  py-5 text-end">SKU</th>
                            <th className="w-1/4  py-5 text-center">Quantity</th>
                            <th className="w-1/4  py-5 text-end">Unit Price</th>
                            <th className="w-1/3  py-5 text-end">Total</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-600">
                          <tr>
                            <td className=" text-start" >Product 1</td>
                            <td className=" py-5 text-end" >123123123</td>
                            <td className=" py-5 text-center" >5</td>
                            <td className=" py-5 text-end" >Rp.10000</td>
                            <td className=" py-5 text-end" >Rp.50000</td>
                          </tr>
                          <tr>
                            <td className=" text-start" >Product 2</td>
                            <td className=" py-5 text-end" >123123123</td>
                            <td className=" py-5 text-center" >5</td>
                            <td className=" py-5 text-end" >Rp.10000</td>
                            <td className=" py-5 text-end" >Rp.50000</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="py-5 text-end">Subtotal</td>
                            <td className="py-5 text-end">Rp 20,000</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="py-5 text-end">Tax(11%)</td>
                            <td className="py-5 text-end">Rp 2,000</td>
                          </tr>
                          <tr  className="divide-y">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="py-5 text-end text-xl font-bold">Grand Total</td>
                            <td className="py-5 text-end text-xl font-bold">Rp 22,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Total */}
                  </div>
                </Type2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
