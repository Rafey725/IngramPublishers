import LoginComp from '@/pages/login/LoginComp'
import React from 'react'

export const metadata = {
    title: "myaccount.ingrampublishers.com",
    description: "login to your account",
    icons: {
        icon: '/loginfavicon.jpg'
    }
};

const LoginPage = () => {
  return (
    <LoginComp />
  )
}

export default LoginPage