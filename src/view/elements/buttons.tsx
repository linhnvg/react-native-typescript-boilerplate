import * as React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { GLOBAL } from '../styles/global';
import { CText } from './custom';

type Callback = () => any;
export interface Props {
  title: string;
  onClick: Callback;
  style?: ViewStyle;
}

export interface IconProps {
  icon: React.ReactElement;
  onClick: Callback;
  style?: ViewStyle;
}

/**
 * Default Button
 */
const BUTTON_PRIMARY = ({ title, onClick, style }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={onClick}
  >
    <CText style={GLOBAL.CTA.Style.primaryText}>{title.toLocaleUpperCase()}</CText>
  </TouchableOpacity>
);

/**
 * Default Button
 */
const BUTTON_SECONDARY = ({ title, onClick, style }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.secondary, style]}
    onPress={onClick}
  >
    <CText style={GLOBAL.CTA.Style.secondaryText}>{title}</CText>
  </TouchableOpacity>
);

/**
 * Category Icon Button
 */
const BUTTON_CATEGORY = ({ icon, onClick, style }: IconProps) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.categoryIcons, style]}
    onPress={onClick}
  >
    {icon}
  </TouchableOpacity>
);

export {
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  BUTTON_CATEGORY
};
