import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import openseaLogo from '../../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem]`,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex flex-col  justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}
const LessThenLarge = ({ isConnected, fetchResponse }) => {
    const [openToggle, setOpenToggle] = useState(false)
    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                if (accounts) {
                    setCurrentAccount(accounts[0]);
                    setIsConnected(true);
                }

                fetchResponse(accounts[0]);
            } catch (err) {
                console.error(err);
            }
        } else {
            alert("Wallet not found");
        }
    };
    return (
        <div className={style.wrapper}>
            <div className=' flex justify-between'>
                <div className='flex items-center'>
                    <Image src={openseaLogo} height={40} width={40} />
                </div>
                <div className={style.searchBar}>
                    <div className={style.searchIcon}>
                        <AiOutlineSearch />
                    </div>
                    <input
                        className={style.searchInput}
                        placeholder="Search items, collections, and accounts" />
                </div>
                <button onClick={() => { setOpenToggle(!openToggle) }}>
                    {
                        openToggle ? <svg xmlns="http://www.w3.org/2000/svg" height="48" fill='#CC43F5' width="48"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#CC43F5' height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" /></svg>
                    }
                </button>
            </div>
            {openToggle &&
                <div className='flex flex-col mt-4'>
                    <div className={style.headerItems}>
                        <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
                            <div className={style.headerItem}> Collections </div>
                        </Link>
                        <div className={style.headerItem}> Stats </div>
                        <div className={style.headerItem}> Resources </div>
                        <div className={style.headerItem}> Create </div>
                        <div className={style.headerIcon}>
                            <CgProfile /> </div>
                        <div className={style.headerIcon}>
                            <MdOutlineAccountBalanceWallet />
                        </div>
                    </div>

                </div>}

        </div>


    )
}

export default LessThenLarge; 2