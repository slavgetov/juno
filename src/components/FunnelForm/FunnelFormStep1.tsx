import { Button } from "@mui/base";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log("hey");
    console.log(data);
    navigate("/form-step2");
  };
  return (
    <section>
      <div></div>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <label>Please provide a name Juno can use</label>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <label>Please provide a nickname</label>
        <input {...register("nickname", { required: true, maxLength: 20 })} />

        <Button
          type="submit"
          className={
            errors.firstName || errors.nickname
              ? "disabledFormButton"
              : "formButton"
          }
        >
          {buttonTitle}
        </Button>
      </form>
    </section>
  );
};

export default FunnelFormStep1;
