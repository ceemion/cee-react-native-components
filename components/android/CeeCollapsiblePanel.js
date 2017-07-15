import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import Mixins from '../../constants/Mixins';
import FAIcon from 'react-native-vector-icons/FontAwesome';

// You can set you color scheme externally with these keys
const color = {
  background: 'white',
  lightGrey: '#f7f7f7',
  mainText: '#4a4a4a',
  touchableBg: '#dee8ff'
};

type Props = {
  expanded: boolean
}


/** Usage

<CeeCollapsiblePanel title="Lorem Ipsum">
  <View>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </Text>
  </View>
</CeeCollapsiblePanel>
*/


class CeeCollapsiblePanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: true
    };
  }

  componentDidMount() {
    this.setState({expanded: this.props.expanded})
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.expanded === nextProps.expanded) return;
    this.setState({expanded: nextProps.expanded})
  }

  render() {
    let { expanded } = this.state,
        { title } = this.props,
        icon = <FAIcon name="angle-down" size={30} />,
        toggle = expanded => { this.setState({expanded}) };

    if (expanded) {
      icon = <FAIcon name="angle-up" size={30} />
    }

    return (
      <View style={styles.panelContainer}>
        <TouchableNativeFeedback
          onPress={() => toggle(!expanded)}
          background={TouchableNativeFeedback.Ripple(color.touchableBg)}
          underlayColor={color.touchableBg}>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <View>{icon}</View>
          </View>
        </TouchableNativeFeedback>

        <View style={styles.panelBody}>
          { expanded ? this.props.children : null }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    backgroundColor: color.white,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: color.lightGrey,
    borderTopColor: color.lightGrey
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  titleText: {
    color: color.mainText,
    // fontFamily: '', // Overide the text font here
    fontSize: 18
  },
  panelBody: {
    marginHorizontal: 20,
  }
});

export default CeeCollapsiblePanel;
