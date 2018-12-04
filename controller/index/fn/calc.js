/**
 * Author zhanghaonan@shuidihuzhu.com
 * create by 2018/12/3 下午8:00
 * calc.js
 */


var beginLine = 5000 // 起征点

var money = 0 // 工资

var insurance = 0 // 五险基数
var accumulation = 0 // 公积金基数
var accumulationRate = 0 // 公积金缴纳比例

var reduceChildren = 0 // 子女扣除 一个孩子扣1000
var reduceHouse = 0 // 住房贷款利息扣除
var reduceHouseRent = 0 // 住房租金扣除
var reduceFamily = 0 // 赡养老人扣除

var taxList = [3000, 12000, 25000, 35000, 55000, 80000, -1]
var taxRateList = [0.03, 0.10, 0.20, 0.25, 0.30, 0.35, 0.45]
function calc(money, i) {

  if (taxList[i] === -1) return money * taxRateList[i]
  var cur = 0
  if (money <= taxList[i]) {
    return money * taxRateList[i]
  } else {
    cur = taxList[i] * taxRateList[i]
    return cur + calc(money - taxList[i], i + 1)
  }
}

module.exports = function (body) {
  money = body.total
  insurance = body.insurance
  accumulation = body.accumulation
  accumulationRate = body.accumulationRate
  reduceChildren = body.reduceChildren
  reduceHouse = body.reduceHouse
  reduceHouseRent = body.reduceHouseRent
  reduceFamily = body.reduceFamily
  var beginMoney = money - beginLine - insurance - (accumulation * accumulationRate) - reduceHouse - reduceHouseRent
  var tax = calc(beginMoney, 0) // 交税总额
  var last = money - tax - insurance - (accumulation * accumulationRate) // 剩余应缴税金额
  return {
    tax: tax,
    lastMoney: last,
    insurance: insurance,
    accumulation: accumulation * accumulationRate * 2
}
}

// 0 - 3000 3%
// 3000 - 12000 10% a
// 12000 - 25000 20% b
// 25000 - 35000 25% c
// 35000 - 55000 30% d
// 55000 - 80000 35% e
// 80000+ 45% f