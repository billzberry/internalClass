

class HelperFunctions {

    getDateTime() {
        const date = new Date()
        let month = date.getUTCMonth() + 1
        month = month > 9 ? month : '0'+month
        const today = date.getUTCFullYear() + '-' + month + '-' + date.getUTCDate()
        const time = date.getUTCHours() + ':' + date.getUTCMinutes() + ':' + date.getUTCSeconds()
        return today + ' ' + time
    }

    getTimeStamp() {
        const timestamp = Date.now()
        return this.shuffle(timestamp.toString()).substring(0, 8)
    }

    shuffle(value) {
        let a = value.split(""), n = a.length
        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let tmp = a[i]
            a[i] = a[j]
            a[j] = tmp
        }
        return a.join("")
    }
}

module.exports = HelperFunctions