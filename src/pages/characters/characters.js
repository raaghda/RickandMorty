import React, { PureComponent } from 'react';
import './characters.scss';
import Header from 'components/header/header';
import Menu from 'components/menu/menu';

class Characters extends PureComponent {
  componentDidMount() {
      fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(
          (characterResponse) => {
            this.setState({
              isLoaded: true,
              characters: characterResponse,
            });
          },
          () => {
            this.setState({
              isLoaded: true,
              error: true,
            });
          }
        )
  }
  state = { isLoaded: false, error: false, characters: { results: [] } };
  render() {
    console.log(this.state.characters.results);
    return (
      <>
        <Menu />
        <Header />
        <div className="wrap">
          <div className="character-list">
          {this.state.characters.results.map((e) => (
            <div className="character-item" key={e.id}>
            <div className="character-image"><img src={e.image} alt="character" height="290" width="290"/></div>
            <div className="character-name">{e.name}</div>
            <div className="character-status"><span>Status</span><div className="right-align">{e.status}</div></div>
            <div className="character-type"><span>Species</span><div className="right-align">{e.type}</div></div>
            <div className="character-gender"><span>Gender</span><div className="right-align">{e.gender}</div></div>
            <div className="character-origin"><span>Origin</span><div className="right-align">{e.origin.name}</div></div>
            <div className="character-location"><span>Last known location</span><div className="right-align">{e.location.name}</div></div>
            <div className="character-episode"><span>Appearance in episodes</span><div className="right-align">{e.episode.length}</div></div>
            </div>
          ))}
          </div>
        </div>
      </>
    );
    }
    }

export default Characters;
