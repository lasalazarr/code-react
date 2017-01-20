import React, {Component} from 'react'

import {
	View,
	Text,
	StyleSheet
} from 'react-native'

class Quote extends Component {
	render(){
		//const quoteText = this.props.quoteText
		//const quoteSource = this.props.quoteSource
		return (
			 <View>
        		<Text>{this.props.quoteText}</Text>
        		<Text>{this.props.quoteSource}</Text>
      		</View>

			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161737',
  },
  readyText: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 20,
    padding: 10,
    marginBottom:20,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImage:{
    width: 200,
    height: 200,
  }
});

export default Quote