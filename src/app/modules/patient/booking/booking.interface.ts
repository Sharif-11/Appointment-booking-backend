/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model, Schema } from 'mongoose'

interface IBooking {
  appointmentId: Schema.Types.ObjectId
  userId: Schema.Types.ObjectId
  paymentId?: Schema.Types.ObjectId
  problemDescription?: string
  paymentStatus: 'paid' | 'unpaid'
}
export type BookingModel = Model<IBooking, Record<string, unknown>>
export default IBooking
