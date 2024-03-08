import React from "react"
import * as S from "./EstiloDaHeader.jsx"

import LogoCartoon from "./ImagensHeader/logo.png"
import Jogos from "./ImagensHeader/jogos.png"
import Programacao from "./ImagensHeader/programacao.png"

function Header() {

    return (
        <S.HeaderStyle>
            <S.Img src={LogoCartoon} alt="" />

            <S.Section>
                <S.Div>
                    <S.Img src={Jogos} alt="" />
                    <h2>JOGOS</h2>
                </S.Div>

                <S.Div>
                    <img src={Programacao} alt="" />
                    <h2>PROGRAMAÇÃO</h2>
                </S.Div>
            </S.Section>

        </S.HeaderStyle>
    )
}


export default Header