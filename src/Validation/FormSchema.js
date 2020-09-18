import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required('Must enter a name').min(2, "Name must be at least 2 characters long"),
    size: yup.string().required('Must choose a size').min(2, "Please select a size"),
    sauce: yup.string().required('Must pick a sauce').min(2, "Please select a sauce"),
    specialInstructions: yup.string().max(30, "Instructions should be shorter than 30 characters"),
    quantity: yup.string().min(1, 'Must enter a digit').matches(/^^0*(?:[1-9][0-9]?|100)$/, 'Must be a number between 1-100'),
    glutenFree: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    dicedTomatoes: yup.boolean(),
 })