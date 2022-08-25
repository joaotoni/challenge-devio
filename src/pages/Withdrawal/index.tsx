export default function Withdrawal(){
    return(
        <section className="flex ml-6 mt-8 md:justify-center ">
            <div className="flex flex-col mr-10 md:mr-28">
                <div>
                    <h1 className="font-bold text-2xl md:text-4xl ">Preparando:</h1>
                </div>
                <div className="text-4xl text-gray-400 font-bold mt-4 md:text-6xl md:mt-6 ">
                    <div>
                        <span>Ricardo</span>
                    </div>
                    <div className="py-6">
                        <span>Bruna</span>
                    </div>
                    <div>
                        <span>Fernanda</span>
                    </div>
                    <div className="py-6">
                        <span>Joao</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="font-bold text-2xl md:text-4xl">
                    <h1>Pronto:</h1>
                </div>
                <div className="text-4xl text-[#125c12] font-bold mt-4 md:mt-6 md:text-6xl">
                    <span>Camila</span>
                </div>
            </div>
        </section>
    )
}