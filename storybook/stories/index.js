import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import PeriodicShell from '../../index.ios.js'
import CenterView from './CenterView'

storiesOf('Periodic', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('default', () => (
    <PeriodicShell />
  ))
  .add('with initialState', () => (
    <PeriodicShell
      initialState={{
        period: 'Weekly',
        date: new Date(Date.now() + 1000 * 60 * 60),
        weekdays: ['Monday', 'Wednesday'],
        dayOfMonth: "19",
      }}
      />
  ))
  .add('customized segmented control', () => (
    <PeriodicShell
      segmentedControl={{
        tint: 'white',
        backTint: 'gray',
      }}
      />

  ))
