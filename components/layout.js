import React, { useState } from "react";
import Link from "next/link";
import {Press_Start_2P} from '@next/font/google';
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import AuthModal from './AuthModal';
import teapot from '../public/teapotlg.png'
import teapotBeta from '../public/teapotBeta.png'
import {Space_Grotesk} from '@next/font/google';
import menu from '../public/menu.png';
import Head from 'next/head'
import Footer from "../components/footer";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSession, signOut } from 'next-auth/react';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';

// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({
   subsets: ['latin'],
  //  display: "fallback",
  })

// If loading a variable font, you don't need to specify the font weight
const press = Press_Start_2P({
   subsets: ['latin'],
   weight: ['400'],
   display: "fallback",
  })

  
const menuItems = [
  {
    label: 'Submit a review',
    icon: AddCircleIcon,
    href: '/spilltea',
  },
  {
    label: 'Reviews',
    icon: ReviewsIcon,
    href: '/',
  },
  {
    label: 'Logout',
    icon: LogoutIcon,
    onClick: signOut,
  },
];


const Layout = (props) => {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';

   const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [mobileNavActive, setNavActive] = useState(null);

  return (
    <>
    <Head> 
    <meta charSet="UTF-8"/>
    </Head>
  <nav className={`${space.className} ${styles.navContainer}`}>
        <Link href="/" >
          <Image
        src={teapotBeta}
        alt="teapot logo"
        width={180} 
        height={60} 
      />
      </Link>
      <Link href="/about" className= {styles.navItem}>
        about us
      </Link>
      <Link href="/spilltea" className= {styles.navItem}>
        spill the tea &#x1F618;
      </Link>
      <Link href="/readtea" className= {styles.navItem}>
        read the tea
      </Link>
      <AuthModal show={showModal} onClose={closeModal} />

      {isLoadingUser ? (
                  <div className={styles.loading}>loading...</div>
                ) : user ? ( 
                          <div className={styles.userMenu}>
                             <Image
                            src={user?.image}
                            alt={user?.name || 'Avatar'}
                            width={40}
                            height={40}/>
                            <h3> welcome {user?.name}!</h3>
                            <LogoutIcon onClick={signOut} />
                            </div>
                               ) : (
       <button onClick={openModal}>log in</button>
                )}
       <Image
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileNavBar}
          src={menu}
          alt="menu"
          width={40} 
          height={40} 
        />
    </nav>
   
    {mobileNavActive &&
         <div className={styles.mobileNavBarLinkContainer}> 
          <Link href="/about" className={styles.mobileNavBarLink}>about us</Link>
          <Link href="/spilltea" className={styles.mobileNavBarLink}>spill the tea &#x1F618;</Link>
          <Link href="/readtea" className= {styles.mobileNavBarLink}> read the tea</Link>
        </div> 
    }
      {props.children}
    <Footer />
  </>

  )
};

export default Layout;