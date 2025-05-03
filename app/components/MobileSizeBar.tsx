import React from 'react'
import { Link } from 'react-router'
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";

const MobileSizeBar = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle()
    }
  return (
    <div className='mobile-sidebar wrapper'>
        <header>
            <Link to ="/">
            <img src="/assets/icons.svg" alt="logo" className='size-[30px]'  />
            <h1>TourVistor</h1>
            </Link>
            <button onClick={() =>sidebar.toggle()}>
                <img src="/assets/icons.menu.svg" alt="menu" className='size-7'  />

            </button>
        </header>

<SidebarComponent width={270}
 //@ts-ignore
ref={(Sidebar) =>Sidebar =sidebar}>

</SidebarComponent>
    </div>
  )
}

export default MobileSizeBar
