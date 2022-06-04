import * as Yup from "yup";

export const ProductSchema = Yup.object().shape({
    name: Yup.string()
        .typeError("Ime produkta je obvezno")
        .required("Ime produkta je obvezno")
        .min(2, "Ime produkta mora vsebovati vsaj 2 crki")
        .max(50, "Ime produkta ne sme vsebovati vec kot 50 crk"),

    serijskaStevilka: Yup.string()
        .typeError("Unit cost must be a number")
        .required("Unit cost is required")
        .matches(/^[A-Za-z0-9]+$/, "Serijska številka ne sme vsebovati znakov, ki niso številke ali črke"),
        
    stevilkaInventarja: Yup.string()
    .typeError("Unit cost must be a number")
    .required("Unit cost is required")
    .matches(/^[A-Za-z0-9]+$/, "Serijska številka ne sme vsebovati znakov, ki niso številke ali črke"),

    datum: Yup.date(),
        

    model: Yup.string()
    .typeError("Unit cost must be a number")
    .required("Unit cost is required")
    .matches(/^[A-Za-z0-9]+$/, "Serijska številka ne sme vsebovati znakov, ki niso številke ali črke"),

    description: Yup.string()
        .min(5, "Description should be at least 5 characters long")
        .max(255, "Description should not exceed 255 characters")

   /* stanje: Yup.enum()
    .typeError("Unit cost must be a number")
    .required("Unit cost is required")
    .matches(/^[A-Za-z0-9]+$/, "Serijska številka ne sme vsebovati znakov, ki niso številke ali črke")*/
});
