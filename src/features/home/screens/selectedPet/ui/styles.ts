import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    alignSelf: 'center',
  },
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  petContainerSelected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#90ee9055',
    backgroundColor: '#90ee9055',
    borderRadius: 5,
  },
  petImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
  },
});
