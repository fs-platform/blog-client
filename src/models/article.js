export function article(id) {
    return window.$http.get("article/"+id)
}
function articleDetail(id) {
    return window.$http.get("articleDetail/"+id)
}

export default {article,articleDetail};