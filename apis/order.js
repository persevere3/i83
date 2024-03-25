import { jsonRequest } from "@/utils/https"

/** 增 */
export function postDataApi(originData) {
  return jsonRequest({
    url: `OrderInfos?tableId=${originData.tableId}&token=${originData.token}`,
    method: "post",
    data: {
      storeName: originData.storeName,
      tableNumber: originData.tableNumber,
      mealList: originData.mealList,
      payMethod: originData.payMethod,
      total: originData.total,
      birthdayBonus: originData.birthdayBonus
    }
  })
}