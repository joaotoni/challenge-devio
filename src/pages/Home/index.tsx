import Modal from "../../components/Modal";
import {categoriesObject} from "./categoriesObject"
import { ProductObject } from "./productsObjects"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalContext } from "../../contexts/Modal/ModalContext";

export default function Home(){
    // const [showModal, setShowModal] = useState(false);
    const{
        showModal,
        setShowModal,
    } = useContext(ModalContext)
    return(
        <main className=" ">
            <div className="flex flex-col items-start md:mb-4 md:items-start md:ml-16" >
                <span className="pb-2 pt-8 text-2xl font-bold">Seja bem vindo!</span>
                <input 
                    className="bg-gray-200 p-2 w-3/4 rounded-md md:w-1/5"
                    type="text"
                    placeholder="O que você procura?"/>
            </div>
            <div className="flex  flex-col  items-start ml-8 md:items-start md:mt-14 md:ml-16" >
                    <h2 className="font-bold text-lg text-left">Categorias</h2>
                    <span className="font-normal">Navegue por categoria</span>
            </div>
            <div className="flex items-center overflow-x-auto scroll-smooth mt-6 md:justify-around overflow-hidden">   
                {categoriesObject.map((element, index) =>(
                    <div className=" flex  px-6 shadow-md flex-col p-6 mr-10 " key={element.title + index}>
                        <button>
                            <img className="max-w-none " src={element.img} alt={element.title}  />
                            <h2 className="font-bold text-lg">{element.title}</h2>
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex  flex-col  items-start ml-8 mt-8 md:items-start md:mt-14 md:ml-16">
                <h2 className="font-bold text-lg text-left">Produtos</h2>
                <span className="font-normal">Selecione um produto para adicionar ao seu pedido</span>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap md:m-0 md:justify-center ">
                {ProductObject.map((element, index) => (
                    <div className=" m-auto mb-8 p-6 md:m-0  " key={element.title + index}>
                        <button 
                        className="bg-gray-100 rounded-xl shadow-md"
                        onClick={() => setShowModal(!showModal)}
                        >
                            <img className="max-w-none m-0 " src={element.img} alt={element.title} width="287"  />
                            <h2 className="font-bold text-lg">{element.title}</h2>
                            <span>{element.text}</span>
                            <p className="font-bold text-lg mt-4 mb-4">{element.value}</p>
                        </button>
                                    
                    </div>
                ))}
            </div>     
            {showModal ? (
                <>  

                 <Modal />
                </>
              ) : null}
            <div className="flex justify-center gap-6">
                <button className="text-xl rounded-xl border border-solid p-4 border-[#125c12] text-[#125c12]">Cancelar</button>
                <Link className="text-xl rounded-xl bg-[#125c12] p-4 text-white" to={"/payment"}>
                    Finalizar pedido
                </Link>
            </div>
        </main>
    )
}
