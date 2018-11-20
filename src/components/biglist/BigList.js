import React from 'react';
import events from '../../events.json';
import './Table.css';


class BigList extends React.Component {

    render() {

        return (
            <div className="tb-container">
                <table className="tb">
                    <thead className="tb-head">
                        <tr>
                            <th>Seminar ID</th>
                            <th>Seminar Name</th>
                        </tr>


                    </thead>

                    <tbody className="tb-body">
                        {events.map((seminar) => (
                            <tr key={seminar.id}
                             onClick={() =>
                                this.props.history.push(`/seminar/${seminar.id}`)}
                                  >
                                <td><span className="tb-id">{seminar.id}</span></td>
                                <td><span className="tb-name">{seminar.name}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default BigList;