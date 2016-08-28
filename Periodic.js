import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Picker,
  DatePickerIOS,
} from 'react-native';

import _ from 'lodash'
import { SegmentedControls } from 'react-native-radio-buttons'
import MultipleChoice from 'react-native-multiple-choice'

const PERIODS = [
  'Daily',
  'Weekly',
  'Monthly',
]

const DAYS_OF_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default class Periodic extends Component {

  static propTypes = {
    segmentedControl: PropTypes.object,
    initialState: PropTypes.shape({
      period: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      weekdays: PropTypes.arrayOf(PropTypes.string),
      dayOfMonth: PropTypes.string,
    })
  }

  constructor(props) {
    super(props)

    this.state = _.assign({
      period: 'Daily',
      date: new Date,
      weekdays: [],
      dayOfMonth: null,
    }, this.props.initialState)

    this.setPeriod = this.setPeriod.bind(this)
    this.setTime = this.setTime.bind(this)
    this.setDayOfMonth = this.setDayOfMonth.bind(this)
  }



  setPeriod(period) {
    this.setState({ period })
  }

  setTime(date) {
    this.setState({ date })
  }

  setDayOfMonth(dayOfMonth) {
    this.setState({ dayOfMonth })
  }

  render() {
    let weekdays, dayOfMonth

    if (this.state.period === 'Weekly') {
      weekdays = (
        <MultipleChoice
          style={{
            marginTop: 30,
          }}
          options={DAYS_OF_WEEK}
          selectedOptions={this.state.weekdays}
          />
      )
    }

    if (this.state.period === 'Monthly') {
      dayOfMonth = (
        <View>
          <Text
            style={{
              marginTop: 30,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Day of Month:
          </Text>
          <Picker
            selectedValue={this.state.dayOfMonth}
            onValueChange={this.setDayOfMonth}
            >
            {
              _.range(1,32).map((day) => (
                <Picker.Item
                  key={day + ''}
                  label={day + ''}
                  value={day + ''} />
              ))
            }
          </Picker>
        </View>
      )
    }

    return (
      <View style={{width: 300}}>

        <SegmentedControls
          {...this.props.segmentedControl}
          optionContainerStyle={{ flex: 1 }}
          options={ PERIODS }
          onSelection={ this.setPeriod }
          selectedOption={ this.state.period }
          />

        {weekdays}

        {dayOfMonth}

        <DatePickerIOS
          date={this.state.date}
          mode="time"
          minuteInterval={5}
          onDateChange={this.setTime}
          />

      </View>
    )
  }
}
