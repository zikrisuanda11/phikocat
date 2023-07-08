import React, { useEffect, useRef, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Layout from "@/Layouts/Default";
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Modal from "@/Components/Modal/Detail";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import toast, { Toaster } from 'react-hot-toast';
import RupiahFormat from "@/Helper/RupiahFormat";

export default function ConfirmPayment({ transactions, flash }) {
  // console.log(transactions);
  console.log(flash);

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message)
    }
    Inertia.post('/clear-flash')
  }, [flash.message])

  const handleConfirm = (id) => {
    Inertia.put('/admin/confirm', {
      id: id
    })
  }

  const rows = transactions.map((transaction, idx) => ({
    id: transaction.id,
    no: idx + 1,
    name_user: transaction.user.name,
    date_transaction: transaction.date_transaction,
    amount: transaction.amount,
    type_transaction_name: transaction.type_transaction.type_transaction_name,
    type_payment: transaction.type_payment,
    status_transaction: transaction.status_transaction,
    evidence_of_transfer: transaction.evidence_of_transfer,
  }))

  const columns = [
    { field: 'no', headerName: 'No', width: 70, headerAlign: 'center', align: 'center' },
    { field: 'name_user', headerName: 'Nama Customer', width: 150 },
    { field: 'date_transaction', headerName: 'Tanggal Transaksi', width: 170 },
    { 
      field: 'amount', 
      headerName: 'Harga', 
      width: 120 ,
      renderCell: (params) => {
        return RupiahFormat(params.row.amount)
      }
    },
    { field: 'type_transaction_name', headerName: 'Type Transaksi', width: 130 },
    { field: 'type_payment', headerName: 'Type Pembayaran', width: 150 },
    { field: 'status_transaction', headerName: 'Status Transaksi', width: 120 },
    {
      field: 'id',
      sortable: false,
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      width: 100,
      renderCell: (params) => {
        // console.log(params);
        return (
          <>
            {params.row.status_transaction == 'pending' &&
              <Buttons
                onClick={() => {handleConfirm(params.row.id)}}
                variant={'contained'}
                size={'medium'}
                title={'Confirm'}
                backgroundColor={'#C7E7E1'}
                textColor={'#124C5F'}
                // href={`/admin/histories/${params.id}/detail`}
                disableElevation
              />
            }
          </>
        )
      }
    }
  ]

  return (
    <>
      <Layout>
        <Toaster
          position="top-right"
        />
        <div className="container m-5">
          <div className="flex-col mr-8">
            <div className="flex justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-semibold text-gray-900">History</h1>
                <Breadcrumb
                  breadcrumbs={[
                    { name: 'History', href: '/admin/histories', color: 'inherit', key: '1' },
                    { name: 'Table', color: 'text.primary', key: '2' },
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 inline-block align-middle w-full">
              <div style={{ height: 480, width: '100%' }} className="relative">
                <DataGrid
                  getRowId={(row) => row.id}
                  rows={rows}
                  columns={columns}
                  initialState={{ pagination: { paginationModel: { pageSize: 25 } } }}
                  slots={{
                    toolbar: GridToolbar,
                  }}
                  slotProps={{
                    toolbar: {
                      showQuickFilter: true,
                      quickFilterProps: { debounceMs: 500 },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
