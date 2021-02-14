import React, { Component } from 'react';
import "./UserRepos.css";

class UserRepos extends Component {

    userName = ({ name, avatarUrl }) => {
        return <div className="user-container">
            <div className="img-container"><img src={avatarUrl} /></div>
            <span>{name}</span></div>

    }

    showList = (details) => {
        console.log(details);
        return <div>
            <div className="text-right">{this.userName(details)}</div>
            <div className="text-right"><span className="mr-2">Showing {details.repositories.nodes.length} of {details.repositories.totalCount} </span>
                {details.repositories.totalCount > 10 && details.repositories.nodes.length !== details.repositories.totalCount ?
                    <button onClick={() => this.props.viewAll(details.repositories.totalCount)} className="btn btn-sm btn-link">View All</button> : null}
            </div>
            <div className="table-responsive">
                <table className={this.props.nightMode ? "table table-sm table-dark table-bordered" : "table table-sm table-bordered"}>
                    <thead>
                        <tr>
                            <th width="30%">Repository Name</th>
                            <th width="70%">Repository Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.repositories.nodes.map((repos, i) =>
                                <tr key={i}>
                                    <td className="text-left"><a href={repos.url} target="blank">{repos.name}</a></td>
                                    <td className="text-left"><span>{repos.description}</span></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }

    blank = () => {
        return <div>No User Found</div>
    }
    render() {
        return <div>{
            this.props.userDetails && this.props.userDetails.user ? this.showList(this.props.userDetails.user) : this.blank()
        }</div>
    }

}

export default UserRepos;