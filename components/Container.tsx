import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

export const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  const styles = useStyles()
  return <View style={styles.container}>{children}</View>
}
