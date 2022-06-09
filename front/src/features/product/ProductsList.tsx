import React, { useMemo, useEffect, useCallback, useState } from "react";
import { useGetProductsQuery, useDestroyProductMutation } from "./productSlice";
import DataTable from "../../app/table/DataTable";
import { Input } from "../../app/form/fields";
import { Message } from "../../app/index";
import { Category, Product, Supplier } from "../api";
import ProductQRCode from "./ProductQRCode";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import asseti from "./asseti.json";


const ProductsSearchForm = () => (
  <Input
    name="supplier"
    label="Name"
    type="search"
    placeholder="Vnesi ime zaposlenega"
    inline={true}
    validation={false}
  />
);



export const ProductsList = React.memo(() => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState<Message | null>(null);
  const [showQR, setShowQR] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(
    null as Product | null
  );
  const result = useGetProductsQuery(query);
  const [destroyProduct] = useDestroyProductMutation();
  const cols = useMemo(
    () => [
      { name: "Ime", accessor: "name", link: "/products/:id" },
      { name: "Serijska stevilka", accessor: "serijskaStevilka" },
      { name: "Stevilka inventarja", accessor: "stevilkaInventarja" },
      { name: "Datum", accessor: "datum" },
      { name: "Naziv modela", accessor: "model" },
      {
        name: "Kategorija",
        accessor: "category",
        link: "/category/:categoryId",
        callback: (category: Category | undefined) => category?.name,
      },
      {
        name: "Zaposlen",
        accessor: "supplier",
        link: "/supplier/:supplierId",
        callback: (supplier: Supplier | undefined) => supplier?.name,
      },
      {
        name: "QR",
        callback: (product: Product | undefined) => (
          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#qr-modal"
            onClick={() => {
              console.log(product);
              if (product) {
                setSelectedProduct(product);
                setShowQR(true);
              }
            }}
          >
            QR
          </button>
        ),
      },
    ],
    []
  );
  const _export = React.useRef<ExcelExport | null>(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }}
  useEffect(() => {
    if (result.data?.error) {
      setMessage({ type: "danger", message: result.data.error });
    }
  }, [result.data?.error]);

  const handleQuery = useCallback((query: string) => {
    if (query.length) {
      console.log(query);
      setQuery(query);
    }
  }, []);

  const destroyChecked = useCallback(
    async (checked: string[]) => {
      if (checked.length) {
        try {
          const { message, error, invalidData } = await destroyProduct(
            checked.join()
          ).unwrap();
          if (message) {
            setMessage({ type: "success", message });
          }
          if (error) {
            setMessage({ type: "danger", message: error });
          }
          if (invalidData) {
            setMessage({ type: "danger", message: invalidData.id });
          }
        } catch (error) {
          setMessage({ type: "danger", message: "an actuall message" });
        }
      }
    },
    [destroyProduct]
  );

  

  

  return (
    <>
      <ExcelExport data={asseti} ref={_export}>
      <DataTable
        cols={cols}
        data={
          result.isSuccess && result.data.products ? result.data.products : null
        }
        pagination={
          result.isSuccess && result.data.pagination
            ? result.data.pagination
            : { count: 0 }
        }
        title="Produkti"
        message={message}
        setMessage={setMessage}
        createItemLink="/products/create"
        handleQuery={handleQuery}
        destroyChecked={destroyChecked}
        searchFormInitialValues={{ supplier: "" }}
        SearchFormInputs={ProductsSearchForm}
      />
      <button title="Export Excel"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={excelExport}>  Export to Excel</button></ExcelExport> 
      <ProductQRCode product={selectedProduct} />
      
      
    </>
  );
});
