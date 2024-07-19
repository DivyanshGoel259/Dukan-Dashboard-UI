import { NextPayoutCard } from "./NextPayoutCard"
import { RevenueCard } from "./RevenueCard"
import { AmountProcessedCard } from "./AmountProcessedCard"


export function FinalCard(){
    return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2">
        

        <div className="p-2">
            <NextPayoutCard title = {"Next Payout"} amount={"2,312.20"} orderCount={23} nextPaymentDate={"Today, 4:00PM"}></NextPayoutCard>
        </div>
        <div className="p-2">
        <RevenueCard title = {"Amount Pending"} orderCount={13} amount={"92,312.20"} ></RevenueCard>
        </div>
        <div className="p-2">
        <AmountProcessedCard title = {"Amount Processed"} amount={"23,92,312.19"}></AmountProcessedCard>
        </div>


    </div>

        
    </>
}
