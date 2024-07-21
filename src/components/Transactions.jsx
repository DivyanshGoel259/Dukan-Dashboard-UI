export const Transaction =({refunds,payouts})=>
{
    return <div>
        <div className="items-center p-2">
            <div className="font-medium text-[#1A181E] text-xl p-2">
                Transactions | This Month
            </div>
            <div className="p-3 flex">
                <div>
                    <button className="rounded-full py-[6px] px-4 bg-[#E6E6E6] text-[#808080]">
                        Payouts ({payouts})
                    </button>
                </div>
                <div>
                    <button className="ml-2 bg-[#146EB4] text-[#FFFFFF] rounded-full py-[6px] px-4 ">
                        Refunds ({refunds})
                    </button>
                </div>
            </div>
        </div>
    </div>
}