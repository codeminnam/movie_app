import React from "react";
import "./Detail.css";

export default class extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
        return (<div className="detail__container">
            <h1>{location.state.title}</h1>
            <p>{location.state.year}</p>
            <ul className="detail__genres">
                {location.state.genres.map((genre, index) => (
                    <li key={index}>
                        {genre}
                    </li>
                ))}
            </ul>
            <p>{location.state.summary}</p> 
            </div>);
        }else{
            return null;
        }
    }
}