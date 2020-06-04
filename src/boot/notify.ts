import { Notify } from 'quasar'
import { Dialog } from 'quasar'

export default ({ store, Vue }: any) => {

  function notifyExec (type: 'ok' | 'error', ...args: any): any {
    let color : any = ''
    const message: string = args[0]

    if (type === 'ok') {
      color = 'teal'
    }
    if (type === 'error') {
      color = 'negative'
    }
    const timeout: number = args[1] === undefined ? 3000 : args[1]

    // console.trace()

    Notify.create({
      position: 'top',
      color,
      message,
      classes: 'notify-word-wrap',
      timeout,
    })
  };

  function confirmExec (
    { title, message, cancel, persistent, onOk, onOkParam, onCancel, onCancelParam }: {
      title: string,
      message: string,
      cancel: boolean,
      persistent: boolean,
      onOk: any,
      onOkParam: any,
      onCancel: any,
      onCancelParam: any
    }): any {
    Dialog.create({
      title,
      message,
      cancel,
      persistent,
    }).onOk(() => {
      if (onOk) { onOk(onOkParam) }
    }).onCancel(() => {
      if (onCancel) { onCancel(onCancelParam) }
    })
  };

  Vue.prototype.$notify = notifyExec;
  Vue.prototype.$confirm = confirmExec;
}

declare module 'vue/types/vue' {
  interface Vue {
    $notify: any;
    $confirm: any;
  }
}
