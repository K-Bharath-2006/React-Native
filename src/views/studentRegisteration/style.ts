import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f3fdfc',
    paddingVertical: 24,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitleContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  pageSubtitle: {
    color: '#b4b4b4',
    fontSize: 16,
    marginLeft: 4,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 380,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    marginTop: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 18,
  },
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    color: '#222',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  registerButton: {
    backgroundColor: '#228ba0',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default styles;
