import { NextPayoutCard } from "./components/NextPayoutCard"
import { RevenueCard } from "./components/RevenueCard"
import { AmountProcessedCard } from "./components/AmountProcessedCard"
import { FinalCard } from "./components/FInalCard"
import { Topbar } from "./components/TopBar"
import { SideBar } from "./components/SideBar"
import { BasicTable } from "./components/Table"
import { Transaction } from "./components/Transactions"


function App(){
    return <>
    <div >
        {/* <Transaction refunds={22} payouts={14}></Transaction> */}

        <FinalCard></FinalCard>


    </div>

        
    </>
}

export default App