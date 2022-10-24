function expand(objID) {
    const obj = document.querySelector("#" + objID);
    if (obj.classList.contains("expanded")) {
        obj.classList.remove("expanded")
    } else {
        obj.classList.add("expanded")
    }
}

