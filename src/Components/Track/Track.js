import React from "react";
import "./Track.css";

export class Track extends React.Component {
    constructor(props) {
        super(props);
    }
    renderAction() {
        let buttonValue;
        if (this.props.isRemoval === true) {
            buttonValue = "-";
        } else {
            buttonValue = "+";
        }
        return <button className="Track-action">{buttonValue}</button>;
    }

    render() {
        return (
            <div class="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist}, {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>)

    }
}