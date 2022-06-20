//test 함수는 제스트가 한 가지 기능을 테스트할 때 사용하는 함수
import { timesTwo, order } from "./functions";
// test 이름, test fuction,  timeout default 5sec
// expect를 사용하여 단언문 작성, expect는 제스트 matcher를 반환
//mathcer: 결과 객체가 .toBe에 전달된 객체가 같은지 매치함
describe("Math func tes", () => {
  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });
});

const menuItmes = [
  {
    id: "1",
    name: "Tatted Up Tarkey Burger",
    price: 18,
  },
  {
    id: "2",
    name: "Lobster",
    price: 16,
  },
  {
    id: "3",
    name: "Pork Sandwich",
    price: 20,
  },
];
const result = {
  orderItems: menuItmes,
  total: 54,
};

test("Build an order object", () => {
  expect(order(menuItmes)).toEqual(result);
});
