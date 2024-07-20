import { NextPayoutCard } from "./NextPayoutCard"
import { RevenueCard } from "./RevenueCard"
import { AmountProcessedCard } from "./AmountProcessedCard"
import { Topbar } from "./TopBar"
import { SideBar } from "./SideBar"


export function FinalCard() {
    return <>
        <div className="flex grid grid-cols-11 ">
            <div className="hidden lg:block lg:col-span-2 ">

                <SideBar title={"Nishyan"}></SideBar>
            </div>
            <div className="col-span-11 lg:col-span-9">

                <Topbar></Topbar>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 m-2">


                    <div className="p-2 ">
                        <NextPayoutCard title={"Next Payout"} amount={"2,312.20"} orderCount={23} nextPaymentDate={"Today, 4:00PM"}></NextPayoutCard>
                    </div>
                    <div className="p-2">
                        <RevenueCard title={"Amount Pending"} orderCount={13} amount={"92,312.20"} ></RevenueCard>
                    </div>
                    <div className="p-2">
                        <AmountProcessedCard title={"Amount Processed"} amount={"23,92,312.19"}></AmountProcessedCard>
                    </div>


                </div>
            </div>
        </div>


    </>
}
