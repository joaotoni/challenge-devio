import {kitchenDone, kitchenObject} from "./kitchenObject"
import Check from "../../assets/Icons/check.png"
import X from "../../assets/Icons/x.png"

export default function Kitchen(){
    return(
        <main className="flex flex-wrap ml-8 md:justify-center ">
            <section className="md: mr-32">
                <div className="mt-6 mb-6">
                    <h1 className="font-bold text-xl">Preparando:</h1>
                </div>
                {kitchenObject.map((element, index) =>(
                    <div className="flex shadow-md mb-6 justify-around  rounded-xl  p-2 w-80"  key={element.name + index}>
                        <div className="flex items-center mr-4">
                            <div className="border border-solid rounded-xl mr-4">
                                <img src={element.img} width="100px" alt=""  />
                            </div>
                            <div>
                                <h2 className="font-bold">{element.name}</h2>
                                <span className="text-xs">{element.text}</span>
                            </div>
                        </div>
                        <div className="mt-7 flex items-start">
                            <button className="border border-solid rounded-lg mr-2 p-1 bg-[#dca8a8]">
                                <img src={X} width="15px" alt="" />
                            </button>
                            <button>
                                <img className="border border-solid rounded-lg p-1 bg-[#C4F4BD]" src={Check} width="25px" alt="" />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="mt-6">
                    <h2 className="font-bold mb-6">Observações:</h2>
                    <textarea className="border border-gray-400 border-solid p-4 resize-none w-10/12 ">Retira a cebola</textarea>
                </div>
            </section>
            <section>
                <div>
                    <h1 className="font-bold mb-4 md:mt-6">Pronto:</h1>
                </div>
                {kitchenDone.map((element, index) =>(
                    <div className="flex  mb-6 justify-around rounded-xl border border-green-700 border-solid p-2 w-80"  key={element.name + index}>
                        <div className="flex items-center mr-4">
                            <div className="border border-solid rounded-lg mr-4">
                                <img src={element.img} width="100px" alt=""  />
                            </div>
                            <div>
                                <h2 className="font-bold">{element.name}</h2>
                                <span className="text-xs">{element.text}</span>
                            </div>
                        </div>
                        <div className="mt-7 flex items-start">
                            <button className="border border-solid rounded-lg mr-2 p-1 bg-[#dca8a8]">
                                <img src={X} width="15px" alt="" />
                            </button>
                        </div>
                    </div>
                ))}
            </section> 
        </main>
    )
}