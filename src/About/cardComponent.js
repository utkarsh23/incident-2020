import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className={"slide" + this.props.state}>
            <div className="card">
                <div className="card__img" id={"img" + this.props.year}> </div>
                <div className="card__content"> 
                <p className="card__content-theme">{this.props.year}</p>
                <h2 className="card__content-header">{this.props.title}</h2>
                <p className="card__content-paragraph">
                <p>{this.props.p1}</p>
                <p>{this.props.p2}</p>
                <p>{this.props.p3}</p>
                <p>{this.props.p4}</p>
                </p><a className="card__content-link">Read  </a>
                </div>
            </div>
            </div>
        );
    }
}
 
export default Card;