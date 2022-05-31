import {useState, useEffect, useCallback, useMemo} from "react";
import {useHistory, RouteComponentProps} from "react-router-dom";
import {Formik} from "formik";

import {useGetProductQuery, useEditProductMutation, useDestroyProductMutation} from "./productSlice";
import {useGetCategoriesQuery} from "../category/categorySlice";
import {Input, Select, TextArea} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import Modal from "../../app/modal/Modal";
import Spinner from "../../app/spinners/Spinner";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import {ProductSchema} from "./ProductSchema";
import {Message} from "../../app/index";
import {Category,DraftProduct, Supplier} from "../api";
import { useGetSuppliersQuery } from "../supplier/supplierSlice";

type TParams = { productId: string; };




export const EditProductForm = ({ match }: RouteComponentProps<TParams>) => {
    const { productId } = match.params;
    const [message, setMessage] = useState<Message | null>(null);
    const result = useGetProductQuery(productId);
    const [updateProduct] = useEditProductMutation();
    const [destroyProduct] = useDestroyProductMutation();
    const categoriesResult = useGetCategoriesQuery("?limit=all");
    const result2 = useGetSuppliersQuery("?limit=all");
    const categories = useMemo(() => {
        if (categoriesResult.isSuccess && categoriesResult.data.categories) {
            return categoriesResult.data.categories.map( (category: Category) => ({
                value: category.id, label: category.name
            }))
        }
        return [{ value: "", label: "Brez zadetkov" }]
    }, [categoriesResult.isSuccess, categoriesResult.data?.categories])

const zaposleni = useMemo(() => {
    if (result2.isSuccess && result2.data.suppliers){
        return result2.data.suppliers.map( (supplier: Supplier) => ({ value: supplier.id, label: supplier.name}))
    }
    return [{value: "", label:"Brez zadtekov"}]
}, [result2.isSuccess, result2.data?.suppliers])
    const initialValues = useMemo(() => {
        if (result.isSuccess && result.data.product) {
            const product = {...result.data.product};
            if (product.description === null) { product.description = "" }
            return product
        }
        else {
            return {
                name: "", serijskaStevilka: "", stevilkaInventarja: "", datum: "", model: "", description: "", categoryId: ""
            }
        }
    }, [result.isSuccess, result.data?.product])
    const history = useHistory();

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])


    const handleDestroy = useCallback(async () => {
        if (productId.length) {
            try {
                const {message, error, invalidData} = await destroyProduct(productId).unwrap();
                if (message) {
                    history.push({
                        pathname: "/products",
                        state: { message: { type: "success", message } }
                    });
                }
                if (error) { setMessage({ type: "danger", message: error }) }
                if (invalidData) { setMessage({ type: "danger", message: invalidData.id }) }
            } catch (error) {
                setMessage({ type: "danger", message: "an actuall message" });
            }
        }
    }, [productId, history, destroyProduct])

    const form = (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={ProductSchema}
            onSubmit={async (values, actions) => {
                if (values.description === "") { delete values.description; }
                try {
                    const {product, error, invalidData} = await updateProduct(values).unwrap();
                    actions.setSubmitting(false);
                    if (product) {
                        const message = { type: "success", message: "Uspesno posodobljeno" }
                        history.push({
                            pathname: "/products",
                            state: { message }
                        });
                    }
                    if (error) { setMessage({ type: "danger", message: error }) }
                    if (invalidData) {
                        actions.setErrors(invalidData);
                        setMessage({ type: "danger", message: "Popravi napake" });
                    }
                } catch (error) {
                    setMessage({ type: "danger", message: "an actuall message" });
                }
            }}
        >
            {props => (
                <>
                    {result.isFetching ? <Spinner/> : (
                        <form onSubmit={props.handleSubmit}>
                            <Input name="name" label="Ime produkta" type="text" placeholder="Vnesi ime produkta" required={true} />
                            <Input name="serijskaStevilka" label="Serijska stevilka" type="text" placeholder="Enter product unit cost" required={true} />
                            <Input name="stevilkaInventarja" label="Stevilka inventarja" type="text" placeholder="Enter product unit price" required={true} />
                            <Input name="datum" label="Datum" type="text" placeholder="Enter number of items in store" required={true} />
                            <Input name="model" label="Naziv modela" type="text" placeholder="Enter number of items in counter" required={true} />
                            <Select name="categoryId" label="Izberi kategorijo" options={categories} required={true}>
                                <option value="">Select a category</option>
                            </Select>
                            <Select name="supplierId" label="Izberi zaposlenega" options={zaposleni} required={true}><option>Izberi zaposlenega</option></Select>
                            <TextArea name="description" label="Opis" />

                            <button
                                type="submit"
                                className="btn btn-primary rounded-0 me-2 mt-3"
                                disabled={props.isSubmitting}
                            >
                                {props.isSubmitting ? <ButtonSpinner text="Posodabljanje" /> : "Posodobi"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger rounded-0 mt-3"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteProduct"
                            >
                                Delete
                            </button>
                        </form>
                    )}
                </>
            )}
        </Formik>
    );

    return (
        <>
            <FormCard title="Uredi produkta" message={message} setMessage={setMessage} cardBody={form} />

            <Modal
                id="deleteProduct"
                label="deleteProductLabel"
                title="Izbrisi produkta"
                body="Si preprican, da zelis izbrisati produkt"
                handleAction={handleDestroy}
            />
        </>
    )
}
