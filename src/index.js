const express = require('express')

const port = 3000
const app = express()

const users = [
    {
        id: 1,
        name: 'caro',
        lastname: 'Brofman',
    },
    {
        id: 2,
        name: 'Juan',
        lastname: 'Fernandez',
    },
    {
        id: 3,
        name: 'Cruz',
        lastname: 'Fernandez',
    },
    {
        id: 4,
        name: 'Zara',
        lastname: 'Fernandez',
    },
]
app.get('/users', (req, res) => {
    const { limit } = req.query
    if (limit) {
        const users = users.slice(0, limit)
        return res.json({ message: users })
    }
    res.json({ message: usersFilter })
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params

    const user = users.find(user => user.id === id)

    res.json({ message: user })
})



app.listen(3000, () => {
    console.log(`Server running at port ${port} `)
})

