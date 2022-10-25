export function fillMapWithPlaine(mapSize:any)
  {
    let treasureMap: { [x: string]: any; }[] = []
    
    let i:number = 0
    let j:number = 0
    let line:any = []
    
    while (i !== mapSize.haut)
    {
      line = []
      j = 0
      while (j !== mapSize.larg)
        {
          line.push({type:"P", label:".", empty:true})
          j++
        }
        treasureMap.push(line)
      i++
    }

    return (treasureMap)
  }