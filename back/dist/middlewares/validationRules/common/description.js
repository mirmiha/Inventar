import { body } from "express-validator";
export const description = body("description")
    .optional({ checkFalsy: true })
    .trim().escape().isLength({ min: 5, max: 255 })
    .withMessage("Opis mora imeti od 5 do 255 znakov");
