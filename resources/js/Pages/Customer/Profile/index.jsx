import React, { useEffect, useRef, useState } from "react";
import { Divider, selectClasses } from "@mui/material";
import IndexLayout from "@/Layouts/IndexLayout";
import EditIcon from '@mui/icons-material/Edit';
import RupiahFormat from "@/Helper/RupiahFormat";
import dayjs from "dayjs";
import Buttons from "@/Components/Buttons/Index";
import { Inertia } from "@inertiajs/inertia";
import toast, { Toaster } from 'react-hot-toast';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function index({ auth, user, transactions, flash }) {
  console.log(transactions);
  const [tabs, setTabs] = useState('histories')
  const [preview, setPreview] = useState(null)
  const [values, setValues] = useState({
    name: user.name,
    phone: user.phone,
    photo_profile: user.photo_profile,
  })

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setValues(values => ({
      ...values,
      [key]: value,
    }))

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      }

      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
    }
    Inertia.post('/clear-flash')
  }, [flash.message])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    Inertia.post(`/profile/${user.id}`, values)
  }

  const handleHistoryOnClick = () => {
    setTabs('histories')
  }

  const handleProfileOnClick = () => {
    setTabs('settings');
  }

  return (
    <IndexLayout auth={auth} >
      <Toaster />
      <div className="font-sans">
        <div className="flex flex-col w-full items-center justify-center my-10">
          <div className="w-full">
            <div className="flex gap-20 mx-32 justify-center  mt-10">
              <div className="border shadow-md p-5 rounded-xl w-3/12 h-fit">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-36 h-auto">
                    <img src={user.photo_profile} alt="Photo Profile" className="rounded-full border-4 shadow-md border-white " />
                  </div>
                  <div className="flex flex-col items-center my-5">
                    <h3 className="text-xl font-inter font-medium text-gray-700">{user.name}</h3>
                    <h4 className="text-gray-500">{user.email}</h4>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-inter text-sm font-medium">Details</h3>
                  <Divider />
                  <div>
                    <h3 className="font-inter text-sm font-medium">Account ID</h3>
                    <span className="text-sm text-gray-500">ID-{user.id}</span>
                  </div>
                  <div>
                    <h3 className="font-inter text-sm font-medium">Email</h3>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                  <div>
                    <h3 className="font-inter text-sm font-medium">Phone</h3>
                    <span className="text-sm text-gray-500">{user.phone}</span>
                  </div>
                </div>
              </div>
              <div className="w-9/12">
                <div className="flex gap-3 mb-5">
                  {/* buat active state */}
                  <button onClick={handleHistoryOnClick} className={`${tabs == 'histories' ? 'text-primary border-b-2' : 'text-gray-700'} font-medium hover:border-b-2 px-4 py-2 h-fit`}>History</button>
                  <button onClick={handleProfileOnClick} className={`${tabs == 'settings' ? 'text-primary border-b-2' : 'text-gray-700'} font-medium  hover:border-b-2 px-4 py-2 h-fit`}>Profile Setting</button>
                </div>
                <div className="h-fit flex flex-col border shadow-md p-5 rounded-xl">
                  {tabs == 'histories' &&
                    <div className="flex flex-col gap-5">
                      <h1 className="text-xl font-medium">History Transaksi</h1>
                      <div className="text-gray-500 ">
                        <table className="h-fit text-sm w-full divide-y-2 divide-gray-100">
                          <thead className="text-left">
                            <tr>
                              <th className="py-3">Order No</th>
                              <th className="py-3">Status Transaksi</th>
                              <th className="py-3">Total</th>
                              <th className="py-3">Type Pembayaran</th>
                              <th className="py-3">Tanggal Transaksi</th>
                            </tr>
                          </thead>
                          {transactions.data.map((transaction) => {
                            return (
                              <tbody className="divide-y divide-gray-100 text-left" key={transaction.id}>
                                <tr>
                                  <td className="py-3">#{transaction.id}</td>
                                  <td className="py-3">{transaction.status_transaction}</td>
                                  <td className="py-3">{RupiahFormat(transaction.amount)}</td>
                                  <td className="py-3">{transaction.type_payment}</td>
                                  <td className="py-3">{transaction.date_transaction}</td>
                                </tr>
                              </tbody>
                            )
                          })}
                        </table>
                        <div className="gap-2 flex justify-end items-center mt-5">
                          <a href={transactions.prev_page_url} className={`${transactions.prev_page_url ? '' : 'bg-gray-400'}bg-gray-200 p-2 rounded-md`}>{<GrFormPrevious />}</a>
                          {transactions.links.map((link) => {
                            if (link.label != "&laquo; Previous" && link.label != "Next &raquo;") {
                              return (
                                <a href={link.url} className={`${link.active ? 'bg-primary text-white' : 'bg-gray-200'} h-8 w-8 rounded-md flex items-center justify-center`}>
                                  {link.label}
                                </a>
                              )
                            }
                          })}
                          <a href={transactions.next_page_url} className={`${transactions.next_page_url ? '' : 'bg-gray-400'}bg-gray-200 p-2 rounded-md`}>{<GrFormNext/>}</a>
                        </div>
                      </div>
                    </div>
                  }
                  {tabs == 'settings' &&
                    <div className="flex flex-col gap-5">
                      <h1 className="text-xl font-medium">Profile Setting</h1>
                      <div className="flex flex-col gap-5">
                        <div className="border-4  shadow-md w-fit h-fit relative border-white">
                          <img src={preview ? preview : user.photo_profile} alt="" className="w-36 h-auto" />
                          <div className="absolute -bottom-3 -right-3 rounded-full bg-white p-1 shadow-md">
                            {/* akalin pake label */}
                            <label htmlFor="photo_profile" className="hover:cursor-pointer">
                              <EditIcon fontSize="small" color="primary" />
                            </label>
                            <input type="file" onChange={handleChange} id="photo_profile" className="hidden" />
                            {/* <button className="">
                              <EditIcon fontSize="small" color="primary" />
                            </button> */}
                          </div>
                        </div>
                        <form onSubmit={handleOnSubmit}>
                          <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 flex flex-col">
                              <label htmlFor="name">Nama</label>
                              <input id="name" type="text" onChange={handleChange} defaultValue={user.name} className="border-none rounded-md bg-gray-100" />
                            </div>
                            <div className="col-span-6 flex flex-col ">
                              <label htmlFor="email">Email</label>
                              <input id="email" disabled type="text" defaultValue={user.email} className="border-none rounded-md text-gray-400 bg-gray-100" />
                            </div>
                            <div className="col-span-6 flex flex-col ">
                              <label htmlFor="phone">Phone</label>
                              <input id="phone" type="text" onChange={handleChange} defaultValue={user.phone} className="border-none rounded-md bg-gray-100" />
                            </div>
                          </div>
                          <div className="py-5 text-end">
                            <Buttons
                              title={"Save"}
                              size={"medium"}
                              variant={"contained"}
                              backgroundColor={"primary"}
                              type={"submit"}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}