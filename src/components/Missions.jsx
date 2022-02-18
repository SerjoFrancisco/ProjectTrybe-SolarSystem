import React from 'react';
import missions from '../data/missions';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div>
          {missions.map((mission) => (
            <div className="missions" key={ mission.name }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>))}
        </div>
      </>
    );
  }
}
export default Missions;
