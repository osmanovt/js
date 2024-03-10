let res
res = function (x, ...args) {
  return {
    x,
    args,
  }
}

console.log(res(1, 2, '2312', [4, 3]))
const organisation = {
  name: 'Google',
  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing'],
  },
}
const getInfo = ({
  name = 'Unknown', info: {
    partners: [partner1, partner2],
  },
}) => {
  console.log(`Name: ${name}`)
  console.log(`Partners: ${partner1} ${partner2}`)
}

getInfo(organisation)