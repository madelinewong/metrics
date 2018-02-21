import react from 'React';
import './UserSideBar.html';
import './UserSideBar.css';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

const UserSideBar = props => {
    const { users, selectedUser, onSelect, removeUser } = props;

      return  (
          console.log('pls')
      );
}

export default UserSideBar.js;