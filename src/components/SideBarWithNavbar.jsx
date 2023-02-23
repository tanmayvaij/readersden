import { GlobalStates } from "../context"

export default function SideBarWithNavbar() {

    const { user } = GlobalStates()

    const logOut = () => {

        console.log("logout clicked")

        localStorage.clear()

        location.href = "/"

    }

    return (
        <>
            <nav className="fixed w-full top-0 z-50  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">

                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>

                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Reader's Den</span>
                            </a>

                        </div>

                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div>

                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////8/Pz5+fn19fWgoKCvr6/w8PDs7OxQUFAaGhoEBATd3d3Nzc3n5+dnZ2fZ2dlVVVXFxcUlJSUODg6JiYl+fn5bW1siIiKmpqZJSUnQ0NCsrKyZmZkVFRU6Ojpvb28xMTG9vb13d3eRkZEzMzNCQkKamppsbGyLi4uBgYE+Pj79h2aqAAAMNUlEQVR4nNWd6WKqOhSFGQQFERGoWK1V0aqnff/3u+CIkIQMK8Jdv1vlE7Kzp2wMU7fscJW7znzqbRI/HY+N8Tj1k403nTtuPgkH2r/f0PfRg3DiHrLNIjXoSheb7OBqBdVDaA1Xn/PljoH2qmS5/1wNLS3XooMwcqYJN9xTi+lppQESTTjMtxJwT03zIfiKoITBl6eEd9XyM0BeFI4wdDMfwFfqO/sKYdcFIrTj/QKEd9ViG9uYS4MQDpwNFO+q3QmyJAGE0V4D3lXbqHtCazLVxlcqU35Y1QiteKaVr5SnyKhEOMm085WaxR0RRvrv313LVQeEoT77QtJZ2guQJBycsNtfu74PknuHHOFEx/7Xph+55ShDOHjvA/rUWeY2ShC6HfGV+nwD4UjvDt+mTNglFyXM+QN3PUpyrYT2R8d8peZiSR0hwlHXN/CqhdCTKkKYd432kKuF0Dp0zVXRB783zk046NaG1pVxb428hKOfrplqSngXIyfhpGsggjidOD7CfNw1DklfOMLPrlkoOqEI+wpoGGsM4bprDob+IQj74KjRNVcn7DcgB2IbYZ8f0as+1Aj7a2SeajE3bML/A2DbpsEk7E8wwRZz62cRTnrpyZDEcuAYhKOur1tADDecTjjoWzTBUjISJ7T6FQ+2aUYNiamEfYroeUTdFmmE/xcz+hTNoFIINViZZLZ38rhU7sxnMi1FLaJYGzKhDU4bzg6TuikYTdbg+uqCnEclE0Ld7cwNyc1c1iiHQpKdcCIhcBEufgNmr1rwAXxeiWlUEiEwtf3RnhEbHWCuEzH/RiKE7YR7vozf8Bf1hRkfIao+6PG3+wSo9UioLzYJB6AvOwj1ijqgb216b01CTAk7ES26TzBu8LSdEJPdPop3T44QvamEQKpOOIB0WTR/SR5Bnp5GlFEnPCG+ZS8FaJoQm1pPodYIQ0QjkCwgBvG71j1VI0Q8KFOFhnvI97MII8AXHFWaJS2EuXlt83slRHQbqrUuD77Vr2BJJ0TsFEq9oKBreGm5qRLaAN+pLcfeLkAdwasulCphrP7Zf+pHtKyl+mVUb2KF0AKsQoVe3ocA5m5ZuYkVQsAKkN8JqwJkGCo3sUIICAsxZ3kAabAZiRDwcLQXZPn0T/1SnsvlSQhwJ1DHsQA38enYPAgBge8ZBGiac/WLeYQYD0JAkD2BEa7UL+ZRGb4T2upx4RF4xFXdPU3uO/OdELDbc3UocQpQXr9vGHdCgJ0BnKR7KFTPod5tzY0wVM88L5Fn6gEuchq8EAJypKjN8CrAlui8EAKiCpHe63YB7IJnVQgDwCls5DIslo36BaVRhfBL/fMo1TtZ2YAE8bpCCMiOLEGHy2+yAOvm+CQcqn+acQaPtEBk3cIHIaIiqp6+eBWiKdJ9EG4BnyZxbo4pRI1v+iAEfBhn4zy/IJV260aIyAODt0MQ4eRGCKlO9pLwcCXEdLD1kjCzL4RDSL9HL9dhOrwQAgJq4+HnwgRws4zLQjRQzdy/YEJMb+T6QghI+xhqVUOSMA0T25JwAKgTGIplw6YQJYZCm2FBGGJ6vHzsFLIB6KqCghB1eBJRlHkqAF1VXBCimryw2wWqPdIpCFEN3VsoIaqZb14Qoprm/pAL0caYP8PwCkLYqBlcUh8UDJTa2YYNGxbEcZ6TW7BDgf7QCFkDVIW0Ae6IR9RFjQMD45VeJDpXhS5AtvSu2AB2rXswQmALv2sgZyKhNn3Udl/KMVDtx6Xk2kqbQk7aOhiYyOImTGYfeQuNrQE9hDeDhFDQS8oMTHf1XYhsDfbY3NLATs/b0c9y8mr4B72iHwN8TE694wRqGIyCDzW/+S7VjBQmA/WUb8CctrvU7CnUjpZKDfiZe+4BTiQN4QfIx3hClaaMAX5sr5apCZ5skIEo/Dalg/Eodxdt7N58lY6ntNCfzFocoTIXLxrjbelFO/EwI9IzuTeF74d3iVa9dU229dE+zVMzkdybvqmMCdgvrcp3eW2qlWv7nQu/VIf9uivjSzCudA6vX2Ljw4am7RYn2mq9ggwb4xPksUPGXPdw/i00T0PRPCYbncHkDePuDtBcG1W76WccDp+Gxx6Gk8/pW8Y0Och8KVuLY7Y/nBzHOR322fFtLx5wjT5Ol0UqBtYt+qnIGLz7RRXvlT8C1g97qZ2NqwH3Ux6wjt9PzYG9GP2UA+yn6afKfhrAkaf+6tITBepr66cufW3QemTfdAb2l7Yq+fOm532p89Q7vmlprIE9wlSNd7P9Og/CcDiwKrFFGMSn/WyneZBvfO3z1ui3HeduxCopjqJ8DuudaWo8AvbqN/Xzm/MlhkfxhybXcXbt1cdMv6ppeRB62Z0VrHWkxG7nLfALcTePxIszdvALf9lSfCO0sB+7/JIt5o9c8I28n3uCtnfM1JowobnTyyhM2PnDq/bqL5wOYbM+K+cPEWdIS8m/SvOVEeVlPc+QmhDX1ANO/oA8qxvzSQhw3L6/oIdmXIAbUj3LHSjPgdtjD6sXm4dyuSFdVQhVkzUb1Tl0JK0U3blldaaCYifSHHsi6K6BWlnjNk3mPttE4bEfo4+PPpUrrJ7x62wTcyv9SRvsQIxXBfJPama9Ekp3x2OG0NElvf/fn6zHnChJrxd9OLYpSRPh1+dESYZQ+pbgU7lU7ehw//cHoYznNsadIWEplrE3j+D7OXNvK/whKfZQJV2RuKV/TthXmJvoY/xsHolnrZ8+cmX2paBf4+vcJeoKBBErB5QqhGIbho88btiuSAyRPL9UrL1ThyfKklAyqdrgKjtH+L13UBSRMkfYtPn7k9BzPnjEn2t56VF+mefNfROx8/V4xR1qUOd5c2czPPAMDE7xNrpvXv7rlZDvWU/0hIPt4nyd36uNqL0b4Sz+Ce8Ul1dSe2FQjZAnYYOcxCoqjpRZWvNE6u8oae89WXazCG9qX4r1UUB1wvaDR+/zRklqnYm5qFf0Gu8Katsx9Ie8bLUFxI2Arvm+J7ax6WijqIj9nGaN62sSskPhd4WEdLHtabPqTHjvGstedePMvIo1YpiwhkjvzqM/B+Ou9vqqBvSDTKS5FSRCekTdtZm5itprSMw6CL3DMsVOLJMW7Q4QIx7ye0gpdZ9+3ELqTSRPqiITkpu/E3QFTVKWRXRLUrKRoLwPmOg69OUWUm4ixdmivdOZ8BmAiRAoDQk9VLTfn/pe7mZAjZx0parmpCxqhYhK2Hw7AeotMgg13kRDHwJAJWyOpu0yLqyr7nd9039+OmHT2qCHksurEcUyQjoGYTOQ0l0N5VXDRrBqYCzCZiy274NTYzXKwsxtjEnYLJtm3W/6dqPP8MD8ezZh0yon76w4kRQ0/JmWXayFsBmMvanuS1OzHtwWsrYREpxwp8NERjNL02r9WgkJiNuuFuOg2ZbZbt7bCQn+26KbrHfU7IjhyKpwEJLGpa7fv21YhMkBPK4yDyGp12b2bpsaELJH7G3iJi5CUho2fW+0+ElIP/FdAR8hMRO+fGO3Cak6zbltcRKS828f70kuDknlovor1KniJTRHpJ8x+dJvcSyX1FS45I5WuQlNm9gHCWzQJ4vcti/QVs5PSCv7THUux2BL/E4RKydCSOuVnhY7hxZPjsKXCv2mQoTmgJIqznR0SE0ox7G2YvZNjNA0XUpG3cuxdnVIG6/kizYriRKaIa0ytTngknGjNa2D3RNe9cKErPriGfOwxlvqN0g4UhKE5ohxXnEeq4VWdsxozs9knhIZwuJXZnT27/acB5ybCvM544MXuZTBliM0R/9YrUXJdB2JGp5hdJqyumTTX8nfTZKw2KtajtYuzqcJ729urZxtSw9wJh2tSRMW/lR7J+Nu7+QBa2HaQf65bz/MslHwDRUITTPn65tOvO3BcfNJFARhqSCIJrnrHPYeX/P2USm9p0Ro2rnI+dr0218sksXC/xY5BXPM1ayzGmHJqHe0o6fIp05YaKVvQCjnAFTdhKWTpWPcjI9xAyGERdCRT7HTCceZC8o7gwgLBY6HgkyXpwAWcOIIi407ooYEItqsV8h4GklYKnTV7E7mohsi0ISFrMkhk3lex7NDrCEZooHQLCddTdbbDf+4d39zXscjPZlJPYQXDYPYmXs7nznOy995cycONKaWNRJeZReghQ+6zZY/iZ+Ox8Z4nPrJzzIrfdU40nTjKvoPjcDEcF+4otUAAAAASUVORK5CYII=" alt="user photo" />
                                    </button>

                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            { user?.name }
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            { user?.email }
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            { user?.number }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2">

                        <li>
                            <a href="/#/mybooks" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3">My Books</span>
                            </a>
                        </li>

                        <li>
                            <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            </a>
                        </li>

                        {/*
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
                    </a>
                </li> */}

                        <li>
                            <a 
                                onClick={logOut} 
                                href="#" 
                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </aside>

        </>
    )
}