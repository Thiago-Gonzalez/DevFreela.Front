import React, { lazy } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"
import { Header } from "../../components/Header"


export const AppDefaultLayout = () => {

    return(
        <>
            <Header />
            {/* Inclui as demais rotas dentro do AppDefault */}
            <Outlet />
            {/* Ao recarregar a página, retorna o nível do scroll para o topo */}
            <ScrollRestoration />
        </>
    )
}