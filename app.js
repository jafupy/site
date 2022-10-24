function expand(objID) {
    const obj = document.querySelector("#" + objID);
    if (obj.classList.contains("expanded")) {
        obj.classList.remove("expanded")
    } else {
        obj.classList.add("expanded")
    }
}

function question(element, q, a, qNum) {
    const base = document.querySelector(element);
    const card = document.createElement("article");
    const h2 = document.createElement("h2");
    const input = document.createElement("input");

    card.classList.add("card");
    h2.textContent = q
    input.type = "number";

    card.appendChild(h2);
    card.appendChild(input);
    base.appendChild(card)
}
