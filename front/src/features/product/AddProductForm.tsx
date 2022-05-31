import {useEffect, useState, useMemo} from "react";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";

import {useAddNewProductMutation} from "./productSlice";
import {useGetCategoriesQuery} from "../category/categorySlice";
import {Input, Select, TextArea} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import {ProductSchema} from "./ProductSchema";
import {Message} from "../../app/index";
import {Category, DraftProduct, Supplier} from "../api";
import { useGetSuppliersQuery } from "../supplier/supplierSlice";


export const AddProductForm = () => {
    const [message, setMessage] = useState<Message | null>(null);
    const [addNewProduct] = useAddNewProductMutation();
    const result = useGetCategoriesQuery("?limit=all");
    const result2 = useGetSuppliersQuery("?limit=all");
    const history = useHistory();
    const initialValues: DraftProduct = {
        name: "", serijskaStevilka: "", stevilkaInventarja: "", datum: "", model: "", description: "", categoryId: "", supplierId:""
    }
    const categories = useMemo(() => {
        if (result.isSuccess && result.data.categories) {
            return result.data.categories.map( (category: Category) => ({ value: category.id, label: category.name }))
        }
        return [{ value: "", label: "Brez zadetkov" }]
    }, [result.isSuccess, result.data?.categories])

    
  

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])

  
    const zaposleni = useMemo(() => {
        if (result2.isSuccess && result2.data.suppliers){
            return result2.data.suppliers.map( (supplier: Supplier) => ({ value: supplier.id, label: supplier.name}))
        }
        return [{value: "", label:"Brez zadtekov"}]
    }, [result2.isSuccess, result2.data?.suppliers])

    const form = (
        <Formik
            initialValues={initialValues}
            validationSchema={ProductSchema}
            onSubmit={async (values, actions) => {
                if (values.description === "") { delete values.description; }
                try {
                    const {product, error, invalidData} = await addNewProduct(values).unwrap();
                    actions.setSubmitting(false);
                    if (product) {
                        const message = { type: "success", message: "Produkt je uspesno ustvarjen" }
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
                    <form onSubmit={props.handleSubmit}>
                        <Input name="name" label="Ime produkta" type="text" placeholder="Vnesi ime produkta" required={true} />
                        <Input name="serijskaStevilka" label="Serijska stevilka" type="text" placeholder="Vnesi serijsko stevilko" required={true} />
                        <Input name="stevilkaInventarja" label="Stevilka inventarja" type="text" placeholder="Vnesi stanje" required={true} />
                        <Input name="datum" label="Datum" type="date" min="1900-01-01" max="2100-01-01" placeholder="Enter number of items in store" required={true} />
                        <Input name="model" label="Naziv modela" type="text" placeholder="Vnesi naziv modela" required={true} />
                        <Select name="categoryId" label="Izberi kategorijo" options={categories} required={true}>
                            <option value="">Izberi kategorijo</option>
                        </Select>
                        <Select name="supplierId" label="Izberi zaposlenega" options={zaposleni} required={true}><option>Izberi zaposlenega</option></Select>
                        <TextArea name="description" label="Opis" placeholder="Dodaten opis" />

                        <button
                            type="submit"
                            className="btn btn-primary rounded-0 me-2 mt-3"
                            disabled={props.isSubmitting}
                        >
                            {props.isSubmitting ? <ButtonSpinner text="Adding" /> : "Ustvari"}
                        </button>
                    </form>
                </>
            )}
        </Formik>
    );

    return ( <FormCard title="Dodaj produkta" message={message} setMessage={setMessage} cardBody={form} /> )
}
