import React, {useState} from 'react';
import {AddTimeContainer} from './ui';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddTimeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());

  const onChange = (_: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const handleShowTimepicker = () => {
    showMode('time');
  };

  const handleGoBack = () => {
    navigation.replace('Home');
  };

  const handleSave = async () => {
    const times = await AsyncStorage.getItem('@patacheia-times');

    if (times) {
      const parsedTimes = JSON.parse(times);
      parsedTimes.push(date);
      await AsyncStorage.setItem(
        '@patacheia-times',
        JSON.stringify(parsedTimes),
      );
    } else {
      await AsyncStorage.setItem('@patacheia-times', JSON.stringify([date]));
    }

    navigation.goBack();
  };

  return (
    <AddTimeContainer
      date={date}
      goBack={handleGoBack}
      showTimepicker={handleShowTimepicker}
      save={handleSave}
    />
  );
};
