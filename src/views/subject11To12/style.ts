import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9F6',
    paddingTop: 14,
  },
  header: {
    color: '#C5C5C5',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 18,
    marginBottom: 10,
    marginTop: 6,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#929292',
    marginBottom: 32,
    textAlign: 'center',
  },
  card: {
    width: '88%',
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 7,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBoxText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36, // Vertically centers the text
  },
  iconImageWrapper: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#E8F0FF',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6A6A6A',
    marginTop: 2,
  },
  arrow: {
    fontSize: 22,
    color: '#CBCBCB',
    fontWeight: '700',
    marginLeft: 8,
  },
});
