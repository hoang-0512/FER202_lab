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
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import orchidData from "../../../data/ListOfOrchids";
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
        .required("Bắt buộc.")
        .min(2, "Phải có ít nhất 2 ký tự"),
      email: Yup.string().required("Bắt buộc.").email("Email không hợp lệ"),
      phone: Yup.number().integer().typeError("Vui lòng nhập số điện thoại hợp lệ"),
      program: Yup.number()
        .integer()
        .min(1, "Vui lòng chọn loại hoa lan.")
        .typeError("Vui lòng chọn loại hoa lan."),
      message: Yup.string()
        .required("Bắt buộc.")
        .min(10, "Phải có ít nhất 10 ký tự"),
      agree: Yup.boolean().oneOf(
        [true],
        "Bạn phải đồng ý với các điều khoản và điều kiện."
      ),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        alert("Tin nhắn đã được gửi thành công! 🌸 Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.");
        setIsSubmitting(false);
        formik.resetForm();
      }, 2000);
    },
  });

  return (
    <div className="contact-page">
      {/* Header với ảnh hoa lan */}
      <Fade in={true} timeout={600}>
        <Box className="contact-header">
          <div className="contact-hero-image">
            <img
              src={orchidData.find(orchid => orchid.id === "14").image}
              alt="Lan Trắng Tinh Khôi - Liên hệ với chúng tôi"
            />
          </div>
          <div className="contact-hero-content">
            <Typography variant="h3" className="contact-title">
              Liên Hệ Với Chúng Tôi
            </Typography>
            <Typography variant="h6" className="contact-subtitle">
              Hãy để lại thông tin để được tư vấn về hoa lan tốt nhất
            </Typography>
          </div>
        </Box>
      </Fade>

      <Container maxWidth="sm" sx={{ mt: 4, mb: 6 }}>
        <Fade in={true} timeout={800}>
          <Paper elevation={0} className="contact-main-container">
          <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Grow in={true} timeout={600}>
                    <TextField
                      fullWidth
                      placeholder="Họ và tên"
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
                      placeholder="Số điện thoại"
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
                                Loại hoa lan quan tâm
                              </span>
                            );
                          }
                          const programs = [
                            "",
                            "Lan Hồ Điệp (Phalaenopsis)",
                            "Lan Cattleya",
                            "Lan Dendrobium", 
                            "Lan Vanda",
                            "Lan Cymbidium",
                            "Tất cả các loại",
                          ];
                          return programs[selected];
                        }}
                      >
                        <MenuItem value={0} disabled>
                          <span style={{ color: "#7f8c8d" }}>
                            Vui lòng chọn
                          </span>
                        </MenuItem>
                        <MenuItem value={1}>Lan Hồ Điệp (Phalaenopsis)</MenuItem>
                        <MenuItem value={2}>Lan Cattleya</MenuItem>
                        <MenuItem value={3}>Lan Dendrobium</MenuItem>
                        <MenuItem value={4}>Lan Vanda</MenuItem>
                        <MenuItem value={5}>Lan Cymbidium</MenuItem>
                        <MenuItem value={6}>Tất cả các loại</MenuItem>
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
                      placeholder="Tin nhắn của bạn về hoa lan..."
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
                      label="Đồng ý với các điều khoản và điều kiện"
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
                      {isSubmitting ? "ĐANG GỬI..." : "GỬI TIN NHẮN"}
                    </Button>
                  </Grow>
                </Grid>
              </Grid>
            </form>
          </div>
        </Paper>
      </Fade>
    </Container>
    </div>
  );
};

export default Contact;
