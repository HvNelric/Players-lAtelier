export const fetchPlayers = (url, fnSetter) => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            fnSetter(response.players)
        })
}