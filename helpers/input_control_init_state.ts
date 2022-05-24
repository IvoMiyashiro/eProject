export interface IInputControl {
  value: string;
  hasError: boolean;
  errorMsj: string;
}

export const INPUT_CONTROL_INIT_STATE: IInputControl = {
  value: '',
  hasError: false,
  errorMsj: ''
};
