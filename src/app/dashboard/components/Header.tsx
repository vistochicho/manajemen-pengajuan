import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

interface HeaderProps {
  toggleSidebar:() => void
}

const Header:React.FC<HeaderProps> = ({toggleSidebar}) => {
  return (
    <nav className='fixed top-0 z-50 w-full bg-white border-b border-gray-200'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start rtl:justify-end'>
            <button onClick={toggleSidebar} className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
              <HiOutlineMenuAlt2 className='text-2xl'/>
            </button>
            <Link href='/' className='flex ms-2 md:me-24 gap-2 items-center'>
              <img src='https://www.cloudnow.co.id/wp-content/uploads/2022/11/File-Transparant-PNG-Logo-CLoudNow-Warna.png' className='w-28 h-auto'/>
            </Link>
          </div>

          <div>
            <Menu as='div' className='relative'>
              <MenuButton className='-m-1.5 flex items-center'>
                <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726099200&semt=ais_hybrid" className='w-8 h-8 rounded-full bg-gray-50'/>
                <span className='lg:flex hidden lg:items-center'>
                  <span aria-hidden='true' className='ml-2 text-sm font-medium leading-6 text-custom-gray'>
                    Oji Lee
                  </span>
                  <ChevronDownIcon aria-hidden='true' className='ml-2 w-5 h-5 text-gray-400' />
                </span>
              </MenuButton>
              <MenuItems transition className='absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in'>
                <MenuItem>
                  <a className='block px-3 py-1 leading-6 text-gray-900 data-[focus]:bg-gray-50'>
                    Profile
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
