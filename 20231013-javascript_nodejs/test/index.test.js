import { ping, obtenerDatosPromise, procesarArchivo, procesarArchivoPromise, leerArchivos, leerArchivosParalelo, delay } from "../solutions/index.js";

// -----Test basic elements
import { describe, it, beforeEach, afterEach } from 'node:test'
import { equal, ifError } from 'node:assert/strict'
import { unlinkSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { createRequire } from 'node:module'

describe('1. ping', () => {
  it('1.1. ping midu.dev', (_, done) => {
    ping('midu.dev', (err, info) => {
      ifError(err)
      equal(info.ip, 'midu.dev')
      done()
    })
  })
})

describe('2. obtenerDatosPromise', () => {
  it('2.1. obtenerDatosPromise', async () => {
    const { data } = await obtenerDatosPromise({ time: 1 })
    equal(data, 'datos importantes')
  })
})

describe('3. procesarArchivoPromise', () => {
  afterEach(() => {
    try {
      unlinkSync('output.txt')
    } catch {}
  })

  it('3.1. procesarArchivo', (t, done) => {
    writeFileSync('input.txt', 'gogogo')
    procesarArchivo((err) => {
      ifError(err)
      readFile('output.txt', 'utf8')
        .then((contenido) => {
          equal(contenido, 'GOGOGO')
          done()
        })
    })
  })

  it('3.2. procesarArchivoPromise', async () => {
    writeFileSync('input.txt', 'hola')
    await procesarArchivoPromise()
    const contenido = await readFile('output.txt', 'utf8')
    equal(contenido, 'HOLA')
  })
})

describe('4. leerArchivos', () => {
  // it('4.1. leerArchivos', () => {
  //   const mensaje = leerArchivos()
  //   equal(mensaje, 'hola qué tal')
  // })

  it('4.1. leerArchivos', async () => {
    const mensaje = await leerArchivos()
    equal(mensaje, 'hola qué tal')
  })

  it('4.2. leerArchivosParalelo', async () => {
    const mensaje = await leerArchivosParalelo()
    equal(mensaje, 'hola qué tal')
  })
})

describe('5. delay', () => {
  it('5.1. delay', async() => {
    const time=2;
    const mensaje = await delay(time*1000)
    equal(mensaje, `esperando:${time} segundos`)
  })

})
