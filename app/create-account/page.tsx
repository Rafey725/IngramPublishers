import CreateAccountComp from '@/screens/create-account/CreateAccountComp'
import React from 'react'

export const metadata = {
  title: "createaccount.ingrampublishers.com",
  description: "create your account",
  icons: {
    icon: '/loginfavicon.jpg'
  }
};

const CreateAccountPage = () => {
  return (
    <CreateAccountComp />
  )
}

export default CreateAccountPage