import React, { useState } from 'react';
import './inventrory.css';  // Make sure to create an appropriate CSS file to style your component
import 'material-icons/iconfont/material-icons.css'; // Ensure you have the material icons CSS
import{Link} from 'react-router-dom';
import Chart from '../Charts/chart';
import InventoryDashboard from '../inventory/InventoryDashboard';





const data4 = [
  {
    name: "Sun",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    uv: 290,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    uv: 310,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thu",
    uv: 400,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    uv: 100,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sat",
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
];

const lineChartData = [
  {
    time: "2am",
    grossVolume: 260,
    newCustomers: 90,
  },
  {
    time: "4am",
    grossVolume: 330,
    newCustomers: 140,
  },
  {
    time: "6am",
    grossVolume: 290,
    newCustomers: 140,
  },
  {
    time: "8am",
    grossVolume: 350,
    newCustomers: 170,
  },
  {
    time: "10am",
    grossVolume: 270,
    newCustomers: 130,
  },
  {
    time: "12am",
    grossVolume: 380,
    newCustomers: 170,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data = [
  {
    flag: '🇺🇸',
    country: 'United States',
    revenue: '$1,671.10',
    percentage: '39%',
  },
  {
    flag: '🇵🇭',
    country: 'Philippines',
    revenue: '$1,064.75',
    percentage: '30%',
  },
  {
    flag: '🇬🇧',
    country: 'United Kingdom',
    revenue: '$1,055.98',
    percentage: '45%',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    revenue: '$1,045.49',
    percentage: '80%',
  },
  {
    flag: '🇫🇷',
    country: 'France',
    revenue: '$2,050.93',
    percentage: '10%',
  },
];



const data1 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const ExamInventory = () => {
  const [uiSubMenuOpen, setUiSubMenuOpen] = useState(false);
  const [samplePageSubMenuOpen, setSamplePageSubMenuOpen] = useState(false);
  const [menuProfileOpen, setMenuProfileOpen] = useState(false);
  const [menuSettingsOpen, setMenuSettingsOpen] = useState(false);
  const [menuNotificationsOpen, setMenuNotificationsOpen] = useState(false);
  const [menuMessagesOpen, setMenuMessagesOpen] = useState(false);
  const [menuLockOpen, setMenuLockOpen] = useState(false);
  const [view, setView] = useState('dashboard');
  const [showProcurementDropdown, setShowProcurementDropdown] = useState(false);
  const [showManufacturingDropdown, setShowManufacturingDropdown] = useState(false);
  const [showInventoryManagementDropdown, setShowInventoryManagementDropdown] = useState(false);
  const [showOrderManagementDropdown, setShowOrderManagementDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (newView) => {
    setView(newView);
    setShowProcurementDropdown(false);
    setShowManufacturingDropdown(false);
    setShowInventoryManagementDropdown(false);
    setShowOrderManagementDropdown(false);
  };

  const toggleMenu = (menu) => {
    switch (menu) {
      case 'menuProfile':
        setMenuProfileOpen(!menuProfileOpen);
        break;
      case 'menuSettings':
        setMenuSettingsOpen(!menuSettingsOpen);
        break;
      case 'menuNotifications':
        setMenuNotificationsOpen(!menuNotificationsOpen);
        break;
      case 'menuMessages':
        setMenuMessagesOpen(!menuMessagesOpen);
        break;
      case 'menuLock':
        setMenuLockOpen(!menuLockOpen);
        break;
      default:
        break;
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    // Handle click on item (e.g., navigate to login/register page)
    console.log(`Clicked ${item}`);
  };
  

 
  const toggleExpansionPanel = (panel) => {
    if (panel === 'sample-page-submenu') {
      setSamplePageSubMenuOpen(!samplePageSubMenuOpen);
    }
  };

  

  return (
    <div >
     <aside className="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
     
     <div className="mdc-drawer__header">
       <h3 className="text-white">ERP</h3>
     </div>
     <div className="mdc-drawer__content">
       <div className="user-info">
         <p className="name">Sai Sree</p>
         <p className="email">Saisree@elenor.us</p>
       </div>
       <div className="mdc-list-group">
         <nav className="mdc-list mdc-drawer-menu">
         <div className="mdc-list-item mdc-drawer-item">
         <Link to="/" className="mdc-drawer-link">
                 <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
                 <span className={view === 'dashboard' ? 'active' : ''} onClick={() => handleMenuClick('dashboard')}>
                   Dashboard
                 </span>
               </Link>
             </div>
             <Link to="/ExampleProcurement" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/tables/basic-tables.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
               Procurement
             </a>
           </div>
           </Link>
           <Link to="/Examplemanufacture" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/tables/basic-tables.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
               Manufacturing
             </a>
           </div>
           </Link>
           <Link to="/exampleinventory" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/tables/basic-tables.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
               Inventory Management
             </a>
           </div>
           </Link>
           <Link to="/Exampleordermanagement" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/tables/basic-tables.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
               Order Management
             </a>
           </div>
           </Link>
           <Link to="/Examtable" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/tables/basic-tables.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">grid_on</i>
               Tables
             </a>
           </div>
           </Link>

  <Link to="/examplechart" className="mdc-drawer-link">
           <div className="mdc-list-item mdc-drawer-item">
             <a className="mdc-drawer-link" href="pages/charts/chartjs.html">
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pie_chart_outlined</i>
               Charts
             </a>
           </div>
           </Link>
{/* 

           <div className="mdc-list-item mdc-drawer-item">
    <a
      className="mdc-expansion-panel-link"
      href="#"
      onClick={() => toggleExpansionPanel('sample-page-submenu')}
    >
      <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">pages</i>
      Sample Pages
     

    
    </a>
    {samplePageSubMenuOpen && (
      <div className="mdc-expansion-panel" id="sample-page-submenu">
        
        <div className="dropdown">
      <button onClick={toggleDropdown}>Sample Pages</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      )}
    </div>
         
      
      </div>
    )}
  </div> */}


           {/* <div className="mdc-list-item mdc-drawer-item">
             <a
               className="mdc-drawer-link"
               href="https://www.bootstrapdash.com/demo/material-admin-free/jquery/documentation/documentation.html"
               target="_blank"
               rel="noopener noreferrer"
             >
               <i className="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
               Documentation
             </a>
           </div> */}



         </nav>
       </div>
       <br/>
       <br/>
       <div className="profile-actions">
         <a href="javascript:;">Settings |</a>
         <span className="divider"></span>
         <a href="javascript:;"> Logout</a>
       </div>
     </div>
   </aside>


      <main className="main-content">
        {view === 'dashboard' && (
          <>
           
           <div className="contaner">
      <div className="left-section">
        <div className="menu-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <span className="greetings">Greetings Sai!</span>
      </div>
      <div className="search-bar">
        <div className="search-icon">
          <span className="search-icon-inner"></span>
        </div>
        <input type="text" placeholder="Search.." />
      </div>
      <div className="right-section">
        <div className="profile">
          <img src="https://picsum.photos/50/50" alt="profile" />
          <span className="profile-name">Sai Sree</span>
        </div>

        <div className="icons">
        <Link to="/signUp" target="_blank">Sign Up</Link> /{' '}
        <Link to="/Login" target="_blank">Sign In</Link>
        
         
          
        </div>
        </div>
        </div>
          </>
        )}
       
<InventoryDashboard/>
     
      </main>
    </div>
  );
};

export default ExamInventory;
