import Layout from '@/Layouts/Default';
import { IoIosHome, IoIosWallet } from 'react-icons/io';
import { FaStore } from 'react-icons/fa';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react'
import { Inertia } from '@inertiajs/inertia';
import RupiahFormat from "@/Helper/RupiahFormat";
import toast, { Toaster } from 'react-hot-toast';
import dayjs from 'dayjs';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from '@inertiajs/inertia-react';
import Success from '@/Components/Badges/Success';
import Pending from '@/Components/Badges/Pending';
import Failed from '@/Components/Badges/Failed';

export default function Dashboard({ auth, flash, data }) {
  const [selected, setSelected] = useState('all')
  const [dateTotal, setDateTotal] = useState(dayjs().format('YYYY-MM'));
  const [dateReport, setDateReport] = useState();
  const [formattedDate, setFormattedDate] = useState(dayjs().format('MMM YYYY'));

  const handleDetailTransaction = (id) => {
    Inertia.get(`/detail-transaction/${id}`)
  }

  useEffect(() => {
    Inertia.put('/dashboard', {
      date_total: dateTotal,
      date_report: dateReport,
      status_transaction: selected
    })
  }, [dateTotal, dateReport, selected])

  return (
    <Layout auth={auth}>
      <div className='px-5 flex flex-col text-gray-600'>
        <div className='mb-5 flex flex-col items-end'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                slotProps={{ textField: { size: 'small' } }}
                sx={{
                  width: '100%',
                }}
                inputProps={{
                  style: { outline: 'none' },
                }}
                views={['month', 'year']}
                format="MM-YYYY"
                disableFuture
                onChange={(newValue) => {
                  const formattedDate = dayjs(newValue).format('YYYY-MM');
                  setFormattedDate(dayjs(newValue).format('MMM YYYY'));
                  setDateTotal(formattedDate);
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className='flex gap-5 w-full justify-center'>
          <div className='px-4 py-3 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><IoIosHome size={24} /></div>
            <div className='font-bold text-xl'>{RupiahFormat(data.total_pendapatan)}</div>
            <div>Total pendapatan / {formattedDate}</div>
          </div>
          <div className='px-4 py-3 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><FaStore size={24} /></div>
            <div className='font-bold text-xl'>{data.total_produk}</div>
            <div>Total produk</div>
          </div>
          <div className='px-4 py-2 shadow-md border rounded-md w-4/12 gap-3 flex flex-col text-sm'>
            <div><IoIosWallet size={24} /></div>
            <div className='font-bold text-xl'>{data.total_order}</div>
            <div>Total Order / {formattedDate}</div>
          </div>
        </div>
        <div className='p-5 flex flex-col text-gray-600 border shadow-md rounded-md mt-5'>
          <div className='flex w-full justify-between'>
            <div className='font-bold w-6/12 text-xl'>Laporan penjualan</div>
          </div>
          <div className='flex gap-5 mt-5'>
            {/* <div className='flex flex-col w-6/12'>
              <label htmlFor="invoice_number" className='font-bold'>Search invoice number</label>
              <input type="text" id='invoice_number' className='border-slate-300 mt-2 rounded-md focus:border-primary focus:ring-primary' placeholder='Input invoice number' />
            </div> */}
            <div className='flex flex-col w-6/12'>
              <label htmlFor="" className='font-bold'>Bulan</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    slotProps={{ textField: { size: 'small' } }}
                    sx={{
                      width: '50%',
                    }}
                    inputProps={{
                      style: { outline: 'none' },
                    }}
                    views={['month', 'year']}
                    format="MM-YYYY"
                    disableFuture
                    onChange={(newValue) => {
                      const formattedDate = dayjs(newValue).format('YYYY-MM');
                      setDateReport(formattedDate);
                    }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className='mt-5 flex gap-5 items-center'>
            <div className='font-bold'>Status</div>
            <div className='flex gap-5'>
              <RadioGroup value={selected} onChange={setSelected}>
                <div className='flex gap-5'>
                  <div>
                    <RadioGroup.Option value="all">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-secondary border-primary' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>All</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="success">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-secondary border-primary' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Success</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="pending">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-secondary border-primary' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Pending</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                  <div>
                    <RadioGroup.Option value="failed">
                      {({ checked }) => (
                        <span className={`${checked ? 'bg-secondary border-primary' : ''} hover:cursor-pointer px-4 py-2 border-2 rounded-md `}>Failed</span>
                      )}
                    </RadioGroup.Option>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className='mt-5'>
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
              {data.transactions.data.map((item) => {
                return (
                  <tbody className="divide-y divide-gray-100 text-left" key={item.id}>
                    <tr className="hover:cursor-pointer hover:bg-gray-100" onClick={() => { handleDetailTransaction(item.id) }}>
                      <td className="py-3">#{item.id}</td>
                      <td className="py-3">
                        {item.status_transaction === 'success' ? (
                          <Success message={'success'} />
                        ) : item.status_transaction === 'pending' ? (
                          <Pending message={'pending'} />
                        ) : item.status_transaction === 'failed' ? (
                          <Failed message={'failed'}/>
                        ) : null}
                      </td>
                      <td className="py-3">{RupiahFormat(item.amount)}</td>
                      <td className="py-3">{item.type_payment}</td>
                      <td className="py-3">{item.date_transaction}</td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
            <div className='flex justify-end gap-5 items-center mt-5'>
              <div>{data.transactions.from}-{data.transactions.to} of {data.transactions.total}</div>
              <a href={data.transactions.prev_page_url} className={`${data.transactions.prev_page_url ? '' : 'bg-gray-400'}bg-gray-200 p-2 rounded-md`}>{<GrFormPrevious />}</a>
              <a href={data.transactions.next_page_url} className={`${data.transactions.next_page_url ? '' : 'bg-gray-400'}bg-gray-200 p-2 rounded-md`}>{<GrFormNext />}</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
