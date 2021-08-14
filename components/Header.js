import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { routes } from '../data/routes'

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <header>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-6 bg-white">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <Link href="/">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-500"
                            >
                            ジルカーHR
                            </a>
                        </Link>
                        <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars">MENU</i>
                        </button>
                    </div>
                    <div
                        className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            {
                                routes.map((route) =>
                                    <li className="nav-item">
                                        <Link href={route.href}>
                                            <a
                                            className="px-5 py-2 grid items-center text-center text-xs uppercase font-bold leading-snug text-gray-500 hover:opacity-75"
                                            >
                                            <span className="">{route.name.ja}</span>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default Header