import React from "react";
import "./Track.css";

export class Track extends React.Component {
    renderAction() {
        let buttonValue;
        if (isRemoval == true) {
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
                    <h3>"track name will go here"</h3>
                    <p>"track artist will go here, track album will go here"</p>
                </div>
                {this.renderAction}
            </div>)

    }
}