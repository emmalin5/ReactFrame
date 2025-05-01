// import React, { useState } from 'react';
 // Make sure this path is correct

// const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     // <>
//     //   {/* Header */}
//     //   <header className="bg-blue-600 text-white p-4 text-center flex justify-between items-center">
//     //     <h1 className="text-2xl font-bold">My ToDo App</h1>
//     //     <button
//     //       onClick={() => setIsModalOpen(true)}
//     //       className="px-4 py-2 text-white rounded hover:bg-blue-700 focus:outline-none"
//     //     >
//     //      + Add New Task
//     //     </button>
//     //   </header>

//     //   {/* Modal */}
//     //   <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     // </>

    
//   );
// };

// export default Header;


// 'use client'

// import { useState, Fragment } from 'react'
// import { Disclosure } from '@headlessui/react'
// import { Dialog, Transition, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import TaskModal from '../Todo/TodoModal';

// const navigation = [
//   { name: '+ Add New Task', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handleAddTaskClick = (e) => {
//     e.preventDefault()
//     setIsModalOpen(true)
//   }

//   const closeModal = () => setIsModalOpen(false)

//   return (
//     <>
//       <Disclosure as="nav" className="bg-gray-800">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="relative flex h-16 items-center justify-between">
//             <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
//                 <span className="absolute -inset-0.5" />
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
//                 <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
//               </Disclosure.Button>
//             </div>
//             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div className="flex shrink-0 items-center">
//                 <img
//                   alt="Your Company"
//                   src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
//                   className="h-8 w-auto"
//                 />
//               </div>
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       aria-current={item.current ? 'page' : undefined}
//                       onClick={item.name === '+ Add New Task' ? handleAddTaskClick : undefined}
//                       className={classNames(
//                         item.current
//                           ? 'bg-gray-900 text-white'
//                           : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'rounded-md px-3 py-2 text-sm font-medium',
//                       )}
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View notifications</span>
//                 <BellIcon aria-hidden="true" className="size-6" />
//               </button>

//               {/* Profile dropdown */}
//               <Menu as="div" className="relative ml-3">
//                 <div>
//                   <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       alt=""
//                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                       className="size-8 rounded-full"
//                     />
//                   </MenuButton>
//                 </div>
//                 <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden">
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Your Profile
//                     </a>
//                   </MenuItem>
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Settings
//                     </a>
//                   </MenuItem>
//                   <MenuItem>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Sign out
//                     </a>
//                   </MenuItem>
//                 </MenuItems>
//               </Menu>
//             </div>
//           </div>
//         </div>

//         <Disclosure.Panel className="sm:hidden">
//           <div className="space-y-1 px-2 pt-2 pb-3">
//             {navigation.map((item) => (
//               <Disclosure.Button
//                 key={item.name}
//                 as="a"
//                 href={item.href}
//                 aria-current={item.current ? 'page' : undefined}
//                 onClick={item.name === '+ Add New Task' ? handleAddTaskClick : undefined}
//                 className={classNames(
//                   item.current
//                     ? 'bg-gray-900 text-white'
//                     : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                   'block rounded-md px-3 py-2 text-base font-medium',
//                 )}
//               >
//                 {item.name}
//               </Disclosure.Button>
//             ))}
//           </div>
//         </Disclosure.Panel>
//       </Disclosure>

//       {/* Modal */}
//       <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       {/* <Transition appear show={isModalOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-50" onClose={closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                   <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
//                     Add New Task
//                   </Dialog.Title>
//                   <div className="mt-2">
//                     <p className="text-sm text-gray-500">
//                       Here you can write details about the new task you want to add.
//                     </p>
//                     {/* Add your form or input fields here */}
//                   </div>

//                   <div className="mt-4">
//                     <button
//                       type="button"
//                       className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
//                       onClick={closeModal}
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition> */}


//     </>
//   )
// }

import { useState, Fragment } from 'react'
import { Disclosure, Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import TaskModal from '../Todo/TodoModal'

const navigation = [
  { name: '+ Add New Task', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddTaskClick = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <Bars3Icon className={classNames(open ? 'hidden' : 'block', 'h-6 w-6')} />
                    <XMarkIcon className={classNames(open ? 'block' : 'hidden', 'h-6 w-6')} />
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={item.name === '+ Add New Task' ? handleAddTaskClick : undefined}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">View notifications</span>
                  </button>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <span className="sr-only">Open user menu</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={item.name === '+ Add New Task' ? handleAddTaskClick : undefined}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Modal */}
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
