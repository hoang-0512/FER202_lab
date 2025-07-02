import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Fade,
  Grow,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.number().integer().typeError("Please enter a valid number"),
      program: Yup.number()
        .integer()
        .min(1, "Please select a program.")
        .typeError("Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert("Message sent successfully! 🎉");
        setIsSubmitting(false);
        formik.resetForm();
      }, 2000);
    },
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Fade in={true} timeout={800}>
        <Paper elevation={0} className="contact-main-container">
          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grow in={true} timeout={600}>
                    <TextField
                      fullWidth
                      placeholder="Name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      variant="outlined"
                      className="form-input"
                      InputLabelProps={{ shrink: false }}
                    />
                  </Grow>
                </Grid>

                <Grid item xs={12}>
                  <Grow in={true} timeout={800}>
                    <TextField
                      fullWidth
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                      variant="outlined"
                      className="form-input"
                      InputLabelProps={{ shrink: false }}
                    />
                  </Grow>
                </Grid>

                <Grid item xs={12}>
                  <Grow in={true} timeout={1000}>
                    <TextField
                      fullWidth
                      placeholder="Phone"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                      helperText={formik.touched.phone && formik.errors.phone}
                      variant="outlined"
                      className="form-input"
                      InputLabelProps={{ shrink: false }}
                    />
                  </Grow>
                </Grid>

                <Grid item xs={12}>
                  <Grow in={true} timeout={1200}>
                    <FormControl
                      fullWidth
                      error={
                        formik.touched.program && Boolean(formik.errors.program)
                      }
                      variant="outlined"
                      className="form-select"
                    >
                      <Select
                        displayEmpty
                        name="program"
                        value={formik.values.program}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        renderValue={(selected) => {
                          if (selected === 0) {
                            return (
                              <span style={{ color: "#7f8c8d" }}>
                                Program of Study
                              </span>
                            );
                          }
                          const programs = [
                            "",
                            "Software Engineering",
                            "Information System",
                            "Information Assurance",
                            "Internet of Things",
                            "Artificial Intelligence",
                            "Digital Art & Design",
                          ];
                          return programs[selected];
                        }}
                      >
                        <MenuItem value={0} disabled>
                          <span style={{ color: "#7f8c8d" }}>
                            Please select
                          </span>
                        </MenuItem>
                        <MenuItem value={1}>Software Engineering</MenuItem>
                        <MenuItem value={2}>Information System</MenuItem>
                        <MenuItem value={3}>Information Assurance</MenuItem>
                        <MenuItem value={4}>Internet of Things</MenuItem>
                        <MenuItem value={5}>Artificial Intelligence</MenuItem>
                        <MenuItem value={6}>Digital Art & Design</MenuItem>
                      </Select>
                      {formik.touched.program && formik.errors.program && (
                        <Typography variant="caption" color="error">
                          {formik.errors.program}
                        </Typography>
                      )}
                    </FormControl>
                  </Grow>
                </Grid>

                <Grid item xs={12}>
                  <Grow in={true} timeout={1400}>
                    <TextField
                      fullWidth
                      placeholder="Message"
                      multiline
                      name="message"
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                      variant="outlined"
                      className="form-textarea"
                      InputLabelProps={{ shrink: false }}
                    />
                  </Grow>
                </Grid>

                <Grid item xs={12}>
                  <Grow in={true} timeout={1600}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formik.values.agree}
                          onChange={formik.handleChange}
                          name="agree"
                          color="primary"
                          size="small"
                        />
                      }
                      label="Agree to terms and conditions"
                    />
                  </Grow>
                  {formik.touched.agree && formik.errors.agree && (
                    <Typography variant="caption" color="error" display="block">
                      {formik.errors.agree}
                    </Typography>
                  )}
                </Grid>

                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Grow in={true} timeout={1800}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={`send-button ${isSubmitting ? "loading" : ""}`}
                      disabled={isSubmitting}
                      disableElevation
                      endIcon={
                        isSubmitting ? null : (
                          <SendIcon className="send-button-icon" />
                        )
                      }
                      sx={{
                        minWidth: "200px",
                        maxWidth: "300px",
                      }}
                    >
                      {isSubmitting ? "SENDING..." : "SEND"}
                    </Button>
                  </Grow>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Fade>
    </Container>
  );
};

export default Contact;
