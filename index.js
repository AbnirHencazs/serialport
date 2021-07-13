const serialPort = require('serialport')

const HW_PORT = process.argv[2]
const BAUD_RATE = process.argv[3]

const port = new serialPort(
    HW_PORT,
    { baudRate: parseInt( BAUD_RATE ) }
)

port.on('data', (buffer) => {
    const data = buffer.toString()
    console.log(`Nuevo buffer: ${data} - ${new Date()}`, buffer)
})

