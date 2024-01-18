import { jsonRequest } from "@/utils/https"

/** 查 */
export function getDataApi() {
  return jsonRequest({
    url: "Categories",
    method: "get",
  })
}