import { StyleSheet } from 'react-native';
import { GLOBAL } from '../../styles/global';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    ...GLOBAL.LAYOUT.SafeArea,
    display: 'flex',
    backgroundColor: TYPOGRAPHY.COLOR.Default,
    marginHorizontal: 10,
  },
});

export default styles;
