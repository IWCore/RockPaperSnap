import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const COLORS ={
  background: '#FFFFFF',
  surface: '#F8FAFC',
  text: '#1E293B',
  secondaryText: '#64748B',
  border: '#E2E8F0',
  rock: '#EF4444',
  paper: '#0D9488'
  scissors: '#0D97706',
  vs: '#6366F1',
  win: '#0D9488',
  draw: '#D97706',
  loss: '#EF4444'
};

const CHOICES =[
  {name:'Rock', emoji:'✊', color: COLORS.rock},
  {name:'Paper', emoji:'🖐', color: COLORS.paper},
  {name:'Scissors', emoji:'✌️', color: COLORS.scissors},
];

export default function PlayScreen() {
  const [userChoice, setUserChoice] = useState<(typeof CHOICES)[number]|null>(null);
  const [computerChoice, setComputerChoice] = useState<(typeof CHOICES)[number]|null>(null);
  const [result, setResult] = useState('Make your movel');
  const [resultColor, setResultColor] = useState(COLORS.text);
  const [score, setScore] = useState({ wins:0, draws:0, losses: 0});

  const playGame = (choice: (typeof CHOICES)[number])=>();

  const resetGame = () =>{};

  return()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  header:{
    fontSize: 32,
    fontWeight: '900',
    color: COLORS.text,
    letterSpacing: 0.5,
  },
  subtitle:{},
  scoreboard:{},
  scoreColumn:{},
  scoreLabel:{},
  scoreValue:{},
  scoreDivider:{},
  arena:{},
  playerSection:{},
  playerTitle:{},
  emojiCircle:{},
  emojiText:{},
  vsBadge:{},
  vsText:{},
  resultContainer:{},
  resultText:{},
  instruction:{},
  buttonContainer:{},
  button:{},
  buttonEmoji:{},
  buttonText:{},
});
