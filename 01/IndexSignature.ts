type Roster = {
  [key: number]: string
}

const NameList: Roster = {
  1: "田中",
  2: "中村"
}

NameList[4] = "鈴木"

console.log(NameList) // { '1': '田中', '2': '中村', '4': '鈴木' }