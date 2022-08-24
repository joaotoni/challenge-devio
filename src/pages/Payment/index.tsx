import Payments from "../../assets/Icons/payment.png"
import {cards} from "./cardsObjects"

export default function Payment(){
    return(
        <section>
            <div>
                <div>
                    <img src={Payments} alt="" />
                    <h1>Pagamento</h1>
                </div>
                <span>Resumo da compra</span>
                <div>
                    <div>
                        <span>Nome do cliente</span>
                        <input type="text" placeholder="Primeiro nome" />
                    </div>
                    <div>
                        <span>Código</span>
                        <span>200</span>
                    </div>
                </div>
            </div>
            <div>
                <span>Selecione a forma de pagamento</span>
            </div>
            {cards.map((element, index) =>(
                <div  key={element.title + index}>
                    <button>
                        <img className="max-w-none " src={element.img} alt={element.title}  />
                        <h2 className="font-bold text-lg">{element.title}</h2>
                        <input type="checkbox" />
                    </button>
                </div>
            ))}
            <div>
                <span>Valor Entregue</span>
                <span>30,50</span>
            </div>
            <div>
                <span>Troco</span>
                <span>R$ 0</span>
            </div>
        </section>
    )
}