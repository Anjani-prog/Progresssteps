import React, { useRef, useState, useEffect } from 'react';

import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';



const ProgressCircle = (props) => {
  const { step, CompletedSteps, setCompletedSteps } = props;
  return (
    <TouchableOpacity
      style={[styles.circle, (step <= CompletedSteps) ? styles.activeorCompleted : styles.inactiveColor]}
      onPress={() => (step ? setCompletedSteps(step) : null)} />
  )
}


const LabelBar = (props) => {

  const { step, CompletedSteps, setCompletedSteps } = props;


  return (
    <View style={[styles.barContainer,]}>
      <Text style={[styles.label, (step <= CompletedSteps) ? { color: '#2190F9' } : { color: '#d9d7d4' }]}>STEP {step}</Text>
      <TouchableOpacity style={[styles.bar, (step <= CompletedSteps) ? styles.activeorCompleted : styles.inactiveColor]}
        onPress={() => (step ? setCompletedSteps(step) : null)} />
    </View>
  )
}


function HorizontalProgressBar({ CompletedSteps, setCompletedSteps }) {

  return (
    <View style={styles.progressContainer}>

      <ProgressCircle step={0} CompletedSteps={CompletedSteps} />

      <LabelBar step={1} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />
      <ProgressCircle step={1} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />

      <LabelBar step={2} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />
      <ProgressCircle step={2} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />

      <LabelBar step={3} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />
      <ProgressCircle step={3} CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />

    </View>
  )
}


export default function App({ }) {
  const [CompletedSteps, setCompletedSteps] = useState(1);

  return (
    <View style={{ height: 100, width: '100%', marginTop: 20 }}>
      <HorizontalProgressBar CompletedSteps={CompletedSteps} setCompletedSteps={setCompletedSteps} />
    </View>
  )
}


const styles = StyleSheet.create({
  circle: {
    height: 15,
    width: 15,
    borderRadius: 7.5,
  },
  label: {
    textAlign: 'center',
    bottom: 5,
    fontSize: 12,
    // fontFamily: 'Roboto-Bold'
  },
  inactiveColor: {
    backgroundColor: '#d9d7d4'
  },
  activeorCompleted: {
    backgroundColor: '#2190F9'
  },
  bar: {
    height: 5,
    width: '100%',
  },
  barContainer: {
    width: '30%',
    height: 40,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '8%',
    flex: 1
  }
});
