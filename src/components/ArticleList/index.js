import React, { PureComponent} from 'react';
import Article from '../Article';
import './style.css';

export default class ArticleList extends PureComponent {
    state = {
        openedArticleId: null
    };

    render() {
        const articleElements = this.props.articles.map((a, i) =>
            <li key={a.id} className="article-list__li" onClick={this.handleClick.bind(this, a.id)}>
                <Article article={a}
                         isOpen={this.state.openedArticleId === a.id}
                         onButtonClick={this.handleClick.bind(this, a.id)}
                />
            </li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openedArticleId => {
        this.setState({
            openedArticleId: this.state.openedArticleId === openedArticleId ? null : openedArticleId
        })
    }
}