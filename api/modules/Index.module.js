

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

    getParams(where, order) {
        where = where ? where.split(',') : []
        order = order ? order.split(',') : []

        let sql = '', orderBy = '', columns = []
        for (let i = 0; i < where.length; i++) {
            let sqlString = where[i].split('-')
            if (i === 0) {
                sql += sqlString[0] + ' = ?'
            } else {
                sql += ' AND ' + sqlString[0] + ' = ?'
            }
            
            columns.push(sqlString[1])
        }

        if (order.length > 0) {
            orderBy = ' ORDER BY '
            for (let i = 0; i < order.length; i++) {
                let sqlString = order[i].split('-')
                if (i === 0) {
                    orderBy += sqlString[0] + ' ' + sqlString[1]
                } else {
                    orderBy += ', ' + sqlString[0] + ' ' + sqlString[1]
                }
            }
        }

        return {sql, orderBy, columns}
    }
}

module.exports = HelperFunctions