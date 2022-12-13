import { Outlet } from 'react-router-dom';
import '../styles/Dashboard.scss'

import Navbar from '../components/Navbar'

export default function Dashboard() {
    return (
        <>
            <div className="dashboard-container">
                <Navbar />
                <div className="dashboard-content">
                <Outlet />
                </div>
            </div>
        </>
      )
}