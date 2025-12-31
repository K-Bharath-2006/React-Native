import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3fdfc',
    paddingTop: 48,
  },
  iconBackground: {
    width: 90,
    height: 90,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    margin:18,
  },
  logo: {
    width: 40,
    height: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    width: 320,
    height: 450,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  heading: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    color: '#444',
    marginTop:10,
  },
  underline: {
    height: 2,
    width: 60,
    backgroundColor: '#ddd',
    marginVertical: 7,
    alignSelf: 'center',
  },
  subheading: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
    lineHeight: 19,
    marginTop: 26,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
  },
  startLearningButton: {
    flex: 1,
    backgroundColor: '#5a6ef8',
    borderRadius: 16,
    paddingVertical: 14,
    
    alignItems: 'center',
    marginRight: 8,
    marginTop:18,
  },
  registrationButton: {
    flex: 1,
    backgroundColor: '#21a366',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 8,
    marginTop:18,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;
