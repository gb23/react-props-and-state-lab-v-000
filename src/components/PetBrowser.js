// import React from 'react';

// import Pet from './Pet';

// class PetBrowser extends React.Component {
//   render() {
//     return (
//       <div className="ui cards">
//         {/* <code>&lt;Pet /&gt;</code> &nbsp; components should go here */}
//         <Pet />
//       </div>
//     );
//   }
// }

// export default PetBrowser;
import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const renderPets = this.props.pets.map(pet => 
      <Pet 
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
      />
    )
    
    return (
      <div className="ui cards">
        {renderPets}
      </div>
    );
  }
}

export default PetBrowser;