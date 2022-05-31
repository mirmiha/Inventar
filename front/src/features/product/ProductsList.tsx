import React, {useMemo, useEffect, useCallback, useState} from "react";

import {useGetProductsQuery, useDestroyProductMutation} from "./productSlice";
import DataTable from "../../app/table/DataTable";
import {Input} from "../../app/form/fields";
import {Message} from "../../app/index";
import {Category, Supplier} from "../api";


const ProductsSearchForm = () => (
    <Input name="name" label="Name" type="search" placeholder="Vnesi ime produkta" inline={true} validation={false} />
);

export const ProductsList = React.memo(() => {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState<Message | null>(null);
    const result = useGetProductsQuery(query);
    const [destroyProduct] = useDestroyProductMutation();
    const cols = useMemo(() => [
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
            accessor:"supplier",
            link:"/supplier/:supplierId",
            callback: (supplier: Supplier | undefined) => supplier?.name,
        },
    ], []);

    useEffect(() => {
        if (result.data?.error) {
            setMessage({ type: "danger", message: result.data.error })
        }
    }, [result.data?.error]);

    const handleQuery = useCallback((query: string) => {
        if (query.length) { setQuery(query) }
    }, []);


    const destroyChecked = useCallback(async (checked: string[]) => {
        if (checked.length) {
            try {
                const {message, error, invalidData} = await destroyProduct(checked.join()).unwrap();
                if (message) { setMessage({ type: "success", message }) }
                if (error) { setMessage({ type: "danger", message: error }) }
                if (invalidData) { setMessage({ type: "danger", message: invalidData.id }) }
            } catch (error) {
                setMessage({ type: "danger", message: "an actuall message" });
            }
        }
    }, [destroyProduct]);

    return (
        <DataTable
            cols={cols}
            data={result.isSuccess && result.data.products ? result.data.products : null}
            pagination={result.isSuccess && result.data.pagination ? result.data.pagination : { count: 0 }}
            title="Produkti"
            message={message}
            setMessage={setMessage}
            createItemLink="/products/create"
            handleQuery={handleQuery}
            destroyChecked={destroyChecked}
            searchFormInitialValues={{ name: "" }}
            SearchFormInputs={ProductsSearchForm}
        />
    );
});