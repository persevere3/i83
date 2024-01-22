import { jsonRequest } from "@/utils/https"

/** 增 */
export function postDataApi(data) {
  return jsonRequest({
    url: `OrderInfos?tableId=${data.tableId}&token=${data.token}`,
    method: "post",
    data: data.map(item => {
      return {
        storeName: item.storeName,
        tableNumber: item.tableNumber,
        mealList: item.mealList,
        payMethod: item.payMethod,
        total: item.total
      }
    }),
  })
}