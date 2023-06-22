export interface Stock {
    name : string
    slug : string
    percent : number
    data : stockData[]
}

interface stockData {
    date : Date
    value : number
}