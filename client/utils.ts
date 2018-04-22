export function safePost(cb, idx) {
  return {
    data: cb(),
    idx
  }
}