import React from "react";
import {
  ActionIcon,
  Group,
  Input,
  Loader,
  ScrollArea,
  Table,
  Text,
  Textarea,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import type { NextPage } from "next";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Trash } from "tabler-icons-react";
import { Message } from "../entities/Message";
import { deleteMessage, getMessages, sendEmail } from "../utils/api";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SendEmail: NextPage = () => {
  const handleSendEmail = async (data: any) => {
    await sendEmail(data);
    alert("Email sent.");
  };

  return (
    <Formik
      initialValues={{ to: "", subject: "", content: "" }}
      validationSchema={Yup.object({
        to: Yup.string().email("Invalid email address").required("Required"),
        subject: Yup.string().required("Required"),
        content: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        handleSendEmail(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <div>
          <Field as={Input} name="to" type="text" placeholder="To" />
          <ErrorMessage name="to" />
        </div>

        <div>
          <Field as={Input} name="subject" type="text" placeholder="Subject" />
          <ErrorMessage name="subject" />
        </div>

        <div>
          <Field as={Textarea} name="content" placeholder="Content" />
          <ErrorMessage name="content" />
        </div>

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default SendEmail;
