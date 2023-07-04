import * as yup from "yup"

export const userSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    date: yup.date().default(() => newDate()),
    type: yup.string().required("type is required"),
    hp: yup.string().required("hp is required"),
    atk: yup.string().required("atk is required"),
    def: yup.string().required("def is required"),
    height: yup.string().number().required("height is required"),
    weight: yup.string().number().required("weight is required"),
})