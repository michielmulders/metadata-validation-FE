import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1>How to reach us?</h1>
                <p>You have several options to reach us:</p>
                <ul>
                    <li><a href="https://hedera.com/discord">Developer Discord</a> using "Community" -&gt; <strong>#feedback channel</strong></li>
                    <li>GitHub</li>
                </ul>
            </div>
        );
    }
}
