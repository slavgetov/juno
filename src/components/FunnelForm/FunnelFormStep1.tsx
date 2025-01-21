import { Button } from "@mui/base";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import "./FunnelFormStep1.css";

type FunnelFormProps1 = {
  // firstName: string;
  // nickname: string;
  buttonTitle: string;
};

interface FormData {
  firstName: string;
  nickname: string;
}

const FunnelFormStep1 = ({ buttonTitle }: FunnelFormProps1) => {
  //so not only should you provide a generic to the hook but also to the props
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <label>Please provide a name Juno can use</label>
        <input {...register("firstName")} />
        <label>Please provide a nickname optionally</label>
        <input {...register("nickname")} />
        <Link to="/form-step2">
          <Button className="formButton">{buttonTitle}</Button>
        </Link>
      </form>
    </section>
  );
};

export default FunnelFormStep1;
