export const NextPayoutCard = ({
    title,
    amount,
    orderCount,
    nextPaymentDate
}) =>{

    return ( 
    <div>
        <div className=" bg-[#146EB4] rounded-[8px] hover:bg-[#0E4F82] shadow-md">

            <div className="p-4">
            
                <div className="text-white flex items-center">
                    <div className="flex items-center">
                        <div>
                            {title}
                        </div>
                        <div className="items-center ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>

                        </div>
                    </div>
                

                </div>
                
                <div className="flex justify-between pt-2 text-white">
                    <div className="font-semibold text-2xl">
                        $ {amount}
                    </div>
                    <div>
                        {orderCount? <div className="flex cursor-pointer font-medium items-center">
                            <div className="underline">
                                {orderCount} Orders
                            </div>
                            <div className="items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>:null}
                    </div>

                </div>

            </div>
            <div className="flex justify-between bg-[#0E4F82] rounded-[8px] text-white p-4">
                <div>
                    Next Payment Date:
                </div>
                <div>
                    {nextPaymentDate}
                </div>
            </div>

        </div>

    </div> )
    
}