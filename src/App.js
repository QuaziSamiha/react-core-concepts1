import logo from './logo.svg';
import './App.css';

function App() {

  var doctor = 'Mahfuz'; // js variable

  // js object
  var detailInfo = {
    name: 'Vondul',
    job: 'taking rest'
  };

  // js object for styling html tag
  var style = {
    color: 'red',
    backgroundColor: 'green'
  }

  const myPet = ['ini', 'kalu', 'vondo', 'sandu']; // js array

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done155 <code>src/App.js</code> and save to reload.
        </p>

        {/* js variable within html tag */}
        <h1>Doctor : {doctor}</h1>

        {/* js code within html tag */}
        <h2>My heading : {2 + 3}</h2>

        {/* adding css style use style object */}
        <p style={style}>My first react paragraph</p>

        {/* adding inline css style in react */}
        <p style={{ color: 'salmon', backgroundColor: 'cyan' }}>Adding style in a new way</p>

        {/* js object within html tag */}
        <p>About My Love : {detailInfo.name}. His occupation is : {detailInfo.job}</p>

        {/* learning about components */}
        <Person></Person>
        <Person></Person>

        <Dog> </Dog>
        <Cat></Cat>
        <Dog></Dog>
        <Cat></Cat>

        <Dynamic name="Vondul Mia" age="12"></Dynamic>
        <Dynamic name="Sandy" age="2"></Dynamic>
        <Dynamic name={myPet[2]} age="5"></Dynamic>
      </header>
    </div>
  );
}

// component 
function Person() {
  return <p style={{ border: '3px solid gray', margin: '10px', borderRadius: '10px' }}>This is my first component</p>
}

// component
function Dog() {
  return (
    <div style={{ backgroundColor: 'salmon', boxShadow: '5px 5px 10px gray', borderRadius: '10px', padding: '10px', margin: '20px' }}>
      <h1>Hero of the year : Vondul</h1>
      <p>when returning multiple tag from a component we have to use a div containing all the tag</p>
    </div>
  );
}

// component without props
function Cat() {
  const vondulStyle = {
    backgroundColor: 'cyan',
    boxShadow: '5px 5px 10px gray',
    borderRadius: '10px',
    padding: '10px',
    margin: '20px'
  }
  return (
    <div style={vondulStyle}>
      <h1>Hero of the year : Vondul</h1>
      <p>when returning multiple tag from a component we have to use a div containing all the tag</p>
    </div>
  );
}

// component using props
function Dynamic(props) {
  return (
    <div style={{ backgroundColor: 'gray', boxShadow: '5px 5px 10px pink', borderRadius: '10px', padding: '10px', margin: '20px' }}>
      <h3>Hero of the year : {props.name}</h3>
      <p>Pass Dynamic data to component, props in react</p>
      <p>Stay in my life {props.age} years </p>
    </div>
  );
}


export default App;
