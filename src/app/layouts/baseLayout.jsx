import { Outlet } from 'react-router-dom';
import { LayoutHeader } from '@widgets/LayoutHeader';
import './baseLayout.scss';

export const baseLayout = (
    <>
        <LayoutHeader/>

        <main>
            <div className="content">
                <Outlet/>
            </div>
        </main>
    </>
)