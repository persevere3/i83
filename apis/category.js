import { jsonRequest } from "@/utils/https"

/** 查 */
export function getDataApi(storeId) {
  return jsonRequest({
    url: `Categories?storeId=${storeId}`,
    method: "get",
  })
}