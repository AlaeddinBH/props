
import './App.css';
import Profile from './Profile/Profile';
import imgProfile from './img/photo.png';
function App() {
  const Data = {
    fullName : "Alaeddin Ben Hammed",
    bio: '..........',
    profession : 'engineer'
  }
  const handleName = (name)=> {alert(`The profile name is ${name}`)}
  return (
    <div className="App">
      <Profile data={Data} handleName={handleName}>
        <img src = {imgProfile} alt='imgProfile'/>
      </Profile>
    </div>
  );
}

export default App;
