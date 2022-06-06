import * as Yup from "yup";

export const CategorySchema = Yup.object().shape({
    name: Yup.string()
        .typeError("Ime produkta je obvezen")
        .required("Ime produkta je obvezen")
        .min(2, "Ime produkta mora vsebovati vsaj 2 znaka")
        .max(50, "Maksimalno 50 znakov za ime produkta")
        .matches(/^[aA-zZ\s]+$/, "Ime produkta zapisi le s crkami"),

    description: Yup.string()
        .min(5, "Vpis mora vsebovati vsaj 5 znakov")
        .max(255, "Vpis lahko vsebuje najvec 255 znakov")
});
