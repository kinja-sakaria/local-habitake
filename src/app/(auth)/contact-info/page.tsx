import React from 'react'
import ContactInfoView from '@/components/view/auth/ContactInfoView'
import { authPageMetadata } from '@/constants/metadata';

export const metadata = authPageMetadata['contact-info'];

export default function page() {
  return (
    <ContactInfoView />
  )
}
