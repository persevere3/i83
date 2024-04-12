import { jsonRequest } from "@/utils/https"

/** 查 */
export function getDataApi(storeId) {
  let url = storeId ? `Categories?storeId=${storeId}` : `Categories`
  return jsonRequest({
    url,
    method: "get",
  })
}