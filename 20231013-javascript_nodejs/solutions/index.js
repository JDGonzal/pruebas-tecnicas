//Ejercicio-1 (00:08:31)
import net from 'node:net'

// falta añadir un `callbak`
// export const ping = (ip) => {
export const ping = (ip, callbak) => {
  const startTime = process.hrtime()

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end()
    //? Quitamos este `return` que no devuelve nada y se cambia por un callback
    // return { time: process.hrtime(startTime), ip }
    //! se pasa 1° `error` es el `null`y 2° la info a mostrar
    callbak(null, { time: process.hrtime(startTime), ip })
  })

  client.on('error', (err) => {
    //? Quitamos el `throw` que acá no sirve para nada
    // throw err
    client.end()
    //! Se añade un `callback` para pasar el error
    callbak(err) 
  })
}

ping('midu.dev', (err, info) => {
  if (err) console.error(err)
  // Debería retornar el tiempo de respuesta a un `ping`
  // console.log(info) => Falta un `else` para mostar la info
  else console.log(info)
})

//* Para este primer ejercicio solo corrí en la Terminal este comando:
// node .\solutions\index.js
//* Y mi respuesta es similar a esta: { time: [ 0, 243854200 ], ip: 'midu.dev' }
