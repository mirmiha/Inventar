import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";

import {useAddNewSupplierMutation} from "./supplierSlice";
import {Input} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import SupplierSchema from "./SupplierSchema";
import {Message} from "../../app/index";
import {DraftSupplier} from "../api";


export const AddSupplierForm = () => {
    const [message, setMessage] = useState<Message | null>(null);
    const [addNewSupplier] = useAddNewSupplierMutation();
    const history = useHistory();
    const initialValues: DraftSupplier = { name: "", phone: "", email: "" }

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])

    const form = (
        <Formik
            initialValues={initialValues}
            validationSchema={SupplierSchema}
            onSubmit={async (values, actions) => {
                if (values.email === "") { delete values.email; }
                try {
                    const {supplier, error, invalidData} = await addNewSupplier(values).unwrap();
                    actions.setSubmitting(false);
                    if (supplier) {
                        const message = { type: "success", message: "Zaposlen uspesno dodan" }
                        history.push({
                            pathname: "/suppliers",
                            state: { message }
                        });
                    }
                    if (error) { setMessage({ type: "danger", message: error }) }
                    if (invalidData) {
                        actions.setErrors(invalidData);
                        setMessage({ type: "danger", message: "Popravi napake" });
                    }
                } catch (error) {
                    setMessage({ type: "danger", message: "an actual message" });
                }
            }}
        >
            {props => (
                <>
                    <form onSubmit={props.handleSubmit}>
                        <Input name="name" label="Ime" type="text" placeholder="Vnos ime zaposlenega" required={true} />
                        <Input name="phone" label="Telefonska stevilka" type="text" placeholder="Vnos telefonske stevilke" required={true} />
                        <Input name="email" label="Email" type="email" placeholder="Vnos emaila" />
                        <button
                            type="submit"
                            className="btn btn-primary rounded-0 me-2 mt-3"
                            disabled={props.isSubmitting}
                        >
                            {props.isSubmitting ? <ButtonSpinner text="Adding" /> : "Dodaj"}
                        </button>
                    </form>
                </>
            )}
        </Formik>
    );

    return ( <FormCard title="Dodaj zaposlenega" message={message} setMessage={setMessage} cardBody={form} /> )
}
