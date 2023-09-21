import InputText from "../ui/InputText";
import { useCategoryQuestion } from "../../services/CategoryQuestionsForm";
import InputEmail from "../ui/InputEmail";
import InputSelect from "../ui/InputSelect";
import { ChangeEvent } from "react";
import { InputCheckbox } from "../ui/InputCheckbox";
import { Button } from "../ui/Button";

export const PersonalInfo = () => {
  const { isLoading, isError, question } = useCategoryQuestion("Personal");

  if (isLoading) return "Loading...";
  if (isError) return "An error has occurred";

  return (
    <>
      <div>
        {question?.map((q) => {
          if (q.type === "text") {
            return (
              <InputText
                key={q.id}
                id={q.id_question}
                type={q.type}
                expandText={q.expandText}
                children={q.text}
              />
            );
          } else if (q.type === "email") {
            return (
              <InputEmail
                key={q.id}
                placeholder={q.placeholder}
                children={q.text}
              />
            );
          } else if (q.type === "select") {
            return (
              <InputSelect
                key={q.id}
                id={q.id_question}
                label={q.text}
                options={q.options}
                onChange={(event: ChangeEvent<HTMLSelectElement>): void => {
                  throw new Error("Function not implemented.");
                }}
              />
            );
          } else if (q.type === "date") {
            return (
              <InputText
                key={q.id}
                id={q.id_question}
                type={q.type}
                expandText={q.expandText}
                children={q.text}
              />
            );
          } else if (q.type === "checkbox") {
            return (
              <InputCheckbox
                key={q.id}
                label={q.text}
                options={q.options}
                selectedValues={[]}
                onChange={(selectedValues: string[]): void => {
                  throw new Error("Function not implemented.");
                }}
                expandText={q.expandText}
              />
            );
          }
          return null; // Handle other types or return null if needed
        })}
      </div>
    </>
  );
};
