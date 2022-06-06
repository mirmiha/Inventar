import { validationResult } from "express-validator";
export function validate(req, res, next) {
    try {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            next();
        }
        else {
            const errs = errors.array();
            const invalidData = {};
            for (const err of errs) {
                if (err.nestedErrors) {
                    const errors = [];
                    for (const nestedErr of err.nestedErrors) {
                        // @ts-ignore
                        invalidData[nestedErr.param] = nestedErr.msg;
                        errors.push({ ...invalidData });
                    }
                }
                else {
                    invalidData[err.param] = err.msg;
                }
            }
            return res.status(400).json({
                invalidData
            });
        }
    }
    catch (errors) {
        console.log("\n\nErrors in validation middleware = ", errors, "\n\n");
    }
}
