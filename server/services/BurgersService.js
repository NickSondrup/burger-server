import { fakeDb } from '../db/FakeDb.js'
import { BadRequest, NotFound } from '../utils/Errors.js'
class BurgersService {
  getById(id) {
    const found = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!found) {
      throw new NotFound('No burger by that Id' + id)
    }
    return found
  }

  createBurger(burgerData) {
    const found = fakeDb.burgers.find(b => b.name === burgerData.name)
    if (found) {
      throw new BadRequest('Puppy already exists')
    }
    burgerData.id = Math.floor(Math.random() * 100)
    fakeDb.burgers.push(burgerData)
    return burgerData
  }
}

export const burgersService = new BurgersService()
