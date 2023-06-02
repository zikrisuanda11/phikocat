import React, { useRef, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Layout from "@/Layouts/Default";
import Buttons from "@/Components/Buttons/Index";
import Breadcrumb from '@/Components/Breadcrumb/Index'
import Modal from "@/Components/Modal/Detail";

export default function ProductPet({ transactions, detail_transaction }) {
  console.log(detail_transaction);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnClose = () => {
    setIsOpenModal(false)
  }

  const openModal = () => {
    setIsOpenModal(true)
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
    { field: 'no', headerName: 'No', width: 120, headerAlign: 'center', align: 'center' },
    { field: 'name_user', headerName: 'Nama Customer', width: 150 },
    { field: 'date_transaction', headerName: 'Tanggal Transaksi', width: 200 },
    { field: 'amount', headerName: 'Harga', width: 120 },
    { field: 'type_transaction_name', headerName: 'Type Transaksi', width: 100 },
    { field: 'type_payment', headerName: 'Type Pembayaran', width: 200 },
    { field: 'status_transaction', headerName: 'Status Transaksi', width: 200 },
    { field: 'evidence_of_transfer', headerName: 'Bukti Transaksi', width: 200 },
    {
      field: 'id',
      sortable: false,
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <div className="">
              <Buttons
                variant={'contained'}
                size={'medium'}
                title={'View'}
                backgroundColor={'#C7E7E1'}
                textColor={'#124C5F'}
                href={`/histories/${params.id}/detail`}
                disableElevation
              />
            </div>
          </>
        )
      }
    }
  ]

  return (
    <>
      <Layout>
        <Modal
          icon={""}
          title={"Detail"}
          message="Detail"
          isOpen={isOpenModal}
          onClose={handleOnClose}
          detailTransaction={detail_transaction}
        />
        <div className="container m-5">
          <div className="flex-col mr-8">
            <div className="flex justify-between">
              <div className="flex-col">
                <h1 className="text-lg font-semibold text-gray-900">History</h1>
                <Breadcrumb
                  breadcrumbs={[
                    { name: 'History', href: '/histories', color: 'inherit', key: '1' },
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
