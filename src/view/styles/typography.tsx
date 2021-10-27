import { Platform } from 'react-native';

const COLOR = {
  // CTA
  Primary: '#04C56A',
  Secondary: '#222222',
  Default: '#FFFFFF',
  DefaultSelected: '#222222',
  Border: '#E7E7E8',
  Success: '#2BC480',
  Warning: '#D91E5B',
  BgColor: '#F7F7F7',

  // Text
  Title: '#393939',
  SecondaryTitle: '#4E4E50',
  Paragraph: '#868686',

  // StatusBar
  StatusBar: 'transparent',
  DefaultBlue: '#3F51B5',
};

const FONT = {
  Primary: 'Helvetica',
  title: {
    fontSize: 22,
  },
  subtitle: {
    fontSize: 16,
    textStyle: {
      fontWeight: 'bold',
    },
    margin: 4,
  },
  paragraph: {
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  input :{
    height: 36,
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 18,
    paddingHorizontal: 12,
  },
  searchInput: {
    paddingHorizontal: 40,
  },
  price: {
    fontSize: 16,
    textStyle: {
      fontWeight: 'bold',
    },
    margin: 8,
  },
};

const BUTTON = {
  primary: {
    height: 54,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 8,
    text: {
      fontSize: 14,
    },
  },
  secondary: {
    height: 54,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 12,
    text: {
      fontSize: 12,
    },
  },
  category: {
    radius: 48,
    borderRadius: 24,
    marginVertical: 5,
    text: {
      fontSize: 16,
    },
  },
  cameraIcon: {
    radius: 36,
    borderRadius: 18,
    marginVertical: 0,
    marginLeft: 15,
    icon: { width: 22, height: 22 }
  },
};

const IMAGE = {
  borderRadius: 5
};

const SPACING = {
  page: 10,
};

const SHADOW = {
  shadowOpacity: 0.20,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 0 },
  elevation: Platform.OS === 'ios' ? 0 : 5,
};

const ELEMENTS = {
  SearchInput: {
    width: 24,
    height: 24,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  ProductDisplay: {
    width: '48%',
    marginBottom: 20,
  },
  SectionTitle: {
    marginBottom: 20,
  },
  CategoryIcons: { marginRight: 20 },
  Header: {
    marginVertical: 5
  },
  Card: { marginBottom: 30 },
  ListItem: { marginBottom: 20 },
  LinksWidget: {
    marginVertical: 20,
    fontSize: 20
  },
  BottomControl: {
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
  detailsContainer: {
    marginVertical: 20
  },
  BottomControlButton: {
    width: '48%'
  },
  Pill: {
    marginRight: 5,
    marginBottom: 20,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  PillLight: {
    borderWidth: 1,
    maxWidth: '50%',
    width: '100%',
  }
};

const TYPOGRAPHY = {
  COLOR,
  FONT,
  BUTTON,
  SPACING,
  SHADOW,
  ELEMENTS,
  IMAGE,
};

export { TYPOGRAPHY };
