export interface IModals {
  title: string;
  description?: string;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onCancel: () => void;
}
