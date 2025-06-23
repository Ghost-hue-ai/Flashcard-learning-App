import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import appService from '../appwrite/authConfig'; // Adjust the path as needed
import {login, logout } from '../store/authSlice';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {

    
    return (
        <>

            <main className="min-h-[80vh]">
                <Outlet />
            </main>
           
        </>
    );
}
