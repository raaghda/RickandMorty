import React, { PureComponent } from 'react';
import './episodes.scss';
import Header from 'components/header/header';
import Menu from 'components/menu/menu';

class Episodes extends PureComponent {
  componentDidMount() {
      fetch("https://rickandmortyapi.com/api/episode")
        .then(res => res.json())
        .then(
          (episodesResponse) => {
            this.setState({
              isLoaded: true,
              episodes: episodesResponse,
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
  state = { isLoaded: false, error: false, episodes: { results: [] } };
  render() {
    console.log(this.state.episodes.results);
    return (
      <>
        <Menu />
        <Header />
          <div className="wrap">
            <div className="episode-list">
              {this.state.episodes.results.map((e) => (
                <div className="episode-item" key={e.id}>
                  <div className="episode-season">{e.episode}</div>
                  <div className="episode-name"><span>Title</span><div className="right-align">{e.name}</div></div>
                  <div className="episode-date"><span>Air date</span><div className="right-align">{e.air_date}</div></div>
                </div>
              ))}
            </div>
          </div>
      </>
    );
  }
}

export default Episodes;
