import * as yup from "yup";

export const validateForm = yup.object().shape({
    title: yup.string().required("Título é obrigatório!"),
    value: yup.number()
        .typeError("Este campo deve conter somente valores numéricos!")
        .positive("Este campo deve conter somente valores numéricos positivos!")
        .required("Custo total é obrigatório!"),
    description: yup.string().required("Descrição é obrigatório!")
});