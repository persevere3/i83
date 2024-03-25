import { jsonRequest } from "@/utils/https"

/** 查 */
export function getDataApi(tableId) {
  return jsonRequest({
    url: `OrderInfos/GetToken/${tableId}`,
    method: "get",
  })
}