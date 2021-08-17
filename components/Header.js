import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { routes } from '../data/routes'

import style from '../styles/Header.module.css'

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <header>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-4 bg-white">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <Link href="/">
                            <a className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-gray-500"
                            >
                                <Image src={"/images/zylker-hr.png"} width={120} height={40} />
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
                        className={"hidden lg:flex items-center"}
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
            <button className={`${style.menuTrigger} ${navbarOpen && style.active} block lg:hidden`} id="menuButton" onClick={() => setNavbarOpen(!navbarOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className="container block lg:hidden">
                <div className={`${style.menu} ${navbarOpen && style.active}`} id="overlayMenu">
                    <div className={`${style.menuList}`}>
                        <ul className="">
                            {
                                routes.map((route) =>
                                    <li className="">
                                        <Link href={route.href}>
                                            <a
                                                className="px-5 py-2 grid items-center text-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75"
                                                onClick={() => {setNavbarOpen(!navbarOpen)}}
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
            </div>
        </header>
    )
}


export default Header
