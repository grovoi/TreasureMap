export function output(result:any, mapSize:any)
  {
    let elementInMap: string[] = []

    let map: string[] = []
    let ligne = ""
    result.treasureMap.map((el:any, haut:number)=> {
      ligne = ""
      el.map((elem:any, larg:number) => {
        
        if (elem.type === "M")
        {
          elementInMap.unshift('M - ' + larg + " - " + haut)
        }
        if (elem.type === "T")
        {
          elementInMap.push('T - ' + larg + " - " + haut + " - " + elem.number)
        }
        if (elem.empty || (!elem.empty && elem.type === "M"))
        {
          ligne = ligne + elem.label + " "
        }
        else {
          ligne = ligne + elem.who + " "
        }

      })
      map.push(ligne)
    })
    result.aventuriers.map((el:any)=>{
      elementInMap.push('A - ' + el.name + " - " + el.y + " - " + el.x + ' - ' + el.orient + " - " + el.treasure)
    })

    elementInMap.unshift('C - '+ mapSize.larg + ' - ' + mapSize.haut)
    // elementInMap.map((element:any) => 
    // {
    //   str = str + element + "\n"
    // })
    return ({map, elementInMap})
  }
