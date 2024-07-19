{/* tailwind - using flex and justify content and defining width into 40 40 20*/}
<div className="flex justify-between">
<div className="bg-red-500 w-[40%]">hii</div>
<div className="bg-blue-500 w-[40%]">hii</div>
<div className="bg-yellow-500 w-[20%]">hii</div>
</div>
{/* tailwind - using grid and grid columns 10 and defining col span into 40 40 and 20 */}
<div className="grid grid-cols-10">
<div className="bg-red-500 col-span-4">hii</div>
<div className="bg-green-500 col-span-4">hii</div>
<div className="bg-yellow-500 col-span-2">hii</div>
</div>
{/* tailwind (Responsiveness) - defining initially the bg colour to be red and when it reach medium it will turn into blue bg*/}
<div className="bg-red-500 md:bg-purple-500">
hii there
</div>

{/* tailwind (Responsiveness) - defining initially the bg colour to be red and when it reach medium it will turn into blue bg*/}
<div className="grid grid-cols-2 md:grid-cols-3 ">
<div className="bg-red-500 ">hii</div>
<div className="bg-blue-500 ">hii</div>
<div className="bg-yellow-500 ">hii</div>
</div>

{/* tailwind  - text colour*/}
<div className="bg-red-500 text-blue-500 md:bg-red-500">
hii there
</div>

