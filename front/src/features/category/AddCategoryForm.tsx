import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Formik} from "formik";

import {useAddNewCategoryMutation} from "./categorySlice";
import {Input, TextArea} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import {CategorySchema} from "./CategorySchema";
import {Message} from "../../app/index";
import {DraftCategory} from "../api";


export const AddCategoryForm = () => {
    const [message, setMessage] = useState<Message | null>(null);
    const [addNewCategory] = useAddNewCategoryMutation()
    const history = useHistory();
    const initialValues: DraftCategory = { name: "", description: "" }

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])

    const form = (
        <Formik
            initialValues={initialValues}
            validationSchema={CategorySchema}
            onSubmit={async (values, actions) => {
                if (values.description === "") { delete values.description; }
                try {
                    const {category, error, invalidData} = await addNewCategory(values).unwrap();
                    actions.setSubmitting(false);
                    if (category) {
                        const message = { type: "success", message: "Kategorija je uspesno kreirana" }
                        history.push({
                            pathname: "/categories",
                            state: { message }
                        });
                    }
                    if (error) { setMessage({ type: "danger", message: error }) }
                    if (invalidData) {
                        actions.setErrors(invalidData);
                        setMessage({ type: "danger", message: "Popravi napake" });
                    }
                } catch (error) {
                    setMessage({ type: "danger", message: "jbg" });
                }
            }}
        >
            {props => (
                <>
                    <form onSubmit={props.handleSubmit}>
                        <Input name="name" label="Ime" type="text" placeholder="Vnesi ime kategorije" required={true} />
                        <TextArea name="description" label="Description" />

                        <button
                            type="submit"
                            className="btn btn-primary rounded-0 me-2 mt-3"
                            disabled={props.isSubmitting}
                        >
                            {props.isSubmitting ? <ButtonSpinner text="Dodaj" /> : "Dodaj"}
                        </button>
                    </form>
                </>
            )}
        </Formik>
    );

    return ( <FormCard title="Dodaj kategorijo" message={message} setMessage={setMessage} cardBody={form} /> )
}