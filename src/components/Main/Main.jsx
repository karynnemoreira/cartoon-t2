import React, { useState } from "react"
import Scooby from "./ImagensMain/scooby.png"
import Ben10 from "./ImagensMain/ben10.png"
import Looney from "./ImagensMain/looney.png"

//a segunda section utilizaremos o map, map é um método que mapeia (percorre) arrays
import Gumball from "./ImagensMain/gumball.png"
import Meninas from "./ImagensMain/meninas.png"
import TomJerry from "./ImagensMain/tomejerry.png"
//----------------------------------------------------------

import * as S from "./EstilodaDaMain.jsx"
import Programacao from "../Programacao/Programacao"

function Main() {

    //sintaxe useState
    //const [estado, setEstado] = useState()


    const [galeria, setGaleria] = useState([
        Gumball,
        Meninas,
        TomJerry
    ])

    return (
        <main>
            <S.PrimeiraSection>
                <img src={Scooby} alt="" />
                <img src={Ben10} alt="" />
                <img src={Looney} alt="" />
            </S.PrimeiraSection>


            <S.SegundaSection>
                {galeria.map((item) => (
                    <img src={item} alt="" />
                ))}

            </S.SegundaSection>

            <Programacao />
        </main>
    )
}

export default Main