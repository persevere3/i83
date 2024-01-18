import { jsonRequest } from "@/utils/https"

/** 增 */
export function postDataApi(data) {
  return jsonRequest({
    url: `OrderInfos?tableId=${data.tableId}&token=${data.token}`,
    method: "post",
    data,
  })
}