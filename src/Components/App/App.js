
import React from 'react';
import './App.css';
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.setState({playlistTracks: [...this.state.playlistTracks, track]});
    }
  }

  removeTrack(track) {
    const newPlaylistTracksState = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: newPlaylistTracksState}); 
  }

  savePlaylist() {
    let trackUrls = this.state.playlistTracks.map(track => track.url);
    return trackUrls;
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              onAdd={this.addTrack} 
              searchResults={this.state.searchResults} />
            <Playlist 
              isRemoval={false}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
              onRemove={this.removeTrack} 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
};

