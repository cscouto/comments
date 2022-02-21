import React from "react";
import ReactDOM from "react-dom";
import Comment from './Comment';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    const item = {
        'author': 'Tiago',
        'comment': 'Nice blog post!',
        'date': 'Today at 6:00pm'
    };
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment item={item} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment item={item} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment item={item} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);