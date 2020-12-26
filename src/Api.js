
import React from 'react';
import { Tab } from 'semantic-ui-react'
import  Favourite  from './FavouritesTab'
import  Planets  from './PlanetTab'

class Home extends React.Component{
    constructor(){
        super()
            this.state={
                    keyword:'',
                    planet:[],
                    isloaded:true,
             
        }
    }
    // fetch planets
    componentDidMount(){
        fetch("https://assignment-machstatz.herokuapp.com/planet")
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                isloaded:false,
                planet:json,
            })})
        .catch(error=>{
            console.error(error);
            alert('Failed to fetch results')
        });
        }
    // update isFavourite for a given planet planetid
    planetupdate(planetid,favourites) {
        console.log(favourites);
        let i=this.state.planet.findIndex(planet=>planetid===planet.id);
        let update=this.state.planet[i];
        update.isFavourite=!favourites;
        let planet=this.state.planet;
        planet[i]=update;
        this.setState({planet});
    }
  
    render()
    {   
        console.log(this.state.planet);
        var {isloaded}=this.state;
            const panes=[
                {menuItem:'Planet', render:()=> <Tab.Pane loading={isloaded}><Planets planet={this.state.planet} planetupdate={this.planetupdate.bind(this) }/> </Tab.Pane> },
                {menuItem:'Favourites', render:()=> <Tab.Pane><Favourite planet={this.state.planet} planetupdate={this.planetupdate.bind(this)} /></Tab.Pane> },
            ]
        return(
        <div className="App">
               <Tab panes={panes}/>
            </div>        
        );
    

}
}
export default Home;