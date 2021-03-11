const hourItem = document.querySelector('.hour1'),
    minItem = document.querySelector('.min1'),
    secItem = document.querySelector('.sec1'),
    hourItem2 = document.querySelector('.hour2'),
    minItem2 = document.querySelector('.min2'),
    secItem2 = document.querySelector('.sec2')

const update = () => {
    const date = new Date()

    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    return {
        hour,
        min,
        sec,
    }
}

setInterval(() => {
    const {hour, min, sec} = update()
    hourItem.innerHTML = Math.floor(hour / 10) 
    minItem.innerHTML = Math.floor(min / 10)
    secItem.innerHTML = Math.floor(sec / 10)

    hourItem2.innerHTML = hour % 10
    minItem2.innerHTML = min % 10
    secItem2.innerHTML = sec % 10

}, 1000)