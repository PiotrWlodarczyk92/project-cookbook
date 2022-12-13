import { Menu } from 'primereact/menu';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.scss'

export default function Navbar() {
    const navigate = useNavigate();

    let items = [
    { label: 'My Recipes', icon: 'pi pi-fw pi-list', command: () => { navigate('/my-recipes') } },
    { label: 'Add Recipe', icon: 'pi pi-fw pi-clock', command: () => { navigate('/add-recipe') } },
    { label: 'Search', icon: 'pi pi-fw pi-share-alt', command: () => { navigate('/search') } },
  ];

    return (
        <div className="navbar-container">
            <div>
                <Menu model={items} />
            </div>
        </div>
    )
}