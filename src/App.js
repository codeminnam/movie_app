import React from 'react';
import PropTypes from "prop-types";

const memILike = [{
  id:1,
  name: "조승연",
  rating: 5
},
{
  id:2,
  name: "조유리",
  rating: 4
},
{
  id:3,
  name: "김민주",
  rating: 3
},
{
  id:4,
  name: "장원영",
  rating: 3
},
{
  id:5,
  name: "김채원",
  rating: 3
},
]

function Member({fav, rating}){
return (
<div>
  <h1>I love {fav}</h1>
  <h4>{rating} / 5</h4>
</div>);
}

Member.propTypes = {
  fav: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      {memILike.map(mem=>(
        <Member key={mem.id} fav={mem.name} rating={mem.rating}/>
      ))}
    </div>
  );
}

export default App;
