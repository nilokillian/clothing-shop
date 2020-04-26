export interface IFormInput {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}
