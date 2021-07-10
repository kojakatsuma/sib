import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Container } from './components/Container'
import { ISBNScan } from './components/ISBNScan'

export default function App() {
  return (
    <Container>
      <ISBNScan />
    </Container>
  )
}
