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
    // const [estado, setEstado] = useState([{nome: hora: imagem:},{},{}])

    const [desenhos, setDesenhos] = useState([
        { nome: "O LABORATÓRIO DE DEXTER", hora: "7:00h", imagem: Dexter, desenhoManha: true },
        { nome: "A VACA E O FRANGO", hora: "8:00h", imagem: VacaFrango, desenhoManha: true },
        { nome: "DU, DUDU E EDU", hora: "9:00h", imagem: Du, desenhoManha: true },
        { nome: "CORAGEM, O CÃO COVARDE", hora: "10:00h", imagem: Coragem, desenhoManha: true },
        { nome: "IRMÃO DO JOREL", hora: "11:00h ", imagem: Jorel, desenhoManha: true },
        { nome: "TURMA DA MÔNICA JOVEM", hora: "12:00h", imagem: Turma, desenhoManha: false },
        { nome: "STEVEN UNIVERSO", hora: "13:00h", imagem: Steven, desenhoManha: false },
        { nome: "BILLY E MANDY", hora: "14:00h", imagem: Billy, desenhoManha: false },
    ])

    //Todos os desenhoManha que forem TRUE, vão ser armazenados em uma nova lista (desenhoAntesMeioDia)
    const desenhoAntesMeioDia = desenhos.filter((item) => item.desenhoManha === true)

    return (
        <section>
            <S.SectionMap>
                {desenhos.map((item) => (
                    <S.Div>
                        <h3> {item.hora} </h3>
                        <h3> {item.nome} </h3>
                        <img src={item.imagem} alt={item.nome} />
                    </S.Div>
                ))}
            </S.SectionMap>


            <S.SectionFilter>

                {desenhoAntesMeioDia.map((item)=>(
                    <S.CardManha>
                        <h3>{item.nome} </h3>
                        <h3>{item.hora}  </h3>
                        <img src={item.imagem} alt={item.nome} />
                    </S.CardManha>
                ))}

            </S.SectionFilter>


        </section>
    )
}

export default Programacao