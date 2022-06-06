export default function itemExists(response, id) {
    if (response && id) {
        // @ts-ignore
        return response.dataValues.id !== id;
    }
    return response !== null;
}
