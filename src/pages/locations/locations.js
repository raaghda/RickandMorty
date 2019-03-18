import React, { PureComponent } from 'react';
import './locations.scss';
import Header from 'components/header/header';
import Menu from 'components/menu/menu';


class Locations extends PureComponent {
  componentDidMount() {
      fetch("https://rickandmortyapi.com/api/location")
        .then(res => res.json())
        .then(
          (locationResponse) => {
            this.setState({
              isLoaded: true,
              locations: locationResponse,
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
  state = { isLoaded: false, error: false, locations: { results: [] } };
  render() {
    console.log(this.state.locations.results);
    return (
      <>
        <Menu />
        <Header />
        <div className="wrap">
          <div className="location-list">
            {this.state.locations.results.map((e) => (
              <div className="location-item" key={e.id}>
                <div className="location-name">{e.name}</div>
                <div className="location-type"><span>Type</span><div className="right-align">{e.type}</div></div>
                <div className="location-dimension"><span>Dimension</span><div className="right-align">{e.dimension}</div></div>
                <div className="location-residents"><span>Residents</span><div className="right-align">{e.residents.length}</div></div>
              </div>
            ))}
          </div>
        </div>
      </>
);
}
}


export default Locations;
