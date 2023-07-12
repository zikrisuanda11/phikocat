import React from "react";
import Divider from '@mui/material/Divider';
import IndexLayout from "@/Layouts/IndexLayout";
import { FcMoneyTransfer } from 'react-icons/fc';
import RupiahFormat from "@/Helper/RupiahFormat";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Inertia } from "@inertiajs/inertia";

export default function status({ flash,  transaction, transactionDetail, admin }) {
  console.log(flash);

  useEffect(() => {
    transaction
  }, [transaction])

  useEffect(() => {
    if (flash.message) {
      toast(flash.message, {
        icon: '✅'
      })
    }
    Inertia.post('/clear-flash')
  }, [flash.message])

  return (
    <>
      <IndexLayout>
        <Toaster 
          toastOptions={{
            duration: 5000
          }}
          position="bottom-center"
        />
        <div className="flex flex-col w-full items-center justify-center my-10">
          <h1 className="text-3xl font-serif">Status Payment</h1>
          <div className="w-full">
            <div className="flex gap-5 mx-56 justify-center  mt-10">
              <div className="border rounded-md shadow-md w-5/12">
                <div className="bg-grey_pink m-5 p-5 rounded-xl">
                  <header className="flex justify-between items-center mb-3">
                    <FcMoneyTransfer size={32} />
                    <div className="text-primary">{RupiahFormat(transaction.amount)}</div>
                  </header>
                  <Divider />
                  <div className="my-3">
                    <div className="text-xs text-slate-500">Transaction ID</div>
                    <p className="font-bold">#{transaction.id}</p>
                  </div>
                  <div className="my-3">
                    <div className="text-xs text-slate-500">Date Transaction</div>
                    <p className="font-bold">{transaction.date_transaction}</p>
                  </div>
                  <div className="my-3">
                    <div className="text-xs text-slate-500">Tipe Pembayaran</div>
                    <p className="font-bold">
                      {transaction.type_payment == 'cod' ? 'Tunai' : 'Transfer'}
                    </p>
                  </div>
                  <div className="my-3">
                    <div className="text-xs text-slate-500">Status Pembayaran</div>
                    <p className="font-bold">{transaction.status_transaction}</p>
                  </div>

                </div>
              </div>
              <div className="border rounded-md shadow-md w-3/12 h-fit">
                <div className="p-5 text-xs gap-5 flex flex-col bg-grey_pink">
                  {/* tampilkan jika pembayaran cod */}
                  <div>
                    <p>Punya pertanyaan tentang pesanan?</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-primary">
                      {admin[0].email}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold">Whatsapp</h3>
                    <p className="text-primary">
                      {admin[0].phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IndexLayout>
    </>
  )
}