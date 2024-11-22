import { toast } from "react-toastify";

const Success = (msg: String) => {
  toast.success(msg);
};
const Error = (msg: String) => {
  toast.error(msg);
};

const Warning = (msg: String) => {
  toast.warning(msg);
};

export default { Success, Warning, Error };
