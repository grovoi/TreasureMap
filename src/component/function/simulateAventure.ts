export function simulateAventure(treasureAventure:any)
{
  let i = 0
  while (i < treasureAventure.mooveNumber)
  {
    treasureAventure.aventuriers.map((el:any)=> {
      let moove = el.moove
      let x = el.x
      let y = el.y
      if (moove[i]){

      if (moove[i] === 'A')
        {
          if (el.orient === "O" && y !== 0 && treasureAventure.treasureMap[x][y - 1].type !== "M" && treasureAventure.treasureMap[x][y - 1].empty)
              {
                treasureAventure.treasureMap[x][y].empty = true
                el.y = y - 1
                treasureAventure.treasureMap[x][el.y].empty = false
                treasureAventure.treasureMap[x][el.y].who = el.label
              }
          if (el.orient === "E" && treasureAventure.treasureMap[x][y + 1] && treasureAventure.treasureMap[x][y + 1].type !== "M"  && treasureAventure.treasureMap[x][y + 1].empty)
              {
                treasureAventure.treasureMap[x][y].empty = true
                el.y = y + 1
                treasureAventure.treasureMap[x][el.y].empty = false
                treasureAventure.treasureMap[x][el.y].who = el.label
              }
          if (el.orient === "S" && treasureAventure.treasureMap[x + 1] && treasureAventure.treasureMap[x + 1][y].type !== "M" && treasureAventure.treasureMap[x + 1][y].empty)
              {
                treasureAventure.treasureMap[x][y].empty = true
                el.x = x + 1
                treasureAventure.treasureMap[el.x][y].empty = false
                treasureAventure.treasureMap[el.x][y].who = el.label
              }
          if (el.orient === "N" && x !== 0 && treasureAventure.treasureMap[x - 1][y].type !== "M" && treasureAventure.treasureMap[x - 1][y].empty)
              {
                treasureAventure.treasureMap[x][y].empty = true
                el.x = x -1
                treasureAventure.treasureMap[el.x][y].empty = false
                treasureAventure.treasureMap[el.x][y].who = el.label
              }
          if (treasureAventure.treasureMap[el.x][el.y].type === "T")
          {
            el.treasure = el.treasure + 1
            treasureAventure.treasureMap[el.x][el.y].number = treasureAventure.treasureMap[el.x][el.y].number - 1
            treasureAventure.treasureMap[el.x][el.y].label = 'T(' + treasureAventure.treasureMap[el.x][el.y].number + ')'
            if (treasureAventure.treasureMap[el.x][el.y].number === 0)
            {
              treasureAventure.treasureMap[el.x][el.y] = {type:"P", label:".", empty:false, who:el.label}
            }
          }
        }
        else if (moove[i] === 'D') {
          if (el.orient == "N")
            el.orient = "E"
          else if (el.orient == "E")
            el.orient = "S"
          else if (el.orient == "S")
            el.orient = "O"
          else if (el.orient == "O")
            el.orient = "N"
        }
        else if (moove[i] === 'G') {
          if (el.orient == "N")
            el.orient = "O"
          else if (el.orient == "O")
            el.orient = "S"
          else if (el.orient == "S")
            el.orient = "E"
          else if (el.orient == "E")
            el.orient = "N"
        }
        }
      })
      
    i++
  }
  return (treasureAventure)
}