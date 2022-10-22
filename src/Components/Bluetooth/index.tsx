import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { BleManager } from 'react-native-ble-plx';

interface BluetoothProps {}

function scanForDevices(manager: BleManager, deviceName: string) {
    manager.startDeviceScan(null, null, (err, device) => {
        if (err) throw err;

        manager.stopDeviceScan();
        device?.connect()
        console.log(device?.manufacturerData);
    })
}

const Bluetooth: React.FC<BluetoothProps> = ({}: BluetoothProps) => {
  React.useEffect(() => {
    const manager = new BleManager();

    const f = manager.onStateChange((state) => {
        if (state == 'PoweredOn') {
            
        }
    }, true)
  }, []);

  return <View></View>;
};

const styles = StyleSheet.create({});

export default Bluetooth;
