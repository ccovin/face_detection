import React from 'react';

class Rank extends React.Component {
  constructor() {
      super();
      this.state = {
          emoji: ''
      }
  }
  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }
  
  componentDidUpdate(prevProps, prevState) {
      if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
          return null
      }
      this.generateEmoji(this.props.entries);
  }

  generateEmoji = (entries) => {
      fetch(`https://j2s7r80fpg.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
        .then(response => response.json())
        .then(data => this.setState({ emoji: data.input}))
        .catch(console.log)
  }

  render() {
    return (
        <div>
            <div className='purple b f2'>
                {`${this.props.name}, your current entry count is...`}  
            </div>
            <div className='purple b f1'>
                {this.props.entries}
            </div>
            <div className='purple b f2'>
                {`Rank Badge: ${this.state.emoji}`}
            </div>

        </div>
    );  
  }

}
export default Rank;