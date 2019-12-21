import React from 'react';

class SearchBar extends React.PureComponent {
    state = { movieTitle: '' };

    handleChange = event => {
        this.setState({ movieTitle: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.movieTitle);

        this.props.doSearch(this.state.movieTitle);
    };

    render() {
        return (
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
        );
    }
}

export default SearchBar;
