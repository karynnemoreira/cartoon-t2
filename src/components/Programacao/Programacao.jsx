import React, { useState } from "react"
import Dexter from "./ImagensProgramacao/dexter.png"
import VacaFrango from "./ImagensProgramacao/vacaefrango.png"
import Du from "./ImagensProgramacao/du.png"
import Coragem from "./ImagensProgramacao/coragem.png"
import Jorel from "./ImagensProgramacao/jorel.png"
import Turma from "./ImagensProgramacao/turma.png"
import Steven from "./ImagensProgramacao/steven.png"
import Billy from "./ImagensProgramacao/billy.png"
import * as S from "./EstiloProgramacao.jsx"

function Programacao() {

    const [desenhos, setDesenhos] = useState([
        { nome: "O LABORATÓRIO DE DEXTER", hora: "7:00h", imagem: Dexter },
        { nome: "A VACA E O FRANGO", hora: "8:00h", imagem: VacaFrango },
        { nome: "DU, DUDU E EDU", hora: "9:00h", imagem: Du },
        { nome: "CORAGEM, O CÃO COVARDE", hora: "10:00h", imagem: Coragem },
        { nome: "IRMÃO DO JOREL", hora: "11:00h ", imagem: Jorel },
        { nome: "TURMA DA MÔNICA JOVEM", hora: "12:00h", imagem: Turma },
        { nome: "STEVEN UNIVERSO", hora: "13:00h", imagem: Steven },
        { nome: "BILLY E MANDY", hora: "14:00h", imagem: Billy }
    ])

    return (
        <S.Section>
            {desenhos.map((item) => (
                <S.Card>
                    <S.H2> {item.hora} </S.H2>
                    <S.H2> {item.nome} </S.H2>
                    <img src={item.imagem} alt={item.nome} />
                </S.Card>
            ))}

        </S.Section>
    )
}

export default Programacao