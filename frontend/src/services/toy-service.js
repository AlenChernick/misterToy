import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

const KEY = 'toys_db'
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query({ name, status }) {
  return storageService.query(KEY).then((toys) => {
    let filteredToys = toys
    const regex = new RegExp(name, 'i')
    filteredToys = filteredToys.filter(toy => regex.test(toy.name))
    if (status) {
      filteredToys = filteredToys.filter(
        toy =>
          (toy.inStock && status === 'in') ||
          (!toy.inStock && status === 'out')
      )
    }
    return filteredToys
  })
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy._id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    _id: utilService.makeId(),
    name: '',
    price: null,
    labels: [],
    createdAt: null,
    inStock: true,
  }
}

function _createToys() {
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
        _id: utilService.makeId(), name: 'Talking Doll"', price: 30, labels: ["Doll", "Battery Powered", "Baby"], createdAt: Date.now(), inStock: false,
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
