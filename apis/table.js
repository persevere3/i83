import { formRequest } from "@/utils/https"

/** 查 */
export function getDataApi() {
  return formRequest({
    url: "Tables",
    method: "get",
  })
}
