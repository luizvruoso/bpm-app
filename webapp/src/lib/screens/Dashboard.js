import React, {Component} from 'react';
import Card from '../components/Card/index';


 class Dashboard extends Component {
    constructor(props) {
      super(props);
        
    }
  
    render() {
      return (

        <div className="col-10 containerDash">
          <div className="row">
                <div className="col-12">
                      <p>Dashboard</p>

                  </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Card/>
                </div>
                <div className="col-12">
                    <Card/>
                </div>
             </div>
        </div>

);
    }
  }
  
  
  export default Dashboard;