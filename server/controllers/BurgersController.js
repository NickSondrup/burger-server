import { fakeDb } from '../db/FakeDb.js'
import { burgersService } from '../services/BurgersService.js'
import BaseController from '../utils/BaseController.js'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getBurgers)
      .get('/:id', this.getBurger)
      .post('', this.createBurger)
  }

  async getBurgers(req, res, next) {
    res.send(fakeDb.burgers)
  }

  async getBurger(req, res, next) {
    try {
      const id = req.params.id
      const burger = burgersService.getById(id)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const newBurger = await burgersService.createBurger(req.body)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
}
