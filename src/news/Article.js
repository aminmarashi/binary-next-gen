import React, { PropTypes } from 'react';

export default class Article extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        pubDate: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    };

    render() {
        const { content, pubDate, title } = this.props;

        return (
            <div>
                <h2>{title}</h2>
                <p>{pubDate}</p>
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        );
    }
}
