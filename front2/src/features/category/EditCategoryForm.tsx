import {useEffect, useCallback, useState, useMemo} from "react";
import {useHistory, RouteComponentProps} from "react-router-dom";
import {Formik} from "formik";

import {useGetCategoryQuery, useEditCategoryMutation, useDestroyCategoryMutation} from "./categorySlice";
import {Input, TextArea} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import Modal from "../../app/modal/Modal";
import Spinner from "../../app/spinners/Spinner";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import {CategorySchema} from "./CategorySchema";
import {Message} from "../../app/index";


type TParams = { categoryId: string; };

export const EditCategoryForm = ({ match }: RouteComponentProps<TParams>) => {
    const { categoryId } = match.params;
    const [message, setMessage] = useState<Message | null>(null);
    const result = useGetCategoryQuery(categoryId);
    const [updateCategory] = useEditCategoryMutation();
    const [destroyCategory] = useDestroyCategoryMutation();
    const initialValues = useMemo(() => {
        if (result.isSuccess && result.data.category) {
            const category = {...result.data.category};
            if (category.description === null) { category.description = "" }
            return category
        }
        else { return { name: "", description: "" } }
    }, [result.isSuccess, result.data?.category])
    const history = useHistory();

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])

    const handleDestroy = useCallback(async () => {
        if (categoryId.length) {
            try {
                const {message, error, invalidData} = await destroyCategory(categoryId).unwrap();
                if (message) {
                    history.push({
                        pathname: "/categories",
                        state: { message: { type: "info", message } }
                    });
                }
                if (error) { setMessage({ type: "danger", message: error }) }
                if (invalidData) { setMessage({ type: "danger", message: invalidData.id }) }
            } catch (error) {
                setMessage({ type: "danger", message: "an actuall message" });
            }
        }
    }, [categoryId, history, destroyCategory]);

    const form = (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={CategorySchema}
            onSubmit={async (values, actions) => {
                if (values.description === "") { delete values.description; }
                try {
                    const {category, error, invalidData} = await updateCategory(values).unwrap();
                    actions.setSubmitting(false);
                    if (category) {
                        const message = { type: "success", message: "Kategorija uspesno preimenovana" }
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
                    setMessage({ type: "danger", message: "an actuall message" });
                }
            }}
        >
            {props => (
                <>
                    {result.isFetching ? <Spinner/> : (
                        <form onSubmit={props.handleSubmit}>
                            <Input name="name" label="Ime" type="text" placeholder=" Vnesi ime kategorije" required={true} />
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
                                data-bs-target="#deleteCategory"
                            >
                                Brisi
                            </button>
                        </form>
                    )}
                </>
            )}
        </Formik>
    );

    return (
        <>
            <FormCard title="Uredi kategorijo" message={message} setMessage={setMessage} cardBody={form} />

            <Modal
                id="deleteCategory"
                label="deleteCategoryLabel"
                title="Izbrisi kategorijo"
                body="Ali si preprican, da zelis izbrisati to kategorijo?"
                handleAction={handleDestroy}
            />
        </>
    )
}
