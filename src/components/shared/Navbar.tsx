'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import {  signOut } from "next-auth/react"

type UserProps={
  user?:{
    name?:string | null | undefined; 
    email?:string | null | undefined; 
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Navbar({session} : {session : UserProps | null}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">📁 Portfolio</span>
        </div>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/blog" className="hover:text-blue-600">Blogs</Link>
          <Link href="/project" className="hover:text-blue-600">Projects</Link>
          <Link href="/contact-us" className="hover:text-blue-600">Contact Us</Link>
        </div>

        <div className="hidden md:block">
          <Link href="/auth/login"><Button variant="default">Login</Button></Link>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-4">
              <DialogTitle>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <div className="flex flex-col gap-4 text-lg">
                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link>
                <Link href="/project" onClick={() => setOpen(false)}>Projects</Link>
                <Link href="/contact-us" onClick={() => setOpen(false)}>Contact Us</Link>
                <Link href="/auth/login" onClick={() => setOpen(false)} className="mt-4 w-full">Login</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
