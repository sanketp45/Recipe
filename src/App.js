import React,{Component} from 'react';
import Recipe from './Components/Recipe';
import {Form,Button} from 'react-bootstrap';
import './App.css';

class App extends React.Component {
state={
 data:[],
 search:''

}
searchSet=(e)=>{
    this.setState({search:e.target.value})
}

 getRecipes =()=>
 {
     	
     const API_KEY="0627813dd08ac8f95e95e4065c3a6a07";
     const API_ID='3dc227a0';
     const req=`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
     fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${API_ID}&app_key=${API_KEY}`)
          .then(response => response.json())
          .then(json => this.setState({data:json.hits}))
 }
  render(){
   return (
    <div className="App">
      <Form className="form1">
        <Form.Group controlId="formBasicSearch">
		     <Form.Control type="email" placeholder="Enter something to search" onChange={this.searchSet}/>
		      <Button onClick={this.getRecipes}>
		         Search</Button>
	    </Form.Group>
     </Form> 
         {this.state.data.map(recipe =>(
            <Recipe title={recipe.recipe.label}
            calories={recipe.recipe.calories}
           ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image} 
              />
      	
        	))}
    </div>
  );
}
}
export default App;
