import React from 'react';
import axios from 'axios';

export default class AddIssueToUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            comment: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const issue = {
            comment: document.getElementById("comment").value,
        };

        axios.post('http://localhost:8869/issues/add?comment=' + issue.comment + '&userId=' + this.props.id
            ).then(() => {
                window.location.reload();
            }).catch(err => {
                alert(err);
            });
    }

    render() {
        return (
            <div className='addIssueToUser'>
                <div>
                    <div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addIssueToUser">+ Add Issue</button>
                    </div>
                    <div className="modal fade" id="addIssueToUser" tabIndex="-1" role="dialog" aria-labelledby="addIssueToUserLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addIssueToUserLabel">Fyll users information</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <form onSubmit={this.handleSubmit}>
                                            <input type="text" id="comment" className="form-control" placeholder="Comment" onChange={this.handleChange} />
                                            <button type="button" className="btn btn-primary" type="submit" value="Submit">Save</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}