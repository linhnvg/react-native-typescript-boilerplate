import * as React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { Navigation } from 'react-native-navigation';
import { SCREENS } from '../../../constants/screen';

export interface Props {
  dummyText: string;
  componentId: string;
}

interface State {
  name: string;
}

class Dummy extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {}

  backNavigation = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  render() {
    const { dummyText, componentId } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <CText>Dummy Screen 1</CText>
        <CText>{`Prop passed: ${dummyText}`}</CText>
        <BUTTON_DEFAULT title={'Push 2'} onClick={() => { Navigation.push(componentId, { component: { id: SCREENS.Dummy2, name: SCREENS.Dummy2 } }) }} />
        <BUTTON_DEFAULT title={'Go Back'} onClick={this.backNavigation} />
      </SafeAreaView>
    );
  }
}

export default Dummy;
