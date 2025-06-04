import * as yup from "yup";

export const userProfileSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name is too long")
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Only alphabets with single spaces allowed"
    )
    .required("Name is required"),

  email: yup.string().email("Invalid email").required("Email is required"),

  image: yup.mixed().required("Image is required"),
});


