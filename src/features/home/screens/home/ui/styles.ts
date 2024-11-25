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
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerSubView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attButtonText: {
    color: 'blue',
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
  petsContainer: {
    padding: 16,
    borderColor: '#321321',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 24,
  },
  petsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  petCard: {
    width: '48%',
    padding: 8,
    borderColor: '#321321',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
  },
  petImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});
