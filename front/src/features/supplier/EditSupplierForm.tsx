import {useState, useEffect, useCallback, useMemo} from "react";
import {useHistory, RouteComponentProps} from "react-router-dom";
import {Formik} from "formik";

import {useGetSupplierQuery, useEditSupplierMutation, useDestroySupplierMutation} from "./supplierSlice";
import {Input} from "../../app/form/fields";
import FormCard from "../../app/card/FormCard";
import Modal from "../../app/modal/Modal";
import Spinner from "../../app/spinners/Spinner";
import ButtonSpinner from "../../app/spinners/ButtonSpinner";
import SupplierSchema from "./SupplierSchema";
import {Message} from "../../app/index";


type TParams = { supplierId: string; };


export const EditSupplierForm = ({ match }: RouteComponentProps<TParams>) => {
    const { supplierId } = match.params;
    const [message, setMessage] = useState<Message | null>(null);
    const result = useGetSupplierQuery(supplierId);
    const [updateSupplier] = useEditSupplierMutation();
    const [destroySupplier] = useDestroySupplierMutation();
    const initialValues = useMemo(() => {
        if (result.isSuccess && result.data.supplier) {
            return {...result.data.supplier};
        }
        else {
            return { name: "", phone: "", email: "" }
        }
    }, [result.isSuccess, result.data?.supplier])
    const history = useHistory();

    useEffect(() => {
        if (message?.type && message?.message) {
            window.scrollTo(0, 0);
        }
    }, [message?.type, message?.message])

    const handleDestroy = useCallback(async () => {
        if (supplierId.length) {
            try {
                const {message, error, invalidData} = await destroySupplier(supplierId).unwrap();
                if (message) {
                    history.push({
                        pathname: "/suppliers",
                        state: { message: { type: "success", message } }
                    });
                }
                if (error) { setMessage({ type: "danger", message: error }) }
                if (invalidData) { setMessage({ type: "danger", message: invalidData.id }) }
            } catch (error) {
                setMessage({ type: "danger", message: "an actual message" });
            }
        }
    }, [supplierId, history, destroySupplier])

    const form = (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={SupplierSchema}
            onSubmit={async (values, actions) => {
                if (values.email === "") { delete values.email; }
                try {
                    const {supplier, error, invalidData} = await updateSupplier(values).unwrap();
                    actions.setSubmitting(false);
                    if (supplier) {
                        const message = { type: "success", message: "Uspesno urejeno" }
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
                    {result.isFetching ? <Spinner/> : (
                        <form onSubmit={props.handleSubmit}>
                            <Input name="name" label="Ime" type="text" placeholder="Vnos ime zaposlenega" required={true} />
                            <Input name="phone" label="Telefonska stevilka" type="text" placeholder="Vnos telefonske stevilke" required={true} />
                            <Input name="email" label="Email" type="email" placeholder="Vnos emaila" />

                            <button
                                type="submit"
                                className="btn btn-primary rounded-0 me-2 mt-3"
                                disabled={props.isSubmitting}
                            >
                                {props.isSubmitting ? <ButtonSpinner text="Updating" /> : "Posodobi"}
                            </button>

                            <button
                                type="button"
                                className="btn btn-danger rounded-0 mt-3"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteSupplier"
                            >
                                Izbrisi
                            </button>
                        </form>
                    )}
                </>
            )}
        </Formik>
    );

    return (
        <>
            <FormCard title="Uredi zaposlenega" message={message} setMessage={setMessage} cardBody={form} />

            <Modal
                id="deleteSupplier"
                label="deleteSupplierLabel"
                title="Izbrisi zaposlenega"
                body="Ali si preprican izbrisati zaposlenega?"
                handleAction={handleDestroy}
            />
        </>
    )
}
