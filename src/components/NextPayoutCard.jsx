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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
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