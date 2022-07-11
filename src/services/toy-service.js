import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toys_db'
_createCars()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyCar,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyCar() {
  return {
    name: '',
    price: null,
    labels: [],
    createdAt: null,
    inStock: true,
  }
}

function _createCars() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: utilService.makeId(), name: 'Talking Doll"', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: Date.now(), inStock: true,
      },
      {
        _id: utilService.makeId(), name: 'Talking Doll"', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: Date.now(), inStock: true,
      },
      {
        _id: utilService.makeId(), name: 'Talking Doll"', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: Date.now(), inStock: true,
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
