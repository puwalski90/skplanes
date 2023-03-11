export interface ModalModel {
    title: string,
    text: string,
    buttons: {
      save: boolean,
      cancel: boolean,
    },
    optional?: string
}
