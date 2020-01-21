import React, {Component} from 'react';
import '../../styles/App1.scss'
import dogg from '../../img/dog.jpg'
class Index extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Это собака</h1>
                </div>

                <img className='img' src={dogg}/>

            </div>

        );
    }
}

export default Index;