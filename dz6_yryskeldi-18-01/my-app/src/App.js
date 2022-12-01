import './App.css';
import UsersPage from "./pages/usersPage/UsersPage";
import UsersList from "./components/usersList/UsersList";



function App() {
    return (
        <div className="App">
            <UsersPage/>
            <UsersList/>
        </div>
    );
}

export default App;
