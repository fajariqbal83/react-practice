import { useEffect, useState } from "react";
import { getFormConfig, submitFormData } from "./formApi";
import { useForm } from "react-hook-form";

const App = () => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const load = async () => {
       try {
        const res = await getFormConfig();

        setFields(res.data.fields); 
      } catch (err) {
        console.log("Error loading form:", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const onSubmit = async (formData) => {
   try {
      const response = await submitFormData(formData);
      setMessage("Form submitted successfully!");
      console.log(response);
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong!");
    }
  }
 if (loading) return <p>Loading form...</p>;

  return (
     <div className="m-5">
      <div className="text-3xl font-bold mb-5">Contact Form</div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => (
          <div key={field.id} className="mb-5 flex items-center">
  <label className="w-32 text-lg font-semibold">{field.label}</label>

  {field.type !== "textarea" ? (
    <input
      type={field.type}
      className=" border rounded w-90 py-2 px-3"
      placeholder={field.placeholder}
      {...register(field.name)}
    />
  ) : (
    <textarea
      className=" border w-90 rounded py-2 px-3"
      placeholder={field.placeholder}
      rows={4}
      {...register(field.name)}
    ></textarea>
  )}
</div>
        ))}

        <button
        className="bg-amber-500 py-3 px-5 rounded-2xl font-medium"
        type="submit"
        >
         SUBMIT
        </button>

      </form>
      
     </div>
  );
};

export default App;