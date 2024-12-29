import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as z from "zod";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/ErrorMessage";
import SubmitButton from "../components/SubmitButton";

const validationSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters")
    .nonempty("Password is required"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          try {
            validationSchema.parse(values);
          } catch (error) {
            if (error instanceof z.ZodError) {
              return error.flatten().fieldErrors;
            }
          }
        }}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email?.[0]} visible={touched.email} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              textContentType="password"
              secureTextEntry={true}
            />
            <ErrorMessage error={errors.password?.[0]} visible={touched.password }  />
            <SubmitButton title="Login" />
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
