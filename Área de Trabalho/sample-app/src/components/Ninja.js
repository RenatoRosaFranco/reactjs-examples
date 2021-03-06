import React, { Component } from 'react';

class Ninjas extends Component {

    render() {
        const ninjas = this.props.ninjas;
        const ninjaList = ninjas.map((ninja) => {
            if (ninja.age > 20 ) {
            return <div key={ninja.id} className={'ninja'}>
                        <div>Name: { ninja.name } </div>
                        <div>Age: { ninja.age} </div>
                        <div>Belt: { ninja.belt } </div>
                    </div>
                    }else {
                        return null;
                    }
        })

        return(
            <div className={'ninja-list'}>
                {ninjaList}    
            </div>
        )
    }
}

export default Ninjas;