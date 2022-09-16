const app = require("./app")
const { PORT = 5001 } = process.env
const listener = () => console.log(`Server running on port ${PORT}`)
app.listen(PORT, listener)