import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Contact.css";

const Contact = () => {
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
      program: Yup.number().integer().typeError("Please select a program."),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted."
      ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return (
    <Container
      maxWidth="md"
      sx={{ mt: 6, mb: 6 }}
      className="contact-main-container"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#2e7d32",
            width: 80,
            height: 80,
            mb: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ContactMailIcon fontSize="large" />
        </Avatar>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          className="contact-title"
          sx={{ fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          align="center"
          sx={{ maxWidth: "600px", mb: 3 }}
          className="contact-subtitle"
        >
          Have questions about our orchids or want to collaborate? Fill out the
          form below and we'll get back to you within 24 hours.
        </Typography>
        <Divider sx={{ width: "100%", mb: 4 }} className="divider" />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card elevation={3} className="contact-info-container">
            <Typography variant="h5" className="info-title">
              Get In Touch
            </Typography>

            <Box className="info-section">
              <Typography variant="body1" className="info-label">
                <LocationOnIcon sx={{ mr: 1, color: "#2e7d32" }} /> Address
              </Typography>
              <Typography variant="body2" className="info-value">
                Lô E2a-7, Đường D1, Khu Công Nghệ Cao, P. Long Thạnh Mỹ, TP. Thủ
                Đức, TP. Hồ Chí Minh
              </Typography>
            </Box>

            <Box className="info-section">
              <Typography variant="body1" className="info-label">
                <EmailIcon sx={{ mr: 1, color: "#2e7d32" }} /> Email
              </Typography>
              <Typography variant="body2" className="info-value">
                contact@orchidparadise.com
              </Typography>
            </Box>

            <Box className="info-section">
              <Typography variant="body1" className="info-label">
                <PhoneIcon sx={{ mr: 1, color: "#2e7d32" }} /> Phone
              </Typography>
              <Typography variant="body2" className="info-value">
                +84 123 456 789
              </Typography>
            </Box>

            <Box className="info-section">
              <Typography variant="body1" className="info-label">
                <AccessTimeIcon sx={{ mr: 1, color: "#2e7d32" }} /> Opening
                Hours
              </Typography>
              <Typography variant="body2" className="info-value">
                Monday - Friday: 8:00 AM - 5:00 PM
              </Typography>
              <Typography variant="body2" className="info-value">
                Saturday: 9:00 AM - 12:00 PM
              </Typography>
              <Typography variant="body2" className="info-value">
                Sunday: Closed
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper elevation={3} className="form-container">
            <Typography variant="h5" className="form-title">
              Send us a message
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Your Full Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    variant="outlined"
                    className="form-input"
                    size="small"
                    color="success"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Email Address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    className="form-input"
                    size="small"
                    color="success"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    placeholder="Phone Number"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    variant="outlined"
                    className="form-input"
                    size="small"
                    color="success"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    error={
                      formik.touched.program && Boolean(formik.errors.program)
                    }
                    variant="outlined"
                    className="form-select"
                    size="small"
                    color="success"
                  >
                    <Select
                      displayEmpty
                      name="program"
                      value={formik.values.program}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value={0}>
                        <em>Select a program</em>
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
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    placeholder="Your Message"
                    multiline
                    name="message"
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                    variant="outlined"
                    className="form-textarea"
                    size="small"
                    color="success"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formik.values.agree}
                        onChange={formik.handleChange}
                        name="agree"
                        color="success"
                        size="small"
                      />
                    }
                    label="Agree to terms and conditions"
                  />
                  {formik.touched.agree && formik.errors.agree && (
                    <Typography variant="caption" color="error" display="block">
                      {formik.errors.agree}
                    </Typography>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      endIcon={<SendIcon className="send-button-icon" />}
                      className="send-button"
                      disableElevation
                    >
                      SEND MESSAGE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
