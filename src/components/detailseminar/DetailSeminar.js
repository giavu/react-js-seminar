import React from 'react';
import './DetailSeminar.css';
import events from '../../events.json';
class DetailSeminar extends React.Component {
   

     


    render() {
        const id = this.props.match.params.id;

        
        //events is an array,thus

        let index = id-1;

        // console.log(events[index]);

        let seminar=events[index];

        return (
            <div className="dt">
               <h1 className="dt-heading">{seminar.name}</h1>
        
               <div className="dt-container">
                  <div className="dt-item">
                    ID: <span className="dt-title"> {seminar.id}</span>
                  </div>
                  <div className="dt-item">
                     Presenter: <span className="dt-title">{seminar.presenter}</span>
                  </div>
                  <div className="dt-item">
                     Summary: <span className="dt-title">{seminar.summary}</span>
                  </div>
                  <div className="dt-item">
                     Room: <span className="dt-value">{seminar.room}</span>
                  </div>
                  <div className="dt-item">
                  Date: <span className="dt-value">{seminar.date}</span>
                  </div>
                  <div className="dt-item">
                  Time: <span className="dt-value">{seminar.date}</span>
                  </div>
               </div>
            </div>
           
        );
    }
}
export default DetailSeminar;