`<Periodic>` – 🕐🕑🕒📆 Form inputs for periodic or recurring times – daily, weekly, or monthly at a chosen time

## UI

A segmented control for daily, weekly, or monthly. Weekdays are multi-select, day of month is a `Picker`, and time is a `DatePickerIOS` (the only iOS component - if you want an Android version, let me know). If you need anything to be more customizable, send me a PR!

### Demo

```sh
git clone git@github.com:lorensr/react-native-periodic.git
cd react-native-periodic
npm i
npm run storybook
```

```sh
open http://localhost:7007/
react-native run-ios
```

Select an example in the browser and see the demo in the simulator. You may need to refresh to get them started.

### Daily

![daily](https://www.dropbox.com/s/09xps36evb22ynq/Screenshot%202016-08-28%2014.49.20.png?raw=1)

### Weekly

![weekly](https://www.dropbox.com/s/rayw2z2qq0ghuxq/Screenshot%202016-08-28%2014.52.23.png?raw=1)

### Monthly

![monthly](https://www.dropbox.com/s/nxd0v75u8z9gofl/Screenshot%202016-08-28%2014.53.26.png?raw=1)

## Usage

```jsx
<Periodic
  ref="periodic"
  initialState={{
    period: 'Weekly',
    date: new Date,
    weekdays: ['Monday', 'Friday']
  }}
  segmentedControl={{
    tint: 'white',
    backTint: 'gray',
  }}
  />
<Button onPress={() => console.log(this.refs.periodic.state)}>
  Submit
</Button>
```

Only the time part of `state.date` is used. If `state.period` is `'Daily'`, only `state.date` is used. If it's `'Weekly'`, `state.date` and `state.weekdays` are used. If it's `'Monthly'`, `state.date` and `state.dayOfMonth` is used.

Props are optional:

```
segmentedControl: PropTypes.object,
initialState: PropTypes.shape({
  period: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  weekdays: PropTypes.arrayOf(PropTypes.string),
  dayOfMonth: PropTypes.string,
})
```

`segmentedControl` is passed to the [`SegmentedControls` component](https://github.com/ArnaudRinquin/react-native-radio-buttons#full-javascript-segmentedcontrols-clone) as props.

## Credits

- Contributions by [these fine folks](https://github.com/lorensr/react-payment/graphs/contributors)
- Segmented control component from [`react-native-radio-buttons`](https://github.com/ArnaudRinquin/react-native-radio-buttons)
- Multiple choice component from [`react-native-multiple-choice`](https://github.com/d-a-n/react-native-multiple-choice)
