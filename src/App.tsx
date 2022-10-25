import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { InputNumber } from './component/input/inputNumber/InputNumber';
import { InputText } from './component/input/inputText/inputText';
import Grid from '@mui/material/Grid';
import IconLabelButton from './component/button/iconLabelButton/IconLabelButton';
import { InputUpload } from './component/input/inputUpload/inputUpload';
import { cp } from 'fs/promises';
import { getSizeMap } from './component/function/getSizeMap';
import { fillMapWithPlaine } from './component/function/fillMapWithPlaine';
import { fillMapWithStuffAndGetAventurier } from './component/function/fillMapWithStuffAndGetAventurier';
import { simulateAventure } from './component/function/simulateAventure';
import { output } from './component/function/output';

function App() {

  const [outputDisplay, setOutputDisplay] = useState( { elementInMap:[""], map:[""]});
  const [error, setError] = useState("")

  function handleClick(event:any)
  {
    const read = new FileReader()
    read.onload = handleFileLoad
    read.readAsText(event.target.files[0])
  }

  function handleFileLoad(event:any) {
    let file:any =  event.target.result.split("\r\n")
    let mapSize:any = getSizeMap(file)

    setError("")
    if (mapSize.error)
    {
      setError(mapSize.errorMessage)
    }
    else {
      if (mapSize.larg <= 0 || mapSize.larg > 100 || mapSize.haut <= 0 || mapSize.haut > 100)
      {
        setError("la taille de la carte n'est pas valide")
      }
      else {
        
        let treasureMap:any = fillMapWithPlaine(mapSize)
        let treasureAventure = fillMapWithStuffAndGetAventurier(treasureMap, file, mapSize)
        if (treasureAventure.error)
        {
          setError(treasureAventure.errorMessage)
        }
        else 
        {
          let resultas = simulateAventure(treasureAventure) 
          setOutputDisplay(output(resultas, mapSize))
        }
      }
    }
    

    
   
  }

  return (
    <div className="App">
      
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={4}>
          <form encType="multipart/form-data">
            {/* <IconLabelButton upload type="file" accept="text/html" name="files[]" onChange={(e: any) =>handleClick(e)}/> */}
            <InputUpload id="upload" type="file" accept="text/html" name="files[]" onChange={(e: any) =>handleClick(e)}/>
          </form>

          
        </Grid>
        </Grid>  
      
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        // spacing={2}
      >
        {outputDisplay?.elementInMap.map((el:any) => <Grid sx={{textAlign:"left"}} item xs={8}>{el}</Grid>)}
        {error !== "" && <Grid sx={{textAlign:"left"}} item xs={8}>{error}</Grid>}
          {/* {outputDisplay.map.map((el:any)=> <Grid item sx={{alignItems:"left"}} xs={8}>{el}</Grid>)} */}
      </Grid>
    </div>
  );
}

export default App;
