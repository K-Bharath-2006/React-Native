import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF9F6',
    paddingTop: 12,
  },
  header: {
    color: '#C5C5C5',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 10,
    marginTop: 5,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 49,
    marginBottom: 9,
  },
  subtitle: {
    fontSize: 14,
    color: '#929292',
    textAlign: 'center',
    marginBottom: 30,
    marginTop:7,
  },
  cardsList: {
    width: '100%',
    alignItems: 'center',
    marginTop:25,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '88%',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
  },
  cardIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContent: {
    flex: 1,
  },
  subjectTitle: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  subjectInfo: {
    fontSize: 13,
    color: '#6A6A6A',
    marginTop: 2,
  },
  arrow: {
    fontSize: 22,
    color: '#CBCBCB',
    fontWeight: '700',
    marginLeft: 12,
  },
});
