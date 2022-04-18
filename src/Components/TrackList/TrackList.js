import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track";

export class TrackList extends React.Component {
    mappingTracks() {
        const trackArray = this.props.tracks;
        trackArray.map(tracks => {
            return(
                <Track
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove} 
                    track={tracks} 
                    key={tracks.id} />
            )
        })
    }
    
    render() {
        return (
            <div className="TrackList">
                {this.mappingTracks()}
            </div>
        )
    }
}