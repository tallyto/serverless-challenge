export interface Controller {
  find: (id: string) => any
  create: (data: any) => any
  update: (id: string, data: any) => any
  delete: (id: string) => any
}
