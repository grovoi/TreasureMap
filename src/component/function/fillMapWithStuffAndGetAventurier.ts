export function fillMapWithStuffAndGetAventurier(treasureMap:any, file:any,mapSize:any)
{
  let coord:any = []
  let aventuriers: { label: any; name: any; x: any; y: any; orient: any; moove: any; treasure:any }[] = []
  let mooveNumber = 0
  let error = ""
  
  file.map((el:any) => {
    if (error !== "")
      return 

    if (el[0] === "M" || el[0] === "T")
    {
      coord = el.split(" -")

      if (coord.length >= 3 && mapSize.larg > parseInt(coord[1]) && mapSize.haut > parseInt(coord[2]))
      {
        let tempCoord  =  treasureMap[parseInt(coord[2])][parseInt(coord[1])]
        
        if ( tempCoord.type == "P")
          {
            if (el[0] === "M")
              treasureMap[parseInt(coord[2])][parseInt(coord[1])] = {type:el[0], label:el[0], empty:false}
            if (el[0] === "T")
            {
              treasureMap[parseInt(coord[2])][parseInt(coord[1])] = {type:el[0], label:el[0] + (parseInt(coord[3]) ? '(' + parseInt(coord[3]) + ')' : '(1)'), number:parseInt(coord[3]) ? parseInt(coord[3]) : 1, empty:true}
            }
          }
        else if (tempCoord.type == "T")
        {
          if (el[0] === "T")
          {
            let tempTreasure = treasureMap[parseInt(coord[2])][parseInt(coord[1])].number
            tempTreasure = parseInt(coord[3]) ? tempTreasure + parseInt(coord[3]) : tempTreasure + 1
            treasureMap[parseInt(coord[2])][parseInt(coord[1])].number = tempTreasure
            treasureMap[parseInt(coord[2])][parseInt(coord[1])].label = 'T(' + tempTreasure + ')'
          }
        }
      }
      else 
      {
        error = 'format non valide'
        return
      }
    }

    if (el[0] === 'A')
    {
      let info = el.split(" - ")
      if (info.length === 6)
        {
          if(treasureMap[info[2]][info[3]].empty === true)
          {
            aventuriers.push({label:info[0] + '(' + info[1] + ")", name:info[1], x:parseInt(info[2]), y:parseInt(info[3]), orient:info[4], moove:info[5], treasure: 0})
            treasureMap[info[2]][info[3]].empty = false
          }
          else {
             error = "Deux aventurier ne peuvent pas commencer sur la meme case !"
             return
          }
          if (info[5].length  > mooveNumber)
            mooveNumber = info[5].length
        }
    }
  })

  if (error !== "")
  {
    return ({error:true, errorMessage:error})
  }
  return({treasureMap, aventuriers, mooveNumber, error:false, errorMessage:""})
}