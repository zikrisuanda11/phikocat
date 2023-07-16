import RupiahFormat from "@/Helper/RupiahFormat";
import IndexLayout from "@/Layouts/IndexLayout";
import { Divider } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

export default function index({ transactionDetails, transaction, typeTransaction, user, admin }) {
  return (
    <IndexLayout>
      <div className="flex flex-col w-full items-center justify-center my-10">
        {/* <h1 className="text-3xl font-serif">Cart</h1> */}
        <div className="w-full">
          <div className="flex gap-5 mx-56 justify-center mt-10 ">
            <div className=" border shadow-md w-8/12  rounded-xl h-min-fit p-5">
              {typeTransaction == 'products' && (
                <div className=" p-5 rounded-xl">
                  <header>
                    <h3 className="text-xl font-bold">Order details #{transaction.id}</h3>
                    <Divider />
                  </header>
                  <div className="flex flex-col gap-2 my-2">
                    {/* <p className="text-gray-500">{dayjs(transaction.date_transaction)}</p> */}
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-gray-500">{user.phone}</p>
                    </div>
                    <div>
                      <p className="font-medium">Order Status</p>
                      <p className="text-gray-500">Status Order: {transaction.status_transaction}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <header>
                      <h3 className="font-bold text-xl">Product Details</h3>
                      <Divider />
                    </header>
                    {transactionDetails.map((transactionDetail) => (
                      <div className="flex my-2.5 gap-2" key={transactionDetail.id}>
                        <div className="w-2/12 flex justify-center border-2">
                          <img src={transactionDetail.product_pets.photo_product} alt="" className="max-h-24" />
                        </div>
                        <div className="flex justify-between items-center w-10/12">
                          <div className="flex flex-col">
                            <div>{transactionDetail.product_pets.name_product}</div>
                            <div className="text-gray-500">{transactionDetail.quantity} x {RupiahFormat(transactionDetail.product_pets.price_product)}</div>
                          </div>
                          <div>
                            <span>Total Price</span>
                            <div className="text-gray-500">{RupiahFormat(transactionDetail.amount)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Divider />
                  <div className="flex justify-end mt-5">
                    <div className="flex gap-2 items-center">
                      <h3 className="">Total</h3>
                      <p className="text-gray-500">
                        {RupiahFormat(transaction.amount)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {typeTransaction == 'service' && (
                <>
                  <header>
                    <h3 className="text-xl font-bold">Order details #{transaction.id}</h3>
                    <Divider />
                  </header>
                  <div className="flex flex-col gap-2 my-2">
                    <p className="text-gray-500">Jum'at, 14 July 2023</p>
                    <div>
                      <p className="font-medium">Zikri</p>
                      <p className="text-gray-500">083125569092</p>
                    </div>
                    <div>
                      <p className="font-medium">Order Status</p>
                      <p className="text-gray-500">Status Order: success</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <header>
                      <h3 className="font-bold text-xl">Service Details</h3>
                      <Divider />
                    </header>
                    {transactionDetails.map((transactionDetail) => (
                      <div className="flex my-2.5 gap-2" key={transactionDetail.id}>
                        <div className="flex justify-between items-center w-full">
                          <div className="flex flex-col">
                            <div>{transactionDetail.service_pet.name_service}</div>
                            <div className="text-gray-500">{transactionDetail.quantity} hari x {RupiahFormat(transactionDetail.service_pet.price_service)}</div>
                          </div>
                          <div>
                            {/* <span>Total Price</span> */}
                            <div className="text-gray-500">{RupiahFormat(transactionDetail.amount)}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Divider />
                  <div className="flex justify-end mt-5">
                    <div className="flex gap-2 items-center">
                      <h3 className="">Total</h3>
                      <p className="text-gray-500">
                        {RupiahFormat(transaction.amount)}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="border rounded-xl shadow-md w-3/12 h-fit">
              <div className="p-5 text-xs bg-grey_pink gap-5 flex flex-col ">
                {/* tampilkan jika pembayaran cod */}
                <div>
                  <p>Punya pertanyaan tentang pesanan?</p>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-primary">
                    {admin.email}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">Whatsapp</h3>
                  <p className="text-primary">
                    {admin.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout >
  )
}