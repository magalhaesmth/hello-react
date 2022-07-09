import React from "react";
import './Footer.css';

class Footer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Footer">
                <h1>Esse é o rodapé</h1>
            </div>
        );
    }
}
export default Footer;