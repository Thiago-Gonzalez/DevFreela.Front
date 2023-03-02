import * as yup from "yup";

export const validateForm = yup.object().shape({
    email: yup.string().email("E-mail inválido!").required("E-mail é obrigatório!"),
    password: yup.string().required("Senha é obrigatório!")
})