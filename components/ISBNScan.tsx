import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Button, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export const ISBNScan = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)

  useEffect(() => {
    BarCodeScanner.requestPermissionsAsync().then(({ status }) => {
      setHasPermission(status === 'granted')
    })
  }, [])

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string
    data: string
  }) => {
    setScanned(true)
    if (!data.startsWith('978') && !data.startsWith('979')) {
      alert('本じゃなさそうですけど、登録します')
    } else {
      alert('登録します')
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </>
  )
}
