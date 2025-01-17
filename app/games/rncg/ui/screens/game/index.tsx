import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, View,
} from 'react-native';
import styles from './styles';
import APP_CONSTANTS from '@/app/games/rncg/constants/app';
import TimerButton from '@/app/games/rncg/components/TimerButton';
import ResetButton from '@/app/games/rncg/components/ResetButton';
import DeveloperLabel from '@/app/games/rncg/components/DeveloperLabel';
import WinText from '@/app/games/rncg/components/WinText';
import SelectSquareSizeRow from '@/app/games/rncg/components/SelectSquareSize/SelectSquareSizeRow';
import { createColorArray, emptyItem } from '@/app/games/rncg/utils/utils';
import Square from '@/app/games/rncg/components/Square';
import ChangeLangButton from '@/app/games/rncg/components/ChangeLangButton';

function Game() {
  const [time, setTime] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [winTime, setWinTime] = useState(0);
  const [squareSideSize, setSquareSideSize] = useState(4);
  const [colorArray, setColorArray] = useState(null);
  const [selectedItem, setSelectedItem] = useState(emptyItem);
  const [square, setSquare] = useState(new Array(squareSideSize));
  const [userErrorCount, setUserErrorCount] = useState(0);
  //
  const itemsMargin = 2; // (12 - squareSideSize) / 2;
  const itemWidthAndHeight = ((APP_CONSTANTS.screenWidth
      - (((squareSideSize + 1) * 2) * itemsMargin) - 16) / squareSideSize);
  const winTextWidthAndHeight = (itemWidthAndHeight * squareSideSize)
      + squareSideSize * 2 * itemsMargin;

  useEffect(() => {
    const tmp = [...square];
    if (colorArray) {
      for (let i = 0; i < squareSideSize; i += 1) {
        tmp[i] = new Array(squareSideSize);
      }
      let counter = 1;
      for (let i = 0; i < squareSideSize; i += 1) {
        for (let j = 0; j < squareSideSize; j += 1) {
          tmp[i][j] = {
            num: counter,
            selected: false,
            color: colorArray?.[counter - 1],
            hidden: false,
          };
          counter += 1;
        }
      }
      //
      if (squareSideSize % 2 === 1) {
        for (let i = 0; i < squareSideSize; i += 1) {
          for (let j = 0; j < squareSideSize; j += 1) {
            let flag = 0;
            for (let k = 0; k < squareSideSize; k += 1) {
              for (let l = 0; l < squareSideSize; l += 1) {
                if (tmp[i][j].color === tmp[k][l].color && !(i === k && j === l)) {
                  flag += 1;
                }
              }
            }
            if (flag === 0) {
              const mid:number = Math.floor(squareSideSize / 2);
              tmp[i][j].color = tmp[mid][mid].color;
              tmp[mid][mid] = { ...emptyItem };
              tmp[mid][mid].hidden = true;
            }
          }
        }
      }
      //
      setSquare(tmp);
    }
  }, [colorArray]);

  const generateRandomColors = useCallback(() => {
    setTime(0);
    setWinTime(0);
    setIsWin(false);
    setUserErrorCount(0);
    setColorArray(createColorArray(squareSideSize));
  }, [squareSideSize]);

  useEffect(() => {
    const timer = setTimeout(() => setTime(time + 1), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  useEffect(() => {
    generateRandomColors();
  }, [squareSideSize]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated backgroundColor="#ffffff" barStyle="dark-content" />
      <ScrollView>
        <View style={{ alignItems: 'center', paddingTop: 24 }}>
          <SelectSquareSizeRow onPress={setSquareSideSize} squareSideSize={squareSideSize} />
          <TimerButton time={time} isWin={isWin} winTime={winTime} userErrorCount={userErrorCount} />
          {!isWin ? (
            <Square
              time={time}
              square={square}
              itemsMargin={itemsMargin}
              selectedItem={selectedItem}
              squareSideSize={squareSideSize}
              userErrorCount={userErrorCount}
              itemWidthAndHeight={itemWidthAndHeight}
              setIsWin={setIsWin}
              setSquare={setSquare}
              setWinTime={setWinTime}
              setSelectedItem={setSelectedItem}
              setUserErrorCount={setUserErrorCount}
            />
          ) : (<WinText winTextWidthAndHeight={winTextWidthAndHeight} />)}
          <ResetButton isWin={isWin} onPress={generateRandomColors} />
          <DeveloperLabel />
          <ChangeLangButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Game;
