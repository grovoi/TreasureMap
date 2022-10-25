export function getSizeMap(file:any)
  {
    let coord:any = []
    let map:any = []
    let larg:number = 0
    let haut:number = 0

    console.log(file)
    file.map((el:any) => {
      if (el[0] === "C")
      {
        map = el
        return
      }
    })

    if (map.length !== 0)
    {
      coord = map.split(" -")
        if (coord.length >= 3)
        {
          larg = parseInt(coord[1])
          haut = parseInt(coord[2])
        }
        else 
        return ({error: true, errorMessage:'format non valide'})
    }
    else
    {
        return ({error: true, errorMessage:'taille de la carte manquante'})
    }

    return ({larg, haut})
  }