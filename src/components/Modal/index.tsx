import Smash from "../../assets/Images/smash.png"
import Minus from "../../assets/Icons/minus.png"
import Plus from "../../assets/Icons/plus.png"
import {thirtObject} from "../../Objects/thirtObject"

export default function Modal(){
    return(
        <section>
            <div>
                <h1 className="pb-2 pt-6 text-2xl font-bold ml-6">Revise seu pedido!</h1>  
            </div>
            <div className="flex ml-2 mt-3">
                <div>
                    <img src={Smash} width="232px" alt="" />
                </div>
                <div>
                    <h2 className="font-bold text-lg text-left pb-2">Smash da casa</h2>
                    <span className="text-sm pb-4">2x hambúrguer 200g, queijo cheddar, cebola caramelizada</span>
                    <div className="mt-2" >
                        <button className="">
                            <img src={Minus} width="40px" alt="" />
                        </button>
                        <span>2</span>
                        <button>
                            <img src={Plus}  width="40px" alt="" />
                        </button>
                    </div>
                </div>
                <div>
                    <p className="font-bold text-lg">R$30,50</p>
                </div>
            </div>
            <div className="mb-6 ml-6">
                <h2 className="font-bold text-lg text-left ">Adicionais</h2>
                <span className="text-sm w-2 ">Selecione os ingredientes que você quer adicionar a mais no seu lanche</span>
            </div>
            {thirtObject.map((element, index) =>(
                <div className="flex justify-around" key={element.name + index}>
                    <div>
                        <img src={element.img} alt="" />
                    </div>
                    <div>
                        <span>{element.name}</span>
                        <p>{element.text}</p>
                    </div>
                    <div>
                        <span className="mr-4">R$1,00</span>
                        <input type="checkbox" />
                    </div>
                </div>
            ))}
            <div className="mt-6 ml-6">
                <h2 className="font-bold text-lg text-left mb-2">Observações</h2>
                <input className="rounded-lg border border-solid p-4 bg-gray-100 w-11/12" placeholder="Adicione uma observação ao pedido" type="text" />
            </div>
            <div className="flex justify-center gap-6 mt-6">
                <button className="text-xl rounded-xl border border-solid p-4 border-[#125c12] text-[#125c12]">Cancelar</button>
                <button className="text-xl rounded-xl bg-[#125c12] p-4 text-white">Finalizar pedido</button>
            </div>
        </section>
    )
}