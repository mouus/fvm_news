import React from 'react'
import Image from "next/image";

function Navbar() {
  return (
    <div className='max-w-screen-lg  mx-auto '>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex gap-x-10'>
                <Image src="/logo/logo.jpeg"  height={40} width={40}/>
                <form>   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <input type="text" id="simple-search" class="bg-blue-300 text-gray-900 text-sm rounded-lg " placeholder="Search" />
                    </div>
                </form>
            </div>
            <div>
                <ul className='flex gap-x-3'>
                    <li className='mr-2'><a href="#">ހަބަރު</a></li>
                    <li className='mr-2'><a href="#">ކުޅިވަރު</a></li>
                    <li className='mr-2'><a href="#">ވިޔަފާރި</a></li>
                    <li className='mr-2'><a href="#">ދިރިއުޅުން</a></li>
                    <li className='mr-2'><a href="#">ރިޕޯޓް</a></li>
                    <li className='mr-2'><a href="#">މުނިފޫހިފިލުވުން</a></li>
                    <li className='mr-2'><a href="#">ދުނިޔެ</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar