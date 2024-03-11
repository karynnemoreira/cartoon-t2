import React, { useState } from "react"
import Scooby from "../Main/ImagensMain/scooby.png"
import Meninas from "../Main/ImagensMain/meninas.png"
import Tomejerry from "../Main/ImagensMain/tomejerry.png"
import Ben10 from "../Main/ImagensMain/ben10.png"
import Gumball from "../Main/ImagensMain/gumball.png"
import * as S from "./EstiloProgramacao.jsx"

export default function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { nome: "Scooby Doo", hora: "6:00h", imagem: Scooby },
        { nome: "Meninas super poderosas", hora: "7:00h", imagem: Meninas },
        { nome: "Tom e Jerry", hora: "8:00h", imagem: Tomejerry }, 
        { nome: "Ben 10", hora: "9:00h", imagem: Ben10 },
        { nome: "Gumball", hora: "10:00h", imagem: Gumball }
    ])

    return (
        <section>
            <h1>PROGRAMAÇÃO DOS DESENHOS</h1>

            {desenhos.map((item) => (
                <S.Card>
                    <h2> {item.nome} </h2>
                    <h3> {item.hora} </h3>
                    <img src={item.imagem} alt={item.nome} />
                </S.Card>

            ))}

        </section>
    )
}