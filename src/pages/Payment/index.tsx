import Payments from "../../assets/Icons/payment.png"
import {cards} from "./cardsObjects"
import { Link } from "react-router-dom";

export default function Payment(){
    return(        
        <section className="flex flex-wrap mt-8 ml-6 md:flex md:justify-center md:mt-28">
            <div className="md:mr-56">
                <div className="flex mb-6 ">
                    <img src={Payments} alt="" />
                    <h1 className="font-bold text-xl ml-8">Pagamento</h1>
                </div>
                <span className="font-bold ">Resumo da compra</span>
                <div className="border border-solid border-gray-400 w-72 mt-2 mb-4">
                    <div className="flex justify-around mt-4">
                        <span>1x Smash da casa</span>
                        <span>R$ 30,50</span>
                    </div>
                    <div className="flex justify-around ml-1 mt-6 mb-4">
                        <span>Total do pedido:</span>
                        <span className="font-bold text-xl">R$ 30,50</span>
                    </div>
                </div>
                <div className="flex ">
                    <div className="md:mr-4 md:flex md:flex-col">
                        <span className="font-bold ">Nome do cliente</span>
                        <input className="rounded-lg border border-solid p-2 bg-gray-100 w-60 mt-2" type="text" placeholder="Primeiro nome" />
                    </div>
                    <div className="flex flex-wrap md:flex-col md:justify-center ">
                        <span className="font-bold ">Código</span>
                        <span className="rounded-lg border border-solid p-2 bg-gray-100 md:mt-2 ">200</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 mb-2">
                <span className="font-bold ">Selecione a forma de pagamento</span>
                {cards.map((element, index) =>(
                    <div className="flex justify-around rounded-lg border border-solid border-gray-400 p-1 w-60 md:mb-4 md:mt-4"  key={element.title + index}>
                        <div className="flex items-center">
                            <img src={element.img} alt={element.title}  />
                            <h2 className="">{element.title}</h2>
                        </div>
                        <div className="mt-1 flex items-">
                            <input type="checkbox" />
                        </div>
                    </div>
                ))}
                <div className="flex justify-between ">
                    <div className="mt-6 mr-6">
                        <div>
                            <span className="font-bold">Valor Entregue</span>
                        </div>
                        <div className="rounded-lg border border-solid p-2 bg-gray-100 w-32">
                            <span>R$ 30,50</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div>
                            <span className="font-bold">Troco</span>
                        </div>
                        <div className="rounded-lg border border-solid p-2 bg-gray-100 w-32">
                            <span>R$ 0</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="mr-4 text-xl rounded-xl border border-solid p-4 border-[#125c12] text-[#125c12]">Cancelar</button>
                    <Link className="text-xl rounded-xl bg-[#125c12] p-4 text-white" to={"/"}>
                        Finalizar pedido
                    </Link>
                </div>
            </div>
        </section>
    )
}