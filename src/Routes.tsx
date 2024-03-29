import {Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { ModalProvider } from "./contexts/Modal/ModalContext";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Payment from "./pages/Payment";
import Withdrawal from "./pages/Withdrawal";

export default function Routes(){
    return(
        <BrowserRouter>
                <ModalProvider>
                    <>
                        <Header />
                        <WrapperRoutes>
                            <Route path = "/" element = {<Home />} />
                            <Route path = "/payment" element = {<Payment />} />
                            <Route path = "/kitchen" element = {<Kitchen />} />
                            <Route path = "/withdrawal" element = {<Withdrawal />} />
                        </WrapperRoutes>
                    </>
                    
                    
                </ModalProvider>
        </BrowserRouter>
    )
}