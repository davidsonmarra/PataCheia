import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  timesContainer: {
    padding: 16,
    borderColor: '#321321',
    borderWidth: 1,
    borderRadius: 8,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeDeleteText: {
    color: 'red',
  },
  addTimesButton: {
    marginTop: 16,
    justifyContent: 'center',
  },
  addTimesButtonText: {
    textAlign: 'center',
  },
  addPetButton: {
    padding: 15,
    backgroundColor: 'orange',
    alignItems: 'center',
    position: 'absolute',
    left: 24,
    bottom: 24,
    borderRadius: 8,
  },
  addPetButtonText: {
    color: 'white',
  },
  releaseFeedButton: {
    padding: 16,
    backgroundColor: 'blue',
    alignItems: 'center',
    position: 'absolute',
    right: 24,
    bottom: 24,
    borderRadius: 8,
  },
});
