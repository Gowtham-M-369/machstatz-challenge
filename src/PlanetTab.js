
import React from 'react'
import { Card,Icon } from 'semantic-ui-react'

 class Planets extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return <div>
       <Card.Group itemsPerRow={3}>
        {
            this.props.planet?this.props.planet.map((planet)=>{
                    return <Card key={planet.id}>
                    <Card.Content>
                        <Card.Header content={planet.name}/>
                    </Card.Content>
                    <Card.Content>
                            <Icon name='like' color={planet.isFavourite ? "red" : null} onClick={()=>this.props.planetupdate(planet.id,planet.isFavourite)}/>
                    </Card.Content>
                    </Card>
               
                }):null
        }
        </Card.Group>
    </div>
    }
}

export default Planets;