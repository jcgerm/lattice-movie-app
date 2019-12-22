import React from 'react';

class SearchBar extends React.PureComponent {
    state = { movieTitle: '' };

    handleChange = event => {
        this.setState({ movieTitle: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.doSearch(this.state.movieTitle);
        this.setState({ movieTitle: '' });
    };

    render() {
        return (
            <div className="searchBar">
                <div className="popular" onClick={this.props.showPopularMovies}>
                    Return to Popular Movies
                </div>
                <div className="searchBox">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.movieTitle}
                            onChange={this.handleChange}
                            placeholder="Search for a movie title..."
                            required
                        />
                        <button>Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
