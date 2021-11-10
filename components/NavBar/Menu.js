import styled from "styled-components"
import tw from "twin.macro"
import useUser from "../../lib/useUser"
import { useEffect, useState } from "react"
import Link from 'next/link';

const MenuStyles = styled.div`
    ${tw`flex items-center space-x-4`}

    ._user_btn {
        ${tw`rounded-full relative`}

        > svg {
            ${tw`w-5 h-5 fill-current text-gray-50 cursor-pointer`}
        }

        .menu_wrapper {
            z-index: 100;
            ${tw`absolute right-0 pt-3 hidden`}

            &.open {
                ${tw`block`}
            }

            > .items {
                min-width: 16rem;
                ${tw`whitespace-nowrap bg-white shadow-lg p-3 rounded space-y-5`}

                > .menu_item {
                    ${tw`flex items-center text-blue-400 space-x-2 cursor-pointer`}

                    &:hover {
                        ${tw`text-pink-500`}
                    }
                    > svg {
                        ${tw`w-3 h-3 fill-current block`}
                    }
                }
            }
        }
    }

    .user_details {
        ${tw`text-gray-800 flex items-center space-x-2 border-b pb-4`}

        >.avatar {
            ${tw`block h-12 w-12`}

            > svg {
                ${tw`fill-current text-gray-800`}
            }
        }

        > .content {
            .name {
                ${tw`text-lg`}
            }
            .logout {
                ${tw`text-blue-400`}
            }
        }
    }

    .new-job {
        ${tw`border-t pt-6`}
         >.link {
             ${tw`block w-full bg-blue-400 font-semibold rounded-lg p-4 text-center`}
         }
    }
`

const Menu = () => {
    const { user } = useUser();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const closeMenu = e => {
            e.stopPropagation()
            setOpen(false)
        }

        document.addEventListener('click', closeMenu)

        return () => {
            document.removeEventListener('click', closeMenu)
        }
    }, [])

    return (
        <MenuStyles>
            <div className='_user_btn'>
                {
                    open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={e => {e.stopPropagation(); setOpen(false)}}> 
                            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                        </svg>
                    ) : (
                        user ? (
                            <svg style={{transform: 'scale(1.6)'}} viewBox="0 0 24 24" onClick={e => {e.stopPropagation(); setOpen(true)}}>
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                            </svg>
                        ) : (
                            <svg  viewBox="0 0 512 512" onClick={e => {e.stopPropagation(); setOpen(true)}}>
                                <g>
                                    <path d="m479.18 91.897h-446.36c-18.131 0-32.821-14.69-32.821-32.82s14.69-32.821 32.821-32.821h446.36c18.13 0 32.82 14.69 32.82 32.821s-14.69 32.82-32.82 32.82z"/>
                                    <path d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564   c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z"/>
                                </g>
                                <path d="m479.18 288.82h-52.513c-18.13 0-32.821-14.69-32.821-32.821s14.69-32.821 32.821-32.821h52.513c18.13 0 32.82 14.69 32.82 32.821s-14.69 32.821-32.82 32.821z"/>
                                <path d="m479.18 485.74h-446.36c-18.131 0-32.821-14.691-32.821-32.821s14.69-32.821 32.821-32.821h446.36c18.13 0 32.82 14.69 32.82 32.821 0 18.13-14.69 32.821-32.82 32.821z"/>
                            </svg>
                        )
                    )
                }

                <div className={`menu_wrapper ${open ? 'open' : ''}`}>
                    <ul className="items">
                        <li className="user_details">
                            <div className="avatar">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"/>
                                </svg>
                            </div>
                            <div className="content">
                                <p className="name">
                                    {user ? 'Berzel Best' : 'Guest User'}
                                </p>
                                <button className="logout">
                                    {user ? 'Logout' : 'Login / Register'}
                                </button>
                            </div>
                        </li>
                        <li className="menu_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                            <span>
                                My Applications
                            </span>
                        </li>
                        <li className="menu_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                            <span>
                                Saved Alerts
                            </span>
                        </li>
                        <li className="menu_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                            <span>
                                Preferences
                            </span>
                        </li>
                        <li className="menu_item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 7H2v6h8v5l8-8-8-8v5z"/></svg>
                            <span>
                                Contact Us
                            </span>
                        </li>
                        <li className="new-job">
                            <Link href="/hiring">
                                <a className="link">
                                    Post a job
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </MenuStyles>
    )
}

export default Menu