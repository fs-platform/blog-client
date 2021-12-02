function article(id) {
    return window.$http.get("article/"+id)
}

export default article;