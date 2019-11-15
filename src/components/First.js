import React, {Component} from 'react';
import Switch from "react-switch";
import FlipMove from 'react-flip-move';


const User = ({user: {userId, id, title, body}}) => (

    <div
        style={{
            width: "90vw",
            backgroundColor: "black",
            color: "green",
            padding: 10,
            margin: "10px auto",
            borderRadius: 3
        }}
    >
        <hr/>
        <p>User ID: {userId}</p>
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
        <Switch onChange={First.onSwitch} checked={false}/>
    </div>
)


class First extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            input: '',
        }

        this.render = this.render.bind(this);
    }

    static onSwitch() {

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Here you need to use an temporary array to store NeededInfo only
                let tmpArray = []
                for (let i = 0; i < data.length; i++) {
                    tmpArray.push(<User key={data[i].id} user={data[i]}/>/*data[i].NeededInfo*/)
                }

                tmpArray.map(user => (<User key={user.id} user={user}/>))

                this.setState({
                    users: tmpArray
                })
            })
            .catch(error => alert(error.message));
    }

    onChangeHandler(e) {
        this.setState({
            input: e.target.value,
        })
    }

    render() {
        const list = this.state.users
            .filter(d => this.state.input === '' || d.props.user.title.includes(this.state.input) || d.props.user.body.includes(this.state.input))
            .map((d, index) => <li key={index}>{d}</li>);

        const TopArticles = (
            <FlipMove>
                {list}
            </FlipMove>
        );

        return (<div>
            <div>
                <input value={this.state.input} type="text"
                       className="form-control"
                       onChange={this.onChangeHandler.bind(this)}
                       placeholder="Type here to filter"
                />
            </div>
            <ul>{TopArticles}</ul>
        </div>)
    }
}

export default First;
