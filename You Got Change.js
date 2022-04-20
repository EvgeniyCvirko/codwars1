function giveChange(amount) {
  let arr = []
  let a = Math.trunc(amount / 100)
  arr.unshift(a)
  let b = Math.trunc((amount - a*100) / 50)
  arr.unshift(b)
  let c = Math.trunc(((amount - a*100)-b*50)/20)
  arr.unshift(c)
  let d = Math.trunc(((amount - a*100)-b*50 - c*20)/10)
  arr.unshift(d)
  let f = Math.trunc(((amount - a*100)-b*50 - c*20 - d*10)/5)
  arr.unshift(f)
  let g = Math.trunc(((amount - a*100)-b*50 - c*20 - d*10 - f*5)/1)
  arr.unshift(g)
  return arr;
}

giveChange(2170);